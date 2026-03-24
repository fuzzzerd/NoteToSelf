---
title: "Windows Server 2008 R2 and VMWare or?"
description: "My answer to \"Windows Server 2008 R2 and VMWare or?\" on Server Fault"
date: 2010-06-15
author:
  name: Nate Bross
tags:
  - virtualization
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/151503"
---

*Someone [asked on Server Fault](https://serverfault.com/q/151493):*

> I want to use Windows Server 2008 R2 as a host, and load RedHat as a guest OS. Should I use VMWare, or does Windows have something built in that competes with VMWare?

*I posted the following answer, which was chosen as the accepted answer:*

Windows Server 2008 has Hyper-V built in, and Windows Server 2008 R2 also includes a newer version Hyper-V which supports much better backup and integration with System Center Virtual Machine Manager (a must have if you are going to be managing more than a handful of virtual host machines).

While it may not be "supported" many other OSes work under Hyper-V, they simply don't get the integration tools installed. Its a trade-off, but I haven't seen too many issues with it.

That said, we get very good density out of our Hyper-V machines, although we have very low per-VM usage, we see 20+ VMs on a host machine, with 6 drive RAID-10, 32GB Memory, and two quad-core CPUs.

---
*Originally posted on [Server Fault](https://serverfault.com/a/151503) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
