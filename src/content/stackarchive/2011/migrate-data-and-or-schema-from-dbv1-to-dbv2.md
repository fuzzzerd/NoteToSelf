---
title: "Migrate Data and/or Schema from DBv1 to DBv2"
description: "A question I asked on Database Administrators"
date: 2011-12-22
author:
  name: Nate Bross
tags:
  - sql-server
  - migration
  - ssms
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/9640"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/9640):*

I have a production database which has been plugging away for several months. I have been making modifications to a duplicate copy on a test/dev server. I've added some additional fields (null allowed) to several tables, as well as I've added some new tables and indexes to both new and existing tables.

My question is this: I am ready to take my test/dev database and push it into production. The problem is that I need to migrate all the data from my production database to my test/dev database. My first thought was to use SSMS to "IMPORT" data from production to test/dev, the problem I'm having is that even with "enable identity insert" I still get all types of foreign key constraint errors. This is a bit of a two-parter

1.  Is there a better way to migrate schema changes from test/dev to production than the process I just outlined?
2.  If not, is there a way to temporarly disable all insert constraints during the import?

I would be very happy to only migrate my test/dev schema to my production server, but I have not found any way to do this without manually going table by table, index by index, view by view, stored procedure by stored procedure... etc. I've seen some tools that claim to be able to do it, but I'm looking for a free/open source solution and haven't found anything.

_note: database is small < 10gb, the test/dev database is fully truncated with zero records in every table._

---

> [Mark Storey-Smith answered](https://dba.stackexchange.com/a/9644) (5 upvotes):
>
> It sounds like you've got this entirely back to front and upside down. Typically changes are tracked using scripts, which you would then apply to the production database. I've never encountered a case where it made sense to import production data to the next version created from development.
> 
> If your database isn't currently in source control, the articles linked to from Jeff Atwood's article [Get Your Database Under Version Control](http://www.codinghorror.com/blog/2008/02/get-your-database-under-version-control.html) are a good introduction. Also, the free Redgate ebook [SQL Server Team Based Development](http://www.red-gate.com/our-company/about/book-store/sql-server-team-based-development) includes a chapter on source control for databases.
> 
> If you've been making changes via GUI tools and don't have any record of what's changed your best bet is a database comparison tool, like [Redgate SQLCompare](http://www.red-gate.com/products/sql-development/sql-compare/) or [Apex SQLDiff](http://www.apexsql.com/sql_tools_diff.aspx). These tools will generate the scripts to upgrade your production database to match the schema of development.
> 
> If the boss won't part with the cash for a comparison tool, you could reconcile the changes manually using a diff tool like [WinMerge](http://www.sourcegear.com/diffmerge/) or [DiffMerge](http://www.sourcegear.com/diffmerge/). Use SSMS [Generate Script](http://msdn.microsoft.com/en-us/library/ms178078.aspx) tools to script objects to individual files, then use the diff tool to identify differences. Finally, hand craft the necessary ALTER statements for any changes to tables.

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/9640) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
