---
title: "Merge two records in the same table, keeping foreign key relationships intact for both"
description: "A question I asked on Database Administrators"
date: 2012-10-25
author:
  name: Nate Bross
tags:
  - sql-server
  - sql-server-2008-r2
  - t-sql
  - merge
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/27635"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/27635):*

I have a table, called SITES, that has three columns, lets say it looks like this:

```
ID  Name        Path
1   Google      http://www.google.com/
2   Microsoft   http://www.microsoft.com/

```

I also have a related table called Logs that looks like this:

```
ID  SiteID   LogData
1   1        --data--
2   1        --more--
3   2        --other--
...

```

The SITES table gets populated both by users of the system and also occasionally some batch processes. From the batch process, I don't always have the 'name' available, so a record is created that looks like this in SITES (when searching by Path yields no result), because the batch process is mostly interested in creating data in the Log table.

```
ID  Name        Path
99              http://arstechnica.com/

```

The problem situation arises like this:

1) User creates new SITE, but doesn't enter the Path (doesn't know it, or in some cases it doesn't yet exist) so the SITES table looks like this:

```
ID  Name        Path
1   Google      http://www.google.com/
2   Microsoft   http://www.microsoft.com/
3   Yahoo

```

2) The batch process comes along and needs to add a log for [http://yahoo.com](http://yahoo.com), searches SITES by Path and does not find it, so it makes its own and the result is this:

```
ID  Name        Path
1   Google      http://www.google.com/
2   Microsoft   http://www.microsoft.com/
3   Yahoo
4               http://yahoo.com

```

My question is, how can I merge Record 3 and record 4 while preserving the referential integrity of both records? Lets say for the sake of argument, that each record has several related records in both the Log table, as well as some other tables.

I understand that it will be a manual process of identifying records that need to be updated, so let any solution assume that I have audited the list and found all of the "duplicate" records.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @swasheck Using SSMS Relationship builder.

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/27635) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
