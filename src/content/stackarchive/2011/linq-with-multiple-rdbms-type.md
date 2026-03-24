---
title: "Linq with multiple RDBMS type"
description: "My answer to \"Linq with multiple RDBMS type\" on Stack Overflow"
date: 2011-02-01
author:
  name: Nate Bross
tags:
  - c#
  - linq
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4859655"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4859429):*

> I have heard that Linq query write once can be run on SQL and MS Access database too. Is it right or wrong?
> 
> For example I want to write queries once regardless of database type like currently I'm using MS Access database and later then if I wish to move on to SQL Server then I don't want to change my queries. Is this possible??

*I posted the following answer:*

LINQ-to-SQL will only work with SQL server. Linq to objects will work on most any collection, but you lose the deferred execution.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4859655) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
