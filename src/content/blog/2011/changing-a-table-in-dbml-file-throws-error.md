---
title: "Changing a table in DBML file throws error"
description: "My answer to \"Changing a table in DBML file throws error\" on Stack Overflow"
date: 2011-11-09
author:
  name: Nate Bross
tags:
  - asp.net
  - linq
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/8069434"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/8067976):*

> I had to add a new column to my table so I did that in the database and then I removed the table from the dbml file and readded the one with the new column. So the column I added was (\_isActive bit null allowed) and this messed up my designer file. It has added a duplicate definition of some of the attributes like: private bool _isActive and other one as private System.Nullable @_\_isActive; Also added additional stuff. I had to delete the designer file and reload it with old one. How should I go to make this change in the dbml file?

With Linq-To-SQL I believe you need to use the designer to remove and add a table after you have made a schema change.

If you edited the code-behind file, those changes can cause problems. There is a reason all the classes there are defiend as `partial class`

So, I suspect your best option is to delete your DBML and start again.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/8069434) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
