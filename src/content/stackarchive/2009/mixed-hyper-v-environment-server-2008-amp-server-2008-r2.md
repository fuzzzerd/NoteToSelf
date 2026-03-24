---
title: "Mixed Hyper-V environment Server 2008 &amp; Server 2008 R2 with VMM and VMM R2"
description: "A question I asked on Server Fault"
date: 2009-09-09
author:
  name: Nate Bross
tags:
  - windows-server-2008
  - virtualization
  - hyper-v
  - hyper-v-server-2008-r2
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/63778"
---

*I [asked this on Server Fault](https://serverfault.com/q/63778):*

I have a few Server 2008 Hyper-V hosts all working fine with Virtual Machine Manager. I got a new server and installed Server 2008 R2 and was unable to manage it with VMM; so I upgraded to VMM R2. Now, I am unable to manage any of my old Server 2008 machines, but the Server 2008 R2 machine works great.

Is there a way to use System Center Virtual Machine Manager in a mixed Server2008/Server2008R2 environment?

---

> [jnaab answered](https://serverfault.com/a/63850) (3 upvotes):
>
> The mixed environment you describe is indeed a supported environment for VMM 2008 R2 ([this FAQ](http://technet.microsoft.com/en-us/library/dd221383.aspx) lists the supported virtualization platforms).
> 
> I would suggest reviewing the steps outlined in [this blog post](http://blogs.technet.com/chengw/archive/2009/08/24/vmm-2008-r2-upgrade-guide.aspx) on TechNet to make sure you didn't miss anything (particularly the post-upgrade update of each of the managed entities with the new agent).
> 
> Additional details regarding the VMM upgrade process can be found in the [VMM 2008 R2 Deployment Guide](http://go.microsoft.com/fwlink/?LinkID=139191) in VMM TechNet.

---
*Originally posted on [Server Fault](https://serverfault.com/q/63778) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
