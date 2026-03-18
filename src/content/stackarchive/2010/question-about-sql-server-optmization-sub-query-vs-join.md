---
title: "Question about SQL Server Optmization Sub Query vs. Join"
description: "A question I asked on Stack Overflow"
date: 2010-03-01
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - t-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2359625"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2359625):*

Which of these queries is more efficient, and would a modern DBMS (like SQL Server) make the changes under the hood to make them equal?

```
SELECT DISTINCT S# 
  FROM shipments 
 WHERE P# IN (SELECT P# 
                FROM parts 
               WHERE color = ‘Red’)

```

vs.

```
SELECT DISTINCT S# 
  FROM shipments, parts 
 WHERE shipments.P# = parts.P# 
   AND parts.color = ‘Red’

```

---

> [Mark Brittingham answered](https://stackoverflow.com/a/2360679) (6 upvotes):
>
> The best way to satiate your curiosity about this kind of thing is to fire up Management Studio and look at the Execution Plan. You'll also want to look at SQL Profiler as well. As one of my professors said: "the compiler is the final authority." A similar ethos holds when you want to know the performance profile of your queries in SQL Server - just _look._
> 
> **Starting here, this answer has been updated**
> 
> The actual comparison might be very revealing. For example, in testing that I just did, I found that either approach might yield the fastest time depending on the nature of the query. For example, a query of the form:
> 
> ```
> Select F1, F2, F3 From Table1 Where F4='X' And UID in (Select UID From Table2)
> 
> ```
> 
> yielded a table scan on Table1 and a mere index scan on table 2 followed by a right semi join.
> 
> A query of the form:
> 
> ```
> Select A.F1, A.F2, A.F3 From Table1 A inner join Table2 B on (A.UID=B.UID) 
>   Where A.Gender='M'
> 
> ```
> 
> yielded the same execution plan with one caveat: the hash match was a simple right join this time. So that is the first thing to note: the execution plans _were not dramatically different._
> 
> These are not duplicate queries though since the second one may return multiple, identical records (one for each record in table 2). The surprising thing here was the performance: the _subquery was far faster than the inner join._ With datasets in the low thousands (thank you Red Gate SQL Data Generator) the inner join was _40 times slower_. I was fairly stunned.
> 
> Ok, how about a real apples to apples? _This_ is the matching inner join - note the extra step to winnow out the duplicates:
> 
> ```
> Select Distinct A.F1, A.F2, A.F3 From Table1 A inner join Table2 B 
>   on (A.UID=B.UID) 
>   Where A.Gender='M'
> 
> ```
> 
> The execution plan does change in that there is an extra step - a sort after the inner join. Oddly enough, though, the time drops dramatically such that the two queries are almost identical (on two out of five trials the inner join is very slightly faster). Now, I can imagine the first inner join (without the "distinct") being somewhat longer just due to the fact that more data is being forwarded to the query window - but it was only twice as much (two Table2 records for every Table1 record). I have no good explanation why the first inner join was so much slower.
> 
> When you add a predicate to the search on table 2 using a subquery:
> 
> ```
> Select F1, F2, F3 From Table1 Where F4='X' And UID in 
>     (Select UID From Table2 Where F1='Y')
> 
> ```
> 
> then the Index Scan is changed to a Clustered Index Scan (which makes sense since the UID field has its own index in the tables I am using) and the percentage of time it takes goes up. A Stream Aggregate operation is also added. Sure enough, this does slow the query down. However, plan caching obviously kicks in as the first run of the query shows a much greater effect than subsequent runs.
> 
> When you add a predicate using the inner join, the entire plan changes pretty dramatically (left as an exercise to the reader - this post is long enough). The performance, again, is pretty much the same as that of the subquery - as long as the "Distinct" is included. Similar to the first example, omitting distinct led to a significant increase in time to completion.
> 
> One last thing: someone suggested (and your question now includes) a query of the form:
> 
> ```
> Select Distinct F1, F2, F3 From table1, table2
> Where (table1.UID=table2.UID) AND table1.F4='X' And table2.F1='Y'
> 
> ```
> 
> The execution plan for this query is similar to that of the inner join (there is a sort after the original table scan on table2 and a merge join rather than a hash join of the two tables). The performance of the two is comparable as well. I may need a larger dataset to tease out difference but, so far, I'm not seeing any advantage to this construct or the "Exists" construct.
> 
> **With all of this being said** - your results may vary. I came nowhere near covering the full range of queries that you may run into when I was doing the above tests. As I said at the beginning, the tools included with SQL Server are your friends: use them.
> 
> So: why choose one over the other? It really comes down to your personal preferences since there appears to be no advantage for an inner join to a subquery in terms of time complexity across the range of examples I tests.
> 
> In most classic query cases I use an inner join just because I "grew up" with them. I do use subqueries, however, in two situations. First, some queries are simply easier to understand using a subquery: the relationship between the tables is manifest. The second and most important reason, though, is that I am often in a position of dynamically generating SQL from within my application and subqueries are almost always easier to generate automatically from within code.
> 
> So, the takeaway is simply that the best solution is the one that makes your _development_ the most efficient.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2359625) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
