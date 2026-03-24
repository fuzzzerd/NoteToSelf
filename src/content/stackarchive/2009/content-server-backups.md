---
title: "Content server backups"
description: "My answer to \"Content server backups\" on Server Fault"
date: 2009-06-09
author:
  name: Nate Bross
tags:
  - backup
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/22845"
---

*Someone [asked on Server Fault](https://serverfault.com/q/22841):*

> What is the best way to backup data on content servers? For example, I have 15 servers that just have content, no applications running on it. Each server has a 250 GB hard drive. So, it's a pretty big amount of data. All the data have external access (via HTTP). So, the question is: what methodology is best in my case?
> 
> The most useful method I know is cross-backup: when each server contains its own data and backup of one other server. But, there is significant reduction in total capacity.
> 
> RAID?

*I posted the following answer, which received 2 upvotes:*

Raid will only provide you with backups in case of hardware failure. What you need is backup software to make a duplicate copy of all content on another server, preferably in a different geographic location.

I'd buy a backup server with a few 1TB drives and backup everything to the backup server.

---
*Originally posted on [Server Fault](https://serverfault.com/a/22845) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
