---
title: "&quot;Delete Files Older Than&quot; Batch Script"
description: "My answer to \"&quot;Delete Files Older Than&quot; Batch Script\" on Server Fault"
date: 2011-04-14
author:
  name: Nate Bross
tags:
  - windows-server-2008-r2
  - batch-file
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/259711"
---

*Someone [asked on Server Fault](https://serverfault.com/q/259707):*

> So in the work of doing backups, I need a batch script that would allow me to delete files in a specified directory, that are older than lets say, 3 days. This script will be set as a scheduled task to run at a specified time every day.

*I posted the following answer, which was chosen as the accepted answer and received 8 upvotes:*

If powershell is acceptable (should be, as its enabled by default on Server 2008+) try this:

```
$numberOfDays = 3
$Now = Get-Date
$TargetFolder = "C:\myoldfiles"
$LastWrite = $Now.AddDays(-$numberOfDays)
$Files = get-childitem $TargetFolder -include *.bak, *.x86 -recurse | Where {$_.LastWriteTime -le "$LastWrite"} 

foreach ($File in $Files)
{
    write-host "Deleting File $File" -foregroundcolor "Red";
    Remove-Item $File | out-null
} 

```

Souce [here](http://thoughtjelly.blogspot.com/2009/07/powershell-delete-files-older-than-x.html).

---
*Originally posted on [Server Fault](https://serverfault.com/a/259711) — 8 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
