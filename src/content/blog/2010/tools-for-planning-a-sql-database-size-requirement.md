---
title: "Tools for planning a SQL Database size requirement"
description: "My answer to \"Tools for planning a SQL Database size requirement\" on Server Fault"
date: 2010-10-06
author:
  name: Nate Bross
tags:
  - sql-server
  - disk-space-utilization
  - database-performance
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/188230"
---

*Someone [asked on Server Fault](https://serverfault.com/q/188228):*

> I'm about ready to start setting up a SQL data warehouse for some SQL Server Analysis Services. The data that I am going to slice and dice lives in an off site database that I don't control, so my idea is to set up regular jobs that go out and pick up new entries and insert them in to my own version of the table.
> 
> I am wondering if there are any good tools out there to help plan database space requirements. After only 5 months the table that I am interested in has already got almost 4.5 Million records and by this time next year I estimate that we could be generating 3-4 million records a month.
> 
> I guess what I'm looking for is something that I can feed the table definition in to, and then tell me how much disk space a billion rows would take.
> 
> Thanks.  
>   
> _Edit_  
> 
> * * *
> 
> Well, using Excel I came up with a theoretical 1098 bytes per record using the worst case scenario that a varchar(1000) was used in every single record to the max.
> 
> At 4 million records per month that's 48 million records a year and a worst case need of 50 gigs of disk space per year. Dropping that to a varchar(255) gives me not quite 16 gigs per year, and varchar(50) gives me ~6.5 gigs per year.
> 
> Anybody out there a better DBA than I am and let me know if I'm way off base or not?  
>   
> _Edit #2_  
> 
> * * *
> 
> As requested here is the table definition:
> 
> ```
> Type             Size
> int              4
> int              4
> int              4
> datetime         8
> Decimal(19,5)    9
> int              4
> int              4
> varchar(1000)    1000
> int              4
> int              4
> smalldatetime    4
> int              4
> int              4
> int              4
> int              4
> decimal(9,2)     5
> smallint         2
> datetime         8
> decimal(18,2)    9
> bit              1
> int              4
> int              4
> 
> ```
> 
> Grand total of 1098 bytes if all fields are used to the max.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

I don't know of any tools that will do this; however, while it is a bit of a pain, you can calculate this your self based on the row's column types. You could probably write a powershell to help you if you output the `create table` scripts and fed them into a script.

Maybe a script that searches for all `int` and adds to a counter, and the same for each data type, then you can do some quick multiplication to figure out an approx. table size. It will probably be somewhat tricky to pickup the sizes of all the `varchar(50)` and `char(10)` data types, but again, a bit of powershell magic could probably help.

**Update**

* * *

I too come to the same conclusion you have, in the worst case you are at 1098 bytes per record. You know your data, but based on your edits it seems like there is a good chance that your data will be less than `varchar(1000)` for many records. This will give you space savings on every record when this is the case, so in the best case you are at 98 bytes per record. If I were you, I would use this information to check the data you already have, and come up with a base-line for the average length of this `varchar(1000)` field and use that average to calculate a nice median.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Sure, it also helps that you looked up the sizes for your column types, thats the hard part of this, not the addition ;)

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/188230) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
