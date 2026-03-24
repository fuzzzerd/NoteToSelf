---
title: "General question about RAID configurations, specifically nested RAID 50"
description: "A question I asked on Server Fault"
date: 2010-08-03
author:
  name: Nate Bross
tags:
  - windows
  - virtualization
  - raid
  - hyper-v
  - storage
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/166720"
---

*I [asked this on Server Fault](https://serverfault.com/q/166720):*

I understand about the different types of RAID configurations:

1.  RAID 1 -- Mirror \[Redundant\]
2.  RAID 0 -- Stripe \[Performant\]
3.  RAID 5 -- Hot Spare \[Redundant\]

From what I understand, RAID 1 gives you redundancy with no performance hit, RAID 0 gives you performance at the cost of redundancy, and RAID 5 is good in the senes that you gain extra storage space and still have redundancy, at the expence of performance.

I also understand a bit about Nested RAID configurations, specifically RAID 10 (1+0). This provides the benifit of both RAID 1 + RAID 0. Giving you the best of both worlds.

My question is this: (And a SAN is out of the question here) Would a RAID 50 or a RAID 10 be better suited for a virtualization environment where most VMs are very under used in terms of disk IO and CPU use. I'm trying to maximize the number of VMs I can put on a host machine, and my limiting factor is drive space.

So, I'm trying to put as many VMs on a Virtual Host as possible, most of the IO on any of the VMs will be OS related and on occasion user requests will trigger a VM to do some IO, but this is rare and relativly evenly distributed across VMs.

My thought is that the RAID 50 could prove better because A) better use (2/3 total size of all disks in the array instead of 1/2) and B) potentially better better random read/write performance since there are more drives in play for storage, so read/write seeks are more likely to be on different physical drives.

**update**

Virtual Hosts - Windows Server 2008 R2

Virtual Machine - Windows 2000 Server - Windows Server 2008 R2

**update 2**

Single hardware RAID controller. Which I assume would do parity calculations?

Two RAID 5 arrays < 10 total drives

Raw performance is not an issue in most situations, the main limiting factor is physical drive space. Most of the IO is just OS chatter. Due to limitations in our database software we need a 1-server::1-system, even if its only 5 users. So most of our database servers sit idle. The overhead is just running that many OSes on the drive array.

**update 3**

I am currently using a RAID 10, and it is working just fine; but I'm finding that more drive space would be useful, (thus the inquiry about RAID 50 for better use of physical disks). As suggested below, I'm hearing that RAID 6 could offer similar performance, redundancy, and storage capacity as RAID 50 -- is that true or am I not understanding the responses?

---

> [Jake Oshins answered](https://serverfault.com/a/167177) (1 upvotes):
>
> Honestly, the answer to your question depends, in part, on what the rest of your installation looks like. You're asking questions about redundancy levels on local RAID controllers when you're talking about storage that itself has a single point of failure, the host machine that it's connected to.
> 
> Unless you go to some sort of shared array (which might be much simpler and lower-end than a SAN) you'll find that failure of your physical compute host will take down all your workloads. This will always be the case unless you move to a shared array that doesn't use your local RAID controller. This fact may lead you to a strategy where you back up your VMs pretty often, more so than you might if you clustered two or more hosts with a shared back end.
> 
> And if you do those backups so often that you can survive a host failure, you might conclude that you just want to use that local RAID controller in a striped (RAID 0) mode for pure performance.
> 
> Honestly, though, in your situation I'd probably be looking for a single RAID6 array, if your controller supports it. As "freiheit" said, though, it depends very much on the type of storage traffic that your VMs are going to generate. A lot of random writes from several VMs simultaneously might overwhelm your RAID array. If so, you'd want to optimize for performance. If not, you might want to optimize for reliability, depending less on backups.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @freiheit Updated question, I'll have one RAID controller (hardware), < 10 drives total, I presume the RAID controller will do the pairty calculations?

**Nate** (0 upvotes): Updated question body and re-tagged, thought I'm not sure how it's relevent.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/q/166720) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
