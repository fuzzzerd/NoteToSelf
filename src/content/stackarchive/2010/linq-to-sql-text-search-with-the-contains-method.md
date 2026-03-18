---
title: "Linq-To-SQL text search with the .Contains method"
description: "A question I asked on Stack Overflow"
date: 2010-04-16
author:
  name: Nate Bross
tags:
  - c#
  - sql-server
  - linq-to-sql
  - case-insensitive
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2654414"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2654414):*

I have a table, where I need to do a case insensitive search on a text field.

If I run this query in LinqPad directly on my database, it works as expected

```
Table.Where(tbl => tbl.Title.Contains("StringWithAnyCase"))
// also, adding in the same constraints I'm using in my repository works in LinqPad
// Table.Where(tbl => tbl.Title.Contains("StringWithAnyCase") && tbl.IsActive == true)

```

In my application, I've got a repository which exposes IQueryable objects which does some initial filtering and it looks like this

```
var dc = new MyDataContext();

public IQueryable<Table> GetAllTables()
{
    var ret = dc.Tables.Where(t => t.IsActive == true);
    return ret;
}

```

In the controller (its an MVC app) I use code like this in an attempt to mimic the LinqPad query:

```
var rpo = new RepositoryOfTable();
var tables = rpo.GetAllTables();
// for some reason, this does a CASE SENSITIVE search which is NOT what I want.
tables = tables.Where(tbl => tbl.Title.Contains("StringWithAnyCase");
return View(tables); 

```

The column is defined as an `nvarchar(50)` in SQL Server 2008.

\*\* update \*\*

I had a partial class (for one of my Entities from Linq-To-SQL) with an IQueryable property, but somehow returning an IQueryable from an EntitySet caused my later queries to behave in an IEnumerable (read Linq-To-Objects) way even though they were acting on IQueryable types.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): There is another method (for additional filtering) but they are all `IQueryable<Table>` I'm NOT doing any converting ToList or IEnumerable.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2654414) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
