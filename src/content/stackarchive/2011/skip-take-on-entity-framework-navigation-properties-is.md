---
title: ".Skip().Take() on Entity Framework Navigation Properties is executing SELECT * on my SQL Server"
description: "A question I asked on Stack Overflow"
date: 2011-12-28
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - entity-framework
  - sql-server-2008-r2
  - navigation-properties
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/8662365"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/8662365):*

I have a method on my generated partial class like this:

```
var pChildren = this.Children
    .Skip(skipRelated)
    .Take(takeRelated)
    .ToList();

```

When I look at my SQL Server, I can see the generated code is doing a `SELECT *.* FROM Children` This code is taken directly from my class, I have verified that the order of my Skip/Take is BEFORE my .ToList.

If I remove the .ToList, that line is fast (and no SQL is sent to my DB), but the moment I try to `foreach` over the results, I get the same SQL sent to my DB: `SELECT *.* FROM Children`.

Is there something special I need to do when using .Skip and .Take _on the navigation properties_ of my entities?

**update**

I'll try to get the actual SQL generated, I'm not currently setup for that. I found the first one because it shows up in SSMS's "recenty expensive queries" list.

Running this:

```
var pChildren = this.Children
    //.Skip(skipRelated)
    //.Take(takeRelated)
    .ToList();

```

returns ~4,000,000 rows and takes ~25 seconds.

Running this:

```
var pChildren = this.Children
    //.Skip(skipRelated)
    .Take(takeRelated)
    .ToList();

```

returns ~4,000,000 rows and takes ~25 seconds.

As I said, I'll grab the SQL generated for these and pose them up as well.

---

> [Eranga answered](https://stackoverflow.com/a/8662716) (7 upvotes):
>
> The problem is that you are performing a LINQ-to-Object query when you query a child collection like that. EF will load the whole collection and perform the query in memory.
> 
> If you are using EF 4 you can query like this
> 
> ```
> var pChildren = this.Children.CreateSourceQuery()
>                  .OrderBy(/* */).Skip(skipRelated).Take(takeRelated);
> 
> ```
> 
> In EF 4.1
> 
> ```
> var pChildren = context.Entry(this)
>                    .Collection(e => e.Children)
>                    .Query()
>                    .OrderBy(/* */).Skip(skipRelated).Take(takeRelated)
>                    .Load();
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @vittore I think I was running into the issue that Eranga mentions. Its a LINQ-To-Objects query on a Navigation property. I did update the generic paramater to the correct type, that doesn't appear to be the issue. After calling `.CreateSourceQuery()` the correct SQL is generated.

**Nate** (0 upvotes): @vittore I'm getting an InvalidCastException: `Unable to cast object of type '<TakeIterator>d__3a`1' to System.Data.Objects.ObjectQuery`1` Once I nail that down, I'll post the results.

**Nate** (0 upvotes): I'm on SQL Server 2008 R2, I was using this for reference: [msdn.microsoft.com/en-us/library/bb738702.aspx](http://msdn.microsoft.com/en-us/library/bb738702.aspx)

**Nate** (0 upvotes): How then should I page through my data? Should I use something else? I would like to call parentInstance.GetChildren(pageSize \* pageNum, pageSize) and only pull a small bit of data from the database.

**Nate** (0 upvotes): I was hoping for something like `SELECT TOP 10 FROM Children WHERE ParentID = @idOfParentEntity` (I forget how EF handles .Skip, but I've read it is supposed to. If I execute this query against my context directly it appears to limit the data returned to a specific "page")

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/8662365) — 8 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
