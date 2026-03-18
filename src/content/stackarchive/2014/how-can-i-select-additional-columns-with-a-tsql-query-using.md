---
title: "How can I SELECT additional columns with a TSQL query using GROUP BY"
description: "A question I asked on Stack Overflow"
date: 2014-01-27
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - t-sql
  - group-by
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/21389640"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/21389640):*

I have a view (that is a union of several tables) and I need to filter out duplicates. The table looks like this:

```
id    first    last    logo      email    entered
1     joe      smith   i.jpg     e@m.c    2014-01-27
2     jim      smith   b.jpg     e@j.c    2014-01-27
3     bob      smith   z.jpg     b@b.c    2014-01-27
9     joeseph  smith   q.gif     e@m.c    2014-01-20

```

I want to do something like this, but I can't seem to get a valid syntax for it:

```
SELECT 
    email, MAX(entered), first, last -- such that first and last come from the same row as the MAX(entered)
FROM
    my_view
GROUP BY
    email

```

---

> [Gordon Linoff answered](https://stackoverflow.com/a/21389841) (3 upvotes):
>
> You want to use `row_number()`:
> 
> ```
> SELECT email, entered, first, last
> FROM (select v.*, row_number() over (partition by email order by entered desc) as seqnum
>       from my_view v
>      ) v
> WHERE seqnum = 1;
> 
> ```
> 
> `row_number()` is a window function that assigns sequential numbers to groups of rows. The groups are defined by the `partition by` clause. In this case, everything with the same `email` is in the same group. The first row is given a value 1; the ordering is based on the `order by` clause.
> 
> The outer query select the first one, which has the largest `entered` date.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/21389640) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
