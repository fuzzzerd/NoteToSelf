---
title: "Why do I need to use a sub query to filter down a grouped select?"
description: "A question I asked on Database Administrators"
date: 2013-03-04
author:
  name: Nate Bross
tags:
  - sql-server
  - sql-server-2008
  - t-sql
  - subquery
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/35932"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/35932):*

If I do this --

```
SELECT dv.Name
      ,MAX(hb.[DateEntered]) as DE
FROM 
    [Devices] as dv
    INNER JOIN 
    [Heartbeats] as hb ON hb.DeviceID = dv.ID
WHERE DE < '2013-03-04'
GROUP BY dv.Name

```

I get this error --

> Msg 207, Level 16, State 1, Line 17 Invalid column name 'DE'.

If I do this --

```
SELECT Name, DE FROM (
    SELECT dv.Name
          ,MAX(hb.[DateEntered]) as DE
    FROM 
        [Devices] as dv
        INNER JOIN 
        [Heartbeats] as hb ON hb.DeviceID = dv.ID
    GROUP BY dv.Name
) as tmp WHERE tmp.DE < '2013-03-04'

```

it works as expected.

Can someone explain **why** I need to nest my main query as a subquery to limit my data set?

Also, is there maybe a better way to achieve the goal here? Retrieve all records from one table, and the single "top" related record ordered by `[DateEntered]` descending?

---

> [Aaron Bertrand answered](https://dba.stackexchange.com/a/35934) (6 upvotes):
>
> You can't reference an alias in the `WHERE` clause - this is just because of the order in which SQL Server parses the statement.
> 
> There have been many discussions about this here and on StackOverflow. A couple of examples that give some background:
> 
> [https://dba.stackexchange.com/questions/19762/why-is-the-select-clause-listed-first/](https://dba.stackexchange.com/questions/19762/why-is-the-select-clause-listed-first/)
> 
> [Why are queries parsed in such a way that disallows the use of column aliases in most clauses?](https://dba.stackexchange.com/questions/21965/why-are-queries-parsed-in-such-a-way-that-disallows-the-use-of-column-aliases-in/)
> 
> An alternative would be:
> 
> ```
> SELECT dv.Name
>       ,MAX(hb.[DateEntered]) as DE
> FROM 
>     [Devices] as dv
>     INNER JOIN 
>     [Heartbeats] as hb ON hb.DeviceID = dv.ID
> GROUP BY dv.Name
> HAVING MAX(hb.[DateEntered]) < '20130304';
> 
> ```

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/35932) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
