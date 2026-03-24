---
title: "SSD RAID 1 and INTEL S5520SC"
description: "My answer to \"SSD RAID 1 and INTEL S5520SC\" on Server Fault"
date: 2010-10-21
author:
  name: Nate Bross
tags:
  - raid
  - windows-server-2008-r2
  - ssd
  - raid1
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/193613"
---

*Someone [asked on Server Fault](https://serverfault.com/q/193586):*

> I've a server using INTEL S5520SC motherboard. I was wondering if it's possible to connect 2 SSD 128GB INTEL EXTREME drives in RAID 1 directly to this motherboard or would I need some kind of external controller?
> 
> Also will this work good, reliable enough or should I just drop this idea?

*I posted the following answer, which received 1 upvote:*

As stated, SSDs should operate the same as SATA drives; however, that said I suspect that 4 15k rpm SAS drives in RAID 10 is enough to operate 5 VMs. SQL Server and Exchange aside, I run 20+VMs on 6-disk RAID 10s and performance is fine. It greatly depends what type of workload you have. I'd run perf-mon and verify that the disk subsystem is truely your bottle neck.

Since you're talking MS, (I assume hyper-v) check this question I asked a few months ago: [What is the best way to monitor disk IO for a Hyper-V Host machine?](https://serverfault.com/questions/170388/what-is-the-best-way-to-monitor-disk-io-for-a-hyper-v-host-machine)

(this was a comment that turned into a full answer)

---
*Originally posted on [Server Fault](https://serverfault.com/a/193613) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
