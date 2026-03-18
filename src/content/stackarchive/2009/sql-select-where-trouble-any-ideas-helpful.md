---
title: "SQL SELECT WHERE Trouble any ideas helpful"
description: "A question I asked on Stack Overflow"
date: 2009-05-19
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - sql-server-2005
  - join
  - where-clause
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/885133"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/885133):*

I have two tables parent and child (related as such on PK/FK GUID)

Child has a Timestamp (the record creation date/time).

What I want to do is get only the most recent child record AND the parent record, FOR EACH parent record.

```
SELECT 
    dbo_Parents.ParentName, 
    dbo_ChildEntry.CountPropertys, 
    dbo_ChildEntry.DateTimeStamp
FROM 
    dbo_Parents INNER JOIN dbo_ChildEntry 
ON
    dbo_Parents.ParentID = dbo_ChildEntry.ParentID
WHERE 
    ([WHAT SHOULD BE HERE?]))

```

---

> [Fabio Vinicius Binder answered](https://stackoverflow.com/a/885151) (8 upvotes):
>
> Assuming that you want the most recent entry, you have to use TOP 1 and order by.
> 
> ```
> SELECT TOP 1
> dbo_Parents.ParentName, 
> dbo_ChildEntry.CountPropertys, 
> dbo_ChildEntry.DateTimeStamp 
> FROM dbo_Parents 
> INNER JOIN dbo_ChildEntry ON dbo_Parents.ParentID = dbo_ChildEntry.ParentID 
> ORDER BY dbo_ChildEntry.DateTimeStamp desc
> 
> ```
> 
> Edit after clarification: "the most recent child record AND the parent record, FOR EACH parent record":
> 
> ```
> WHERE dbo_ChildEntry.DateTimeStamp = 
>       ( Select Max( dbo_ChildEntry.DateTimeStamp )
>                from dbo_ChildEntry 
>                where dbo_Parents.ParentID = dbo_ChildEntry.ParentId )
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I did a poor job of saying this initially, I want one result (most recent child + parent) per parent row.

**Nate** (0 upvotes): I would like to select only the child row with the most recent datetimestamp (ie which ever record contains the timestamp closest to Now())

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/885133) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
