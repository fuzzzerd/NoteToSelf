---
title: "How would I share ports between my IIS applications?"
description: "My answer to \"How would I share ports between my IIS applications?\" on Server Fault"
date: 2012-05-16
author:
  name: Nate Bross
tags:
  - iis
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/389747"
---

*Someone [asked on Server Fault](https://serverfault.com/q/389746):*

> By request of our network administrator, I would like to do so unless someone could give me a strong argument against it.
> 
> *   What should i watch out for?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

The only way to do this is by creating a unique binding. If the port and IP are the same, the host header (dns entry) must be different.

I am unaware of any downsides to this approach. Especially if you do not have enough IPs to service every application you need to run.

---
*Originally posted on [Server Fault](https://serverfault.com/a/389747) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
