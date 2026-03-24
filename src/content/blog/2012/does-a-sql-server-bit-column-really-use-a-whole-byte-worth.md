---
title: "Does a SQL Server bit column really use a whole byte worth of space?"
description: "A question I asked on Database Administrators"
date: 2012-02-22
author:
  name: Nate Bross
tags:
  - sql-server
  - datatypes
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/13668"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/13668):*

I was poking around SSMS and noticed the "size" of my `INT` columns were 4 bytes (expected) but I was a bit shocked to see my `BIT` columns were a whole byte.

Did I misunderstand what I was looking at?

---

> [SQLRockstar answered](https://dba.stackexchange.com/a/13671) (17 upvotes):
>
> How many bit columns do you have defined in the table? I found this on MSDN, it says 8 or less bit columns are stored as one byte.
> 
> [http://msdn.microsoft.com/en-us/library/ms177603.aspx](http://msdn.microsoft.com/en-us/library/ms177603.aspx)

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/13668) — 20 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
