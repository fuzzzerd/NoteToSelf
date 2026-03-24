---
title: "3 tier and 3 layer architecture"
description: "My answer to \"3 tier and 3 layer architecture\" on Stack Overflow"
date: 2011-08-01
author:
  name: Nate Bross
tags:
  - 3-tier
  - n-tier-architecture
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6904109"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6609822):*

> 3 tier architecture and 3 layer architecture are not same?
> 
> I heard some saying 3 layer architecture is Application layer,business logic,Data layer in your application.But if these 3 layers are put in 3 different machines then it is 3 tier application.
> 
> Is it correct?

*I posted the following answer:*

Generally, they are one and the same; however, this might be a good way to think about it.

Each "layer" is a logical grouping of code. Each "tier" is where the code lives. If you need to scale out, it makes sense to have each "layer" on its own "tier" (thus making them one and the same), but there is no reason they could not all be on the same machine, or even the same process.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6904109) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
