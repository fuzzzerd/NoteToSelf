---
title: "How to run .NET and SQL Server in USB thumbdrive?"
description: "My answer to \"How to run .NET and SQL Server in USB thumbdrive?\" on Server Fault"
date: 2009-05-05
author:
  name: Nate Bross
tags:
  - windows
  - sql-server
  - .net
  - usb-flash-drive
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/4941"
---

*Someone [asked on Server Fault](https://serverfault.com/q/4682):*

> Is there a way to install .NET on a USB drive, pop it into a machine and get .NET working without actually installing it on a client's local machine?
> 
> I am also trying to figure out how to do the same for SQL Server. Is it even possible?

*I posted the following answer, which received 2 upvotes:*

No, its not possible for reasons stated by others here.

Your best bet is to require .NET to be installed, and then run your .NET application from the thumbdrive.

If you need SQLServer but dont wanna install that beast you can use SQL Compact (included in .NET) and store the database in the same folder on the thumbdrive.

---
*Originally posted on [Server Fault](https://serverfault.com/a/4941) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
