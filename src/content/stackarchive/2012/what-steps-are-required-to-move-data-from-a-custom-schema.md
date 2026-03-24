---
title: "What steps are required to move data from a custom schema in one database to the default schema in new database"
description: "A question I asked on Database Administrators"
date: 2012-06-14
author:
  name: Nate Bross
tags:
  - sql-server
  - schema
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/19287"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/19287):*

Lets assume for the sake of argument that I have the following tables in a single SQL Server database.

```
mySchema.Users
mySchema.Products
-- 
secondSchema.Users
secondSchema.Contracts
secondSchema.ContractItems
--
oldSchema.People
oldSchema.Table1
oldSchema.Table2
oldSchema.Table3
oldSchema.Table4
-- 
and so on and so forth

```

Each "schema" is fully independent of the others. The only reason they are in a single database, is due to hosting and cost limitations. In a perfect world these would have been in separate databases to begin with.

What things will I need to do when (and if ever) I need to move secondSchema into a new database, all by itself because its usage goes up and it now requires being housed in its own database.

* * *

I have reviewed [Decision criteria on when to use a non-dbo schema vs a new Database](https://dba.stackexchange.com/questions/11101/decision-criteria-on-when-to-use-a-non-dbo-schema-vs-a-new-database), and as I've stated above, there is no relational or transactional justification for them being in the same database. They are in there for cost reasons.

---

> [Thomas Stringer answered](https://dba.stackexchange.com/a/19288) (5 upvotes):
>
> You can script out that portion of the database and then run a `CREATE DATABASE` with the scripted schema and data from your original database.
> 
> When you _Generate Scripts..._, you will have the ability to select specific objects as opposed to the whole database. You can **select the desired schema, and all of the objects that the schema owns**. This will generate a script containing your schema and schema objects. A bit of a manual operation, but probably the easiest method.
> 
> In the generated script, you can alter the schema name to be what the new database's schema should be called, but realize that the object definitions also need to reflect the new schema's name.

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/19287) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
