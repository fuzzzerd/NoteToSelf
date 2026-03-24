---
title: "Is there a way to connect to Terminal Services &quot;More Secure&quot; from non-windows machine?"
description: "A question I asked on Server Fault"
date: 2011-07-18
author:
  name: Nate Bross
tags:
  - ubuntu
  - remote-access
  - terminal-server
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/291484"
---

*I [asked this on Server Fault](https://serverfault.com/q/291484):*

With Windows Vista and newer, when you enable remote desktop for administration, there are options to allow "Old Clients (less secure) \[no network level authentication\]" and "New clients (more secure) \[with network level authentication\]".

Is there any way to connect to the "more secure" version from non-microsoft clients? I've tried from the ubuntu client, and it works to connect to XP/2003 but it fails to connect to a Win7 Desktop or 2008R2 server, though I can connect to both of those machines from another Win7 machine.

---

> [sysadmin1138 answered](https://serverfault.com/a/291492) (4 upvotes):
>
> There is a way now! The [FreeRDP](http://www.freerdp.com/) project has NLA support, but only in their [git repo](https://github.com/FreeRDP/FreeRDP) right now not in a stable version. They've had NLA support since late January if I remember right. The next stable version should have full support, but until then you'll have to compile your own.

---
*Originally posted on [Server Fault](https://serverfault.com/q/291484) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
