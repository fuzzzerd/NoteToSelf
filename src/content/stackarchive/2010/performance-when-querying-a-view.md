---
title: "Performance when querying a View"
description: "A question I asked on Stack Overflow"
date: 2010-05-20
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - performance
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2875980"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2875980):*

I'm wondering if this is a bad practice or if in general this is the correct approach.

Lets say that I've created a view that combines a few attributes from a few tables.

My question, what do I need to do so I can query against this view as if it were a table without worrying about performance?

All attributes in the original tables are indexed, my concern is that the result view will have hundreds of thousands of records, which I will want to narrow down quite a bit based on user input.

What I'd like to avoid, is having multiple versions of the code that generates this view floating around with a few extra "where" conditions to facilitate the user input filtering.

For example, assume my view has this header `VIEW(Name, Type, DateEntered)` this may have 100,000+ rows (possibly millions). I'd like to be able to make this view in SQL Server, and then in my application write querlies like this:

`SELECT Name, Type, DateEntered FROM MyView WHERE DateEntered BETWEEN @date1 and @date2;`

Basically, I am denormalizing my data for a series of reports that need to be run, and I'd like to centralize where I pull the data from, maybe I'm not looking at this problem from the right angle though, so I'm open to alternative ways to attack this.

---

> [Quassnoi answered](https://stackoverflow.com/a/2876043) (3 upvotes):
>
> > My question, what do I need to do so I can query against this view as if it were a table without worrying about performance?
> 
> `SQL Server` is very good in view unnesting.
> 
> Your queries will be as efficient as if the view's query were used in the query itself.
> 
> This means that
> 
> ```
> CREATE VIEW myview AS
> SELECT  *
> FROM    /* complex joins */
> 
> SELECT  *
> FROM    mytable
> JOIN    myiew
> ON      …
> 
> ```
> 
> and
> 
> ```
> SELECT  *
> FROM    mytable
> JOIN    (
>         SELECT  *
>         FROM    /* complex joins */
>         ) myview
> ON      …
> 
> ```
> 
> will have the same performance.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2875980) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
