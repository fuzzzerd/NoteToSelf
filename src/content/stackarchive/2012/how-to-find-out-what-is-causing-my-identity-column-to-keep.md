---
title: "How to find out what is causing my Identity column to keep going up"
description: "A question I asked on Database Administrators"
date: 2012-02-28
author:
  name: Nate Bross
tags:
  - sql-server
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/14075"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/14075):*

I have a table with an `int identity` as the PK. Something is causing it to increment, and I'd like to know what that is.

To give a quick example, yesterday I inserted a record and got ID 41,773. Today I inserted a new record and I got ID 44,898. There are no records with IDs between these.

There are lots of apps with access to the database, so I'm in the process of checking their logs for errors; however, I'm wondering if there is a way I can find out what queries are causing the IDENTITY increment without a record being inserted.

There are no explicit deletes on this table either, so I know its not an insert + delete combo, causing this, it has to be something failing.

---

> [Eric Higgins answered](https://dba.stackexchange.com/a/14078) (7 upvotes):
>
> The most likely scenario based on the test JNK did, is transactions that are rolling back, but still causing the seed to increment.
> 
> The best route is to trace (profile) the activity so you can catch the offending transaction(s). Here's a starting point for using Profiler:
> 
> [http://msdn.microsoft.com/en-us/library/ms181091.aspx](http://msdn.microsoft.com/en-us/library/ms181091.aspx)
> 
> When you're starting to learn tracing, err on the side of tracing less than you think you need. tracing is "invasive", and you can imperil a DB instance if you go after too much info.
> 
> In this case you're looking for transaction based info. Feel free to post back if you have specific questions while setting up your trace. Note that you'll probably want to log to files unless you can leave the GUI up overnight. Logging to files is preferred overall unless you're trying to catch something in real time.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Any suggestions on how to go about doing that? Is there a report or logging I can turn on?

**Nate** (0 upvotes): My idea being that if I can find out the query causing the identity to increment, I can identify the application based on the nature of the query.

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/14075) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
