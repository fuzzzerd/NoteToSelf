---
title: "Why does SQL Server Uninstaller not uninstall everything?"
description: "My answer to \"Why does SQL Server Uninstaller not uninstall everything?\" on Server Fault"
date: 2011-06-13
author:
  name: Nate Bross
tags:
  - sql-server
  - uninstall
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/280061"
---

*Someone [asked on Server Fault](https://serverfault.com/q/280037):*

> This could me just me not understanding how this is done but I find it infuriating that I can install SQL Server Express from a single executable file that dumps all this stuff like SQL Publishing Wizard and SQL Compact and TSQL this and that...
> 
> But when I go to Uninstall SQL Server, ALL this junk is left behind and I have to remove them one by one!
> 
> Why is that? Is there an uninstaller I can run that basically says "make my machine as if I never installed SQL Express", just dump it all?

*I posted the following answer:*

The uninstaller, will only uninstall (delete/remove) items which the installer specifically created. Anything that is created by the software, after its installed, will not be removed by the uninstall process.

---
*Originally posted on [Server Fault](https://serverfault.com/a/280061) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
