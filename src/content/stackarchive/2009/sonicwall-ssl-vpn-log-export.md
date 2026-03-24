---
title: "SonicWall SSL VPN Log Export"
description: "A question I asked on Server Fault"
date: 2009-09-15
author:
  name: Nate Bross
tags:
  - vpn
  - ssl
  - log-files
  - logging
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/65676"
---

*I [asked this on Server Fault](https://serverfault.com/q/65676):*

I would like to automatically pull the log file out of my SonicWall SSL VPN. If I login to the interface, I am able to click an export button and download a file I can process; however, I cannot find any way to automatically download this file.

I've tried using Fiddler to track down where it comes from, but with no luck.

I would be OK with the SonicWall dropping the file on a file server or having my process utility download it from the SonicWall.

I see options for Syslog server \[not exactly sure how that works\] and for emailing the log file, neither of these options fits what I want to do very well. But if you could shed some light on syslog servers that may get me going down the right path.

My end goal is to read this log file and stuff it into my own database.

Any help on this issue is greatly appreciated.

---

> [geeklin answered](https://serverfault.com/a/65690) (1 upvotes):
>
> fuzzered, really syslog is your best option. All firewalls should be syslogged. Check out [Kiwi Syslog](http://www.kiwisyslog.com/kiwi-syslog-server-overview/). Use the free version and you will have all of the logged data you need. You can even change the format it is in. Just download it to any server or desktop and point your sonicwall to it.

---
*Originally posted on [Server Fault](https://serverfault.com/q/65676) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
