---
title: "What is the best way to monitor disk IO for a Hyper-V Host machine?"
description: "A question I asked on Server Fault"
date: 2010-08-13
author:
  name: Nate Bross
tags:
  - windows
  - windows-server-2008
  - monitoring
  - hyper-v
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/170388"
---

*I [asked this on Server Fault](https://serverfault.com/q/170388):*

When I fire up Perfmon on the hyper-v host, it shows only disk io for that host, and it doesn't seem to include the aggragte disk IO for all machines on the host. Is there something special I need to setup in perfmon to read total IO on the entire server? Is there another tool I should be using to take these readings?

Background: I currently have ~20 VMs on a Hyper-V host sitting on six 15k RPM local SAS drives in RAID 10. I'm looking at potentially moving to iSCSI, but I want to make sure that I'm not using more throughput than the iSCSI can provide. (I'm looking at 1 Gbps, not 10).

---

> [Jim B answered](https://serverfault.com/a/170426) (2 upvotes):
>
> For hyper-v storage the counters to look at are:
> 
> `Physical Disk` - Physical Disk set will give overall storage performance on the system. This includes host access to the same disks (hopefully you've segregated the host from the VM storage)
> 
> ```
> Hyper-V Virtual Storage Device
> Hyper-V Virtual IDE Controller
> 
> ```
> 
> these last 2 counters are for each type of virtual stoage bus and will give you an overall level of activity on 2 bus types. Note that you will not get latency measures as that is on the physical disk. For your purposes I'd look at `Read Bytes / Sec`, `Write Bytes / Sec` on the virtual storage device

---
*Originally posted on [Server Fault](https://serverfault.com/q/170388) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
