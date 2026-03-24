---
title: "windows automatic copy / move / delete files"
description: "My answer to \"windows automatic copy / move / delete files\" on Server Fault"
date: 2011-06-27
author:
  name: Nate Bross
tags:
  - windows
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/284550"
---

*Someone [asked on Server Fault](https://serverfault.com/q/284546):*

> Is there any utility / software which could periodically / scheduled copy / move / delete files over network or with hard drives?

*I posted the following answer, which was chosen as the accepted answer and received 4 upvotes:*

[Windows Task Scheduler](http://msdn.microsoft.com/en-us/library/aa383614%28v=VS.85%29.aspx) will allow you to setup very complex (or very basic) schedules to run scripts.

[robocopy](http://technet.microsoft.com/en-us/library/cc733145%28WS.10%29.aspx) is a great tool which can do all sorts of file minipulations, it works well with UNC paths, `copy` and `xcopy` both require `pushd` and `popd` to map your shares to the Z:\\ drive (typically not a problem, and xcopy may even do this automatically) but I find the flexibility and power of `robocopy` to be more useful. It is on Windows Vista / Server 2008 + by default, and a free download from microsoft for XP and Server 2003.

You can use [powershell](http://technet.microsoft.com/en-us/scriptcenter/dd742419) or windows command shell to call [robocopy](http://technet.microsoft.com/en-us/library/cc733145%28WS.10%29.aspx) and make your copy / move / delete operations.

For example, save the following to a file called `backup.bat` :

```
robocopy \\server1\shareA\ \\server2\backups\shareA\ /MIR

```

This will copy everything on `server1` that is in `shareA` to the backups share on `server2` the `/MIR` switch says to mirror the changes, so deletes in `shareA` are also deleted in `backups\shareA`

Then, open the Task Scheduler, and configure it to run `backup.bat` file every night (or whatever schedule you need to make these copy / move / delete.

---
*Originally posted on [Server Fault](https://serverfault.com/a/284550) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
