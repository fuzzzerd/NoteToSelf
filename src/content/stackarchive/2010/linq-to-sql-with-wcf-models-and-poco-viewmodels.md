---
title: "Linq-To-Sql with WCF, Models, and POCO ViewModels Disconnected &quot;DataContext&quot; Timestamp/Rowversion"
description: "A question I asked on Stack Overflow"
date: 2010-04-06
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - sql-server
  - wcf
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2588338"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2588338):*

I have a Linq-To-Sql based repository class which I have been successfully using. I am adding some functionality to the solution, which will provide WCF based access to the database.

I have not exposed the generated Linq classes as DataContracts, I've instead created my own "ViewModel" as a POCO for each entity I am going to be returning.

My question is, in order to do updates and take advantage of some of the Linq-To-Sql features like cyclic references from within my Service, do I need to add a Rowversion/Timestamp field to each table in by database so I can use code like `dc.Table.Attach(myDisconnectedObject)`? The alternitive, seems ugly:

```
var updateModel = dc.Table.SingleOrDefault(t => t.ID == myDisconnectedObject.ID);
updateModel.PropertyA = myDisconnectedObject.PropertyA;
updateModel.PropertyB = myDisconnectedObject.PropertyB;
updateModel.PropertyC = myDisconnectedObject.PropertyC;
// and so on and so forth
dc.SubmitChanges();

```

---

> [marc_s answered](https://stackoverflow.com/a/2588375) (1 upvotes):
>
> I guess a RowVersion/TimeStamp column on each table might be the best and least intrusive option - just basically check for that one value, and you're sure whether or not your data might have been modified in the mean time. All other columns can be set to `Update Check=Never`. This will take care of handling the possible concurrency issues when updating your database from "returning" objects.
> 
> However, the other thing you should definitely check out is [AutoMapper](http://automapper.codeplex.com) - it's a great little component to ease those left-right-assignment orgies you have to go through when using ViewModels / Data Transfer Objects by making this mapping between two object types a snap. It's well used, well tested, used by many and very stable - a winner!

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): How would the performance on something like that be? Could you post an example, because that _sounds_ like the best of both worlds to me... I wouldn't need to worry about updating code if I add database fields, just make sure the designer is up to date, etc.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2588338) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
