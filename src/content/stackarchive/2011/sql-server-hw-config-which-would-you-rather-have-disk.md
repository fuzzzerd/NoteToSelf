---
title: "SQL Server HW Config - which would you rather have (disk configuration)?"
description: "My answer to \"SQL Server HW Config - which would you rather have (disk configuration)?\" on Server Fault"
date: 2011-05-27
author:
  name: Nate Bross
tags:
  - sql-server
  - raid
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/274614"
---

*Someone [asked on Server Fault](https://serverfault.com/q/274612):*

> So I'm building out a SQL Server 2008 R2 x64...Will be running a single user database of about 2GB, maybe 80/20 read/write, and about 100 users.
> 
> Base hardware would be DL380, 12GB RAM, and dual 6-core Xeons. Now I'm hung up on the disk configuration...
> 
> Option 1  
> RAID 1 60GB SSD (OS, SQL Files, TLog, TempDB)  
> RAID 1 120GB SSD (DB files)  
> 
> or
> 
> Option 2  
> RAID 1 146GB 15K (OS, SQL Files)  
> RAID 1 146GB 15K (Tlogs, TempDB)  
> RAID 10 4x148GB 15K (DB files)  
> 
> Some perfmon numbers from my current production server:  
> Memory Avail MBytes - 813 (server has 4GB of Memory)  
> Page life expectancy - 496854avg  
> Batch request/sec - 7.5avg 97.595max  
> SQL Compilations - 3.422avg 27.599max  
> SQL Re-Compilations - 0.002 0.200max  
> 
> Business priority is more reliability then performance.
> 
> Which of the above disk configurations would you rather have?? Cost diff is about +$2700 for the SSDs (also need a second, mirror server). Would SSDs even make a difference for such a small database?? I could imagine with 12GB I would have enough physical memory for the entire db, right???
> 
> Appreciate any feedback...Thanks!

*I posted the following answer, which received 3 upvotes:*

I've read about SSDs having high [failure rates](http://www.codinghorror.com/blog/2011/05/the-hot-crazy-solid-state-drive-scale.html); so if reliability is the priority, I'd go with the 15k SAS drives.

Either way, with RAID you have disk fault tolerence, but you'd probably have best luck with 15k SAS. We've run loads of dell servers with 15k SAS drives, and they have been rock solid.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): If performance was critical, RAID and SSDs can give you the extra performance you might need; but if thats not the primary goal, spinning drives are the way to go.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/274614) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
