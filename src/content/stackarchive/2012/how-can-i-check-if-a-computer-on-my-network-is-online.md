---
title: "How can I check if a computer on my network is online?"
description: "My answer to \"How can I check if a computer on my network is online?\" on Stack Overflow"
date: 2012-05-30
author:
  name: Nate Bross
tags:
  - c#
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10818387"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10818229):*

> I want to know how to check if a machine on my network is online, using only C#.
> 
> All machines on my network use the same OS (Windows 7) and I'm logged in as the same user on all machines.
> 
> My goal is to check if they are active, or open.

*I posted the following answer, which received 6 upvotes:*

The best you can probably hope for without installing some custom software on the target machine is to [use the Ping class.](http://msdn.microsoft.com/en-us/library/system.net.networkinformation.ping.aspx)

A quick and dirty implementation might look like this:

```
var p = new Ping();
if(p.Send("HostNameOrIP").Status != Success) return;

```

If you have very specific requirements about what an "active and open" machine is, and the state can only be detected locally, you will need to write a windows service that will expose a WCF service. This service will run on the target computer and report back the local status when requested by the source computer.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10818387) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
