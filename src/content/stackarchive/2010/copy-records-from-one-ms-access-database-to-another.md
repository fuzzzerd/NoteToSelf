---
title: "Copy records from one MS Access database to another?"
description: "My answer to \"Copy records from one MS Access database to another?\" on Stack Overflow"
date: 2010-03-26
author:
  name: Nate Bross
tags:
  - sql
  - wpf
  - vb.net
  - ms-access
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2525916"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2525866):*

> I have two MS Access databases (with identical table structures), and I'd like to use a SQL statement (programatically in VB.NET) to copy records from one to the other. Both databases are locally stored, in the same directory (and this will always be the case).
> 
> Suggestions?
> 
> Thanks!

*I posted the following answer:*

Your best bet is to open two database connections and do something like this:

```
select * from tableA in dbA;
foreach row 
    insert into tableA row in dbB

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2525916) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
