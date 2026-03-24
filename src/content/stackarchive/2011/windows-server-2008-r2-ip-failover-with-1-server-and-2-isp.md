---
title: "Windows Server 2008 R2, IP Failover with 1 server and 2 isp&#39;s"
description: "My answer to \"Windows Server 2008 R2, IP Failover with 1 server and 2 isp&#39;s\" on Server Fault"
date: 2011-11-14
author:
  name: Nate Bross
tags:
  - ip
  - failover
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/330886"
---

*Someone [asked on Server Fault](https://serverfault.com/q/330885):*

> I have a Windows Server machine that I have 2 nic's that are connected to 2 different isp's. Our DNS is hosted externally. What I am trying to do is set it up where when one isp goes down the 2nd isp will take over. I am pretty sure that round robin is not what i'm looking for as it would send people to the down isp 50% of the time. I have read about NLB, but everything I have seen relates to multiple computers in a cluster. I am not setting up a cluster. I have also thought about NIC teaming, but I do not know if that would work with our dsn being hosted externally. Any help would be greatly appreciated.

*I posted the following answer, which received 1 upvote:*

To achieve the goal you're after you have two options:

1.  BGP
2.  DNS based fail-over (sounds like what you're trying to do)

Option one is not something you want to roll your own (IMO) as it is complicated and hard to get right. If your hosting provider offers it as a managed service, I HIGHLY recommend you switch to using it.

For option two, there are a variety of devices available, I've used [Ecessa PowerLink](http://www.ecessa.com/pages/products/products_powerlink_pl60.php) devices with good results. There are likely other devices which have similar features, but I have not used them.

---
*Originally posted on [Server Fault](https://serverfault.com/a/330886) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
