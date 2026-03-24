---
title: "Need to run an IIS website in 32bit mode on a 64bit Windows Server"
description: "A question I asked on Server Fault"
date: 2009-12-30
author:
  name: Nate Bross
tags:
  - windows
  - windows-server-2003
  - iis
  - 64-bit
  - x86
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/98257"
---

*I [asked this on Server Fault](https://serverfault.com/q/98257):*

I have an IIS6 server setup running Windows Server 2003 x64, R2, SP2. Everything is working great I can host websites in IIS, and it works exactly how I want.

The catch, I've got an ASP.NET WebApp that needs to use a 32-bit only Odbc driver. I've setup the ASP.NET WebApp to compile for x86 only, but it still doesn't work.

I've also tried this command on the server to enable x86 worker processes, but it also doesn't work: `cscript.exe adsutil.vbs set W3SVC/AppPools/Enable32BitAppOnWin64 true` from [here](http://blogs.technet.com/mbaher/archive/2006/12/17/running-iis-32-bit-applications-on-iis-64-bit.aspx)

Still the application fails to load the Odbc Driver, if I run the exact same code on an x86 dev machine it works as expected, it also works on my x86 IIS7; I'd like to avoid building another production web server for this one WebApp, so any help is appreciated.

---

> [dmo answered](https://serverfault.com/a/98285) (7 upvotes):
>
> In addition to enabling 32 bit apps on win 64, you need to enable 32 bit asp.net IIS integration. In Windows\\Microsoft.NET\\Framework\\v2.0.50727 (not the Framework64 directory) run:
> 
> > aspnet\_regiis -enable -i

---
*Originally posted on [Server Fault](https://serverfault.com/q/98257) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
