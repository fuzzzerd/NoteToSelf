---
title: "Easy or Schedulable way to move data from Production to Test"
description: "A question I asked on Database Administrators"
date: 2012-01-23
author:
  name: Nate Bross
tags:
  - sql-server
  - testing
  - development
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/11409"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/11409):*

What I am looking to do, is schedule a copy of data from my production database to my dev/test database.

The dev/test database will be newer than the production database in terms of schema, but the production database has current data. I'm in a bit of a bind as I need to test my database changes against production size data, and it would be very helpful to have current data.

I'm on SQL Server 2008 R2 Standard for both production and development environments; is there a way I can create a job on my development server to "suck" data from my production database in a read-only fashion? I'd like a script that can copy table data wholesale, ignoring missing columns and ignoring any constraints in the target table. A script that does this for one table is all I really need, I can modify it to fit my tables and duplicate it to run for all my tables. The issues I'm having is finding anything even remotely similar to this.

This is a bit of a follow-up on my last question of the same nature; I have since got my database into source control, and I'm liking it much better. The problem is that I still face a stale data issue on my development server, so I'd like to find a way to schedule updates.

I'm open to alternate ways to achieve this, but it needs to be something I can run on a schedule and something I can build with notepad and/or SSMS or other tool available with Standard Edition SQL Server.

---

> [adam f answered](https://dba.stackexchange.com/a/11427) (8 upvotes):
>
> Here is what I would recommend:
> 
> 1.  If you do not already do this, create a regular backup process for your production database. To make life simple, make it a full backup and include all database objects (tables/schema/data/users). The Microsoft website has a lot of information on how to achieve this.
>     
> 2.  When you need to update your development environment, restore the production backup into development, then implement the migration (tables, procedures, data) you need to test using the method that is documented for the production change.
>     
> 3.  Test, knowing that you are not just testing your code changes, but also testing your migration strategy for when you roll out your change to the production environment. You are also testing your database backup and restore (DR) strategy as well.
>     
> 
> _Note, this may mean you have 2 development databases, one for actual development and one for integration/QA/UAT testing._

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I have tried the import/export wizard but it always fails with FK constraints and I can't find a way to disable these during insert (because they are valid once all other tables are inserted, just not at first). SSIS sounds interesting, but I don't even know where to start with it.

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/11409) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
