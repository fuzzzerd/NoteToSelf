---
title: "Scripts for moving schema changes from development database to production database"
description: "A question I asked on Stack Overflow"
date: 2010-08-04
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3408493"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3408493):*

I'm trying to head this one off at the pass. I've got two database servers (DEV and PRD) and I have my database on the DEV server. I am looking to deploy v1 of my application to PRD server.

The question is this: Say in two months, I am ready to ship v1.1 of my application, which introduces two new VIEWS, six new fields (three fields in two tables, each), and an updated version of my sproc that creates records in the tables with new fields. My DEV database has the new schema, but my PRD database has the real data, so I can't simply copy the .mdf file, since I want to keep my PRD data, but include my new schema.

I understand doing the initial creation of tables, views, sprocs via saved .sql files; but what I'm wondering is, is it possible to use SSMS to create the appripriate "alter table" scripts or do I need to manually do this?

---

> [Rawheiser answered](https://stackoverflow.com/a/3408528) (1 upvotes):
>
> I have handled this with a release update SQL script that applies the changes to the previous version.
> 
> You either need to code this yourself or use one of the many DBA tools to do database compares and generate a diff script.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3408493) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
