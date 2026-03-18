---
title: "Switching from Linq-To-SQL to Entity Framework for WCF Data Services Issue with FK &quot;Properties&quot;"
description: "A question I asked on Stack Overflow"
date: 2010-06-24
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - linq-to-sql
  - entity-framework
  - data-conversion
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3113685"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3113685):*

So, In my old Linq-To-SQL I would write code like this

```
var tableItem = new Table
{
    Prop1 = var1
    Prop2 = var2,
    Prop3 = var3,
    ParentTableID = parentRecordID
};

db.Table.InsertOnSubmit(tableItem);
db.SubmitChanges();

```

After converting my working code from Linq-To-SQL to Entity Framework (v3.5) the `ParentTableID` property is no longer there and I'm at a loss as to how I can create this related child record.

I'm not sure what I should change for my entity framework version, besides the obvious call to `SaveChanges();` instead of `SubmitChanges()` :(

---

> [Nate answered](https://stackoverflow.com/a/3162052) (0 upvotes):
>
> I ended up using the solution here: [Entity Framework: Setting a Foreign Key Property](https://stackoverflow.com/questions/480872/entity-framework-setting-a-foreign-key-property/1037910#1037910).

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): This will require .NET4 -- correct?

**Nate** (1 upvotes): The solution at [stackoverflow.com/questions/480872/…](http://stackoverflow.com/questions/480872/entity-framework-setting-a-foreign-key-property/ "entity framework setting a foreign key property") has fixed my compiler errors, but I'm still working through some other stuff errors. I'll see what I find.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3113685) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
