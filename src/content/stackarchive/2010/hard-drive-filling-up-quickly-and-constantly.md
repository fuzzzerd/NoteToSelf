---
title: "Hard Drive filling up quickly and constantly"
description: "My answer to \"Hard Drive filling up quickly and constantly\" on Server Fault"
date: 2010-07-26
author:
  name: Nate Bross
tags:
  - windows-server-2008
  - hardware
  - filesystems
  - search
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/164178"
---

*Someone [asked on Server Fault](https://serverfault.com/q/164176):*

> We have a few programs that do a lot of stuff with file management and logs. I think one of the programs is filling up the hard drive, but I have no idea which one or how exactly its happening. Is there any way to search a drive, like C: for files > 1.0GB? Or some means to organize all files on the hard drive by size.
> 
> Whatever the means I really don't care, I just need to find out where this file or directory is that is so hugemongous.

*I posted the following answer, which received 2 upvotes:*

Heres a brief walk-through using Powershell -- [http://www.christiano.ch/wordpress/2009/08/11/powershell-how-to-find-large-files/](http://www.christiano.ch/wordpress/2009/08/11/powershell-how-to-find-large-files/)

To quote the article, something like this will find files greater than 100MB:

```
gci c:\ -rec -ErrorAction "SilentlyContinue" | where {$_.Length -gt 100mb}

```

---
*Originally posted on [Server Fault](https://serverfault.com/a/164178) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
