---
title: "Asp.Net IIS hosting"
description: "My answer to \"Asp.Net IIS hosting\" on Stack Overflow"
date: 2010-12-15
author:
  name: Nate Bross
tags:
  - asp.net
  - iis
  - hosting
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4446449"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4446400):*

> I have an asp.net web application hosted iis on LAN. When i type in my local ip address in the URL box, i can access it. My question is, if i want to access it from outside the LAN, would i have to port forward it to port 80? And intead of typing my local ip address in the URL box, i would now have to type the routers ip adress??

Yes. If your internet address is 7.7.7.7 and your LAN address is 10.10.10.10 -- you'll need to put a NAT/Port-forwarding entry in your router/firewall to send traffic on TCP Port 80 destined for 7.7.7.7 TO 10.10.10.10. On most home routers this is a pretty simple task.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4446449) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
