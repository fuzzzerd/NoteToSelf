---
title: "Win2008 Scheduled task won&#39;t start 7zip.exe"
description: "My answer to \"Win2008 Scheduled task won&#39;t start 7zip.exe\" on Server Fault"
date: 2009-12-30
author:
  name: Nate Bross
tags:
  - scheduled-task
  - scheduled
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/98301"
---

*Someone [asked on Server Fault](https://serverfault.com/q/98260):*

> I made a backup tool for MS SQL Express that -daily- backs up, 7zips and uploads the zipped files via FTP. It is a program made in VB.net, built as an .EXE with a .config file. One of the functions calls a file "7zip.exe". Anyway, on Win2003 (20 webservers) this works perfect. Small databases, big databases, slow servers, powerstations... The 'daily basis' is created by launching a scheduled task at night.
> 
> Now in Win2008 R1 I also created a 'basic task' and set it up. When I launch it, I see it working except the 7 zip does nothing. It has something to do with the scheduled task because when I run the .EXE normally (double clicking...) it 7zips, as it should be.
> 
> Thanks in advance!

*I posted the following answer:*

You may need to check the "Run with Highest Privileges" checkbox in addition to assigning a user/password to the task. This enables your application to start another process outside of itself.

---
*Originally posted on [Server Fault](https://serverfault.com/a/98301) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
