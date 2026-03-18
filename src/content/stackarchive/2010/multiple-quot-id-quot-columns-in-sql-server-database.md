---
title: "Multiple &quot;ID&quot; columns in SQL Server database?"
description: "A question I asked on Stack Overflow"
date: 2010-01-13
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - database
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2060499"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2060499):*

Via [this](https://stackoverflow.com/questions/713430/clustered-primary-key-on-unique-identifier-id-column-in-sql-server) link, I know that a GUID is not good as a clustered index, but it can be uniquely created anywhere. It is required for some advanced SQL Server features like replication, etc.

Is it considered bad design if I want to have a GUID column as a typical Primary Key ? Also this assumes a separate int identity column for my clustering ID, and as an added bonus a "user friendly" id?

**update**

After viewing your feedback, I realise I didn't really word my question right. I understand that a Guid makes a good (even if its overkill) PK, but a bad clustering index (in general). My question more directly asked, is, is it bad to add a second "int identity" column to act as the clustering index?

I was thinking that the Guid would be the PK and use it to build all relationships/joins etc. Then I would instead of using a natural key for the Cluster Index, I would add an additional "ID" that not data-specific. What I'm wondering is that bad?

---

> [HLGEM answered](https://stackoverflow.com/a/2061024) (2 upvotes):
>
> If you are going to create the identity field anyway, use that as the primary key. Think about querying this data. Ints are faster for joins and much easier to specify when writing queries.
> 
> Use the GUID if you must for replication, but don't use it as a primary key.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2060499) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
