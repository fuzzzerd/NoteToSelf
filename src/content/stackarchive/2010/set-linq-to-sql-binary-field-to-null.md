---
title: "Set Linq To Sql Binary field to null"
description: "My answer to \"Set Linq To Sql Binary field to null\" on Stack Overflow"
date: 2010-03-24
author:
  name: Nate Bross
tags:
  - c#
  - linq-to-sql
  - varbinary
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2508784"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2508759):*

> Trying to set a Binary field to null gives me an ArgumentNull exception. I can set the field to be empty like this `new Binary(new byte[] {});` but that's not null just an empty column. Is there a workaround using LinqToSql ?

*I posted the following answer:*

You could use the [ExecuteQuery()](http://msdn.microsoft.com/en-us/library/bb399403.aspx) method to pass your own SQL.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2508784) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
