---
title: "Switching from Linq-To-SQL to Entity Framework for WCF Data Services Issue with FK &quot;Properties&quot;"
description: "My answer to \"Switching from Linq-To-SQL to Entity Framework for WCF Data Services Issue with FK &quot;Properties&quot;\" on Stack Overflow"
date: 2010-07-01
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - linq-to-sql
  - entity-framework
  - data-conversion
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3162052"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3113685):*

> So, In my old Linq-To-SQL I would write code like this
> 
> ```
> var tableItem = new Table
> {
>     Prop1 = var1
>     Prop2 = var2,
>     Prop3 = var3,
>     ParentTableID = parentRecordID
> };
> 
> db.Table.InsertOnSubmit(tableItem);
> db.SubmitChanges();
> 
> ```
> 
> After converting my working code from Linq-To-SQL to Entity Framework (v3.5) the `ParentTableID` property is no longer there and I'm at a loss as to how I can create this related child record.
> 
> I'm not sure what I should change for my entity framework version, besides the obvious call to `SaveChanges();` instead of `SubmitChanges()` :(

I ended up using the solution here: [Entity Framework: Setting a Foreign Key Property](https://stackoverflow.com/questions/480872/entity-framework-setting-a-foreign-key-property/1037910#1037910).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3162052) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
