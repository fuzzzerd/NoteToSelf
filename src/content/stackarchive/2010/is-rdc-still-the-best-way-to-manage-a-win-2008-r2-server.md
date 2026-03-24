---
title: "Is RDC still the best way to manage a Win 2008 R2 Server?"
description: "My answer to \"Is RDC still the best way to manage a Win 2008 R2 Server?\" on Server Fault"
date: 2010-09-21
author:
  name: Nate Bross
tags:
  - windows-server-2008-r2
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/183223"
---

*Someone [asked on Server Fault](https://serverfault.com/q/183208):*

> I read an article a whole ago about some new way to login locally to a remote Windows 2008 R2 machine. Some kind of better management feature if you're on a Win 7 client.
> 
> Right now I'm using RDC, are there any preferred ways (new) to gain console access to the remote Windows 2008 R2 server from Win 7?

*I posted the following answer, which received 1 upvote:*

Remote Desktop is _the_ way to gain remote-console access to a windows server, thats the bottom line; however, many of the MMCs available on the console are available as tools you can run from a client workstation and 'connect' to the server you wish to manage, provided you're in the same domain and have administrator rights. Try EventViewer, you can use the pulldown menu to "Connect-To-Another-Machine" many of the other MMCs function in this way as well.

In addition to that you can use both Powershell and VBS to minipulate WMI queries on the remote server as well -- this is more useful for batch processing and other tasks best handled by scripts.

---
*Originally posted on [Server Fault](https://serverfault.com/a/183223) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
