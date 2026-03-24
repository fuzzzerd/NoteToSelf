---
title: "Perform An Action when a file is uploaded on windows server 2008 with built-in IIS FTP Server/Service"
description: "A question I asked on Server Fault"
date: 2010-03-08
author:
  name: Nate Bross
tags:
  - windows
  - iis
  - ftp
  - windows-server-2008-r2
  - iis-7.5
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/120436"
---

*I [asked this on Server Fault](https://serverfault.com/q/120436):*

Is there a way to perform some action (start a vbs, batch file, or an exe, etc) upon the successful upload of a file using Windows Server 2008 R2 built-in IIS FTP server/service?

---

> [djangofan answered](https://serverfault.com/a/120446) (0 upvotes):
>
> Yes, schedule a powershell script to scan the directory every 5 minutes.

---
*Originally posted on [Server Fault](https://serverfault.com/q/120436) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
