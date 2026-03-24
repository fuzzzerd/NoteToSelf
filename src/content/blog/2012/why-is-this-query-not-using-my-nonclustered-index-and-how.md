---
title: "Why is this query not using my nonclustered index, and how can I make it?"
description: "A question I asked on Database Administrators"
date: 2012-08-31
author:
  name: Nate Bross
tags:
  - sql-server
  - sql-server-2008-r2
  - index
  - optimization
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/23509"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/23509):*

As follow up to [this question](https://dba.stackexchange.com/questions/23465/is-it-possible-to-increase-query-performance-on-a-narrow-table-with-millions-of) about increasing query performance, I'd like to know if there is a way to make my index used by default.

This query runs in about 2.5 seconds:

```
SELECT TOP 1000 * FROM [CIA_WIZ].[dbo].[Heartbeats]
WHERE [DateEntered] BETWEEN '2011-08-30' and '2011-08-31';

```

This one runs in about 33ms:

```
SELECT TOP 1000 * FROM [CIA_WIZ].[dbo].[Heartbeats]
WHERE [DateEntered] BETWEEN '2011-08-30' and '2011-08-31' 
ORDER BY [DateEntered], [DeviceID];

```

There is a clustered index on the \[ID\] field (pk) and there is a non clustered index on \[DateEntered\],\[DeviceID\]. The first query uses the clustered index, the second query uses my non-clustered index. My question is two parts:

*   Why, since both queries have a WHERE clause on the \[DateEntered\] field, does the server use the clustered index on the first, but not the second?
*   How can I make the non clustered index be used by default on this query even without the orderby? (Or why would I not want that behavior?)

---

> [Edward Dortland answered](https://dba.stackexchange.com/a/23511) (10 upvotes):
>
> the first query does a table scan based on the threshold I earlier explained in: [Is it possible to increase query performance on a narrow table with millions of rows?](https://dba.stackexchange.com/questions/23465/is-it-possible-to-increase-query-performance-on-a-narrow-table-with-millions-of/23470#23470)
> 
> (most likely your query without the `TOP 1000` clause will return more then 46k rows. or some where between 35k and 46k. (the grey area ;-) )
> 
> the second query, must be ordered. Since you're NC index is ordered in the order you want, it's cheaper for the optimiser to use that index, and then to the bookmark lookups to the clustered index to get the missing columns as compaired to doing a clustered index scan and then needing to order that.
> 
> reverse the order of the columns in the `ORDER BY` clause and you are back to a clustered index scan since the NC INDEX is then useless.
> 
> **edit forgot the answer to your second question, why you DON'T want this**
> 
> Using a non clustered non covering index means that a rowID is looked up in the NC index and then the missing columns have to be looked up in the clustered index (the clustered index contains all columns of a table). IO's to lookup the missing columns in the clustered index are Random IOs.
> 
> The key here is RANDOM. because for every row found in the NC index, the access methods have to go look up a new page in the clustered index. This is random, and therefore very expensive.
> 
> Now, on other hand the optimiser could also go for a clustered index scan. It can use the allocation maps to lookup scan ranges and just start reading the Clustered index in large chunks. This is sequential and much cheaper. (as long as your table isn't fragmented :-) ) The downside is, the WHOLE clustered index needs to be read. This is bad for your buffer and potentially a huge amount of IOs. but still, sequential IOs.
> 
> In your case, the optimiser decides somewhere between 35k and 46k rows, it's less expensive to to a full clustered index scan. Yeah, it's wrong. And in a lot of cases with narrow non clustered indexes with not to selective `WHERE` clauses or large table for that matter this goes wrong. (Your table is worse, because it's also a very narrow table.)
> 
> Now, adding the `ORDER BY` makes it more expensive to scan the full clustered index and then order the results. Instead, the optimiser assumes it's cheaper to use the allready ordered NC index and then pay the random IO penalty for the bookmark lookups.
> 
> So your order by is a perfect "query hint" kind of solution. BUT, at a certain point, once your query results are so big, the penalty for the bookmark lookup random IOs will be so big it becomes slower. I assume the optimiser will change plans back to the clustered index scan before that point but you never know for sure.
> 
> In your case, as long as your inserts are ordered by entereddate, as discussed in chat and the previous question (see link) you are better of creating the clustered index on the enteredDate column.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): DateEntered is a DateTime, in this case I'm using the date part, but I sometimes query against both date and time together.

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/23509) — 14 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
