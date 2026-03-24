---
title: "Will Entity Framework and/or Linq-To-SQL queries show up as &quot;Adhoc Queries&quot; in SSMS&#39; &quot;Server Dashboard&quot; Report?"
description: "A question I asked on Database Administrators"
date: 2011-12-20
author:
  name: Nate Bross
tags:
  - sql-server
  - entity-framework
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/9481"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/9481):*

Its pretty much all in the title. I have a SQL Server which is showing that 90%+ of CPU Usage and Logical IO Performed is due to "Adhoc Queries" The rest rest of the usage shows up under the actual DB name. This is all from the "Server Dashboard" report.

I have a few databases on this server which are accessed directly by vendor applications of which I have no control. They are very low usage in general; I have two databases that are accessed and used by internal applications written in Entity Framework and Linq-To-SQL. I'm wondering if that is why my "Adhoc Queries" are showing such high use instead of the names of my internal databases.

The reason I'm asking is because I've been noticing somewhat degregated performance and the CPU on my server is running 95% on sqlserver.exe process for extended periods of time, with minimal "down spikes" to 10-15% use.

---

> [brian answered](https://dba.stackexchange.com/a/9501) (3 upvotes):
>
> Yes. Linq-To-Sql and EF submit dynamic (Ad-Hoc) queries to the database. You can prove this by running a profiler trace and debugging the app.
> 
> The good news is that you'll always get the most up-to-date query plan, based on current statistics. The bad news is that the plan will have to be compiled on each execution. This is rarely good, and only when the query commonly returns varying amounts of data.
> 
> I see this every day. Developer Bob is more concerned with RAD (kicking the app out the door and looking like a rock star) than app performance. He uses this new, bleeding edge, auto-magical sql generation code tool. Queries are fast from the app because there's only 2500 records in the database and everything fits in memory. 12 months down the road, app volume has went up 100000 %, it's now super dog slow, and the db gets blamed. The solution is to either re-write the app with proper sql or throw hardware at the problem. In my opinion, auto-magical sql insures that your' app will not scale well with significant volume.
> 
> "Dynamic code generation is the fastest way to build slow SQL and the slowest way to build fast SQL. " Brent Ozar
> 
> Your biggest challenge is not in compiled code speed. It's in your ability to efficiently read and parse datasets which do not fit in memory.

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/9481) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
