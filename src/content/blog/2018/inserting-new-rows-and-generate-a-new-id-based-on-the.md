---
title: "Inserting new rows and generate a new id based on the current last row"
description: "My answer to \"Inserting new rows and generate a new id based on the current last row\" on Stack Overflow"
date: 2018-02-09
author:
  name: Nate Bross
tags:
  - sql
  - asp.net
  - vb.net
  - webforms
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48710106"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48709640):*

> The primary key of my table is an Identity column of an ID. I want to be able to insert a new row and have it know what the last ID in the table currently is and add one to it. I know I can use Scope Identity to get the last inserted column from my code, but I am worried about people manually adding entries in the database, because they do this quite often. Is there a way I can look at the last ID in the table and not just the last ID my code inserted?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

With a [SQL Identity column](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql-identity-property), you don't need to do anything special. This is the default behavior. SQL Server will handle making sure you don't have collisions regardless of where the inserts come from.

The `@@Identity` will pull the latest identity, and [scope\_identity](https://learn.microsoft.com/en-us/sql/t-sql/functions/scope-identity-transact-sql) will grab the identity from the current scope.

> A scope is a module: a stored procedure, trigger, function, or batch. Therefore, if two statements are in the same stored procedure, function, or batch, they are in the same scope.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48710106) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
