---
title: "Is there a reason to give a VM a round base-2 amount (2048MB, 4096MB, etc) of memory?"
description: "A question I asked on Server Fault"
date: 2012-04-06
author:
  name: Nate Bross
tags:
  - hyper-v
  - virtual-machines
  - virtualization
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/377391"
---

*I [asked this on Server Fault](https://serverfault.com/q/377391):*

The title pretty much says it all, is there any advantage to giving a VM 2048MB of memory instead of rounding to base-10 and doing 2000MB?

---

> [Chris S answered](https://serverfault.com/a/377400) (10 upvotes):
>
> The physical memory in the server is a multiple of a power of two, so it will slice evenly if you use other multiples. There may be some incredibly minor improvements with SLAT and such if they're properly aligned too. Otherwise no.

---
*Originally posted on [Server Fault](https://serverfault.com/q/377391) — 27 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
