---
title: "How do I create a backup of a vhd file?"
description: "My answer to \"How do I create a backup of a vhd file?\" on Server Fault"
date: 2011-08-24
author:
  name: Nate Bross
tags:
  - windows
  - windows-server-2008
  - backup
  - windows-server-2008-r2
  - hyper-v
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/304580"
---

*Someone [asked on Server Fault](https://serverfault.com/q/108695):*

> How to back up a vhd automatically? Is there any tool which I can set up?

*I posted the following answer:*

I recommend using the built-in [Windows Server Backup Tool](http://technet.microsoft.com/en-us/library/cc772523.aspx).there may well be others out there, I have not used them so I cannot recommend them. Here is a [step by step guide to setting it up.](http://technet.microsoft.com/en-us/library/ee849849%28v=ws.10%29.aspx)

The beauty of this tool, is that the output file is a VHD file. This means that you can mount it on another server and work with the files. Since this VHD is a backup "copy" it is not locked in the way that a Hyper-V guest's VHD would be, so you can simply use [robocopy](http://technet.microsoft.com/en-us/library/cc733145%28v=WS.10%29.aspx) to move it to your backup server.

I presume you're trying to backup Hyper-V VHDs, which would be locked so you cant simply copy it. The server backup tool will use VSS to take a snapshot so when you mount the main backup VHD file, all the other files inside will not be locked.

---
*Originally posted on [Server Fault](https://serverfault.com/a/304580) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
