---
title: "Using ROBOCOPY to MOVE data around, not copy it"
description: "A question I asked on Server Fault"
date: 2011-02-09
author:
  name: Nate Bross
tags:
  - command-line-interface
  - powershell
  - robocopy
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/233612"
---

*I [asked this on Server Fault](https://serverfault.com/q/233612):*

I have the following powershell script, which executes a few robocopy commands:

```
ROBOCOPY.exe $q3 $q4 /R:5 /W:15 /S /NP /MT:32 /XA:SH /XJD
ROBOCOPY.exe $q2 $q3 /R:5 /W:15 /S /NP /MT:32 /XA:SH /XJD
ROBOCOPY.exe $q1 $q2 /R:5 /W:15 /S /NP /MT:32 /XA:SH /XJD
ROBOCOPY.exe $src $q1 /R:5 /W:15 /S /NP /MT:32 /XA:SH /XJD

```

This works fine, but it takes a **really** long time, I'm wondering, if there is a way that I can have robocopy do a "cut + paste" instead of a "copy + paste" so windows will move the NTFS pointer to the file, instead of actually copying all of the bits of each file?

---

> [sysadmin1138 answered](https://serverfault.com/a/233616) (9 upvotes):
>
> The `/MOV` option is designed to do exactly that. Check your specific version of robocopy for it (robocopy /? should show the option).
> 
> ![enter image description here](https://i.sstatic.net/BucNP.png)

---
*Originally posted on [Server Fault](https://serverfault.com/q/233612) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
