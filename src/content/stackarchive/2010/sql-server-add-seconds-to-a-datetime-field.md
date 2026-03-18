---
title: "SQL Server: Add seconds to a datetime field?"
description: "My answer to \"SQL Server: Add seconds to a datetime field?\" on Stack Overflow"
date: 2010-08-13
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3480800"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3480784):*

> This should be a softball for you SQL guys. I know I can add to an int field with something like `UPDATE tblUser SET Total=(Total+2)` but what is the syntax for adding seconds to a datetime field?
> 
> I'm using SQLServer 2008

You should look into [DATEADD](http://msdn.microsoft.com/en-us/library/ms186819.aspx).

`DATEADD (datepart , number , date)`

or the full update syntax

`UPDATE tbl SET YourDateField = DATEADD (ss, 2, YourDateField)`

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3480800) — 14 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
