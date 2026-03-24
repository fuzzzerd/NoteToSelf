---
title: "Block Facebook for selected users"
description: "My answer to \"Block Facebook for selected users\" on Server Fault"
date: 2011-04-14
author:
  name: Nate Bross
tags:
  - windows-server-2003
  - proxy
  - blocking
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/259724"
---

*Someone [asked on Server Fault](https://serverfault.com/q/259705):*

> We have a few users here who are using Facebook during working hours and their productivity is through the floor, as a temporary measure I have remotely edited their hosts files to point facebook.com and its various subdomains to point to the loopback address and then manually comment out at lunch time so they can use it.
> 
> This is obviously a bit tiresome doing this for a number of users every day.
> 
> I am looking at trying to find something that can do this blocking automatically on schedule.
> 
> I was thinking some kind of proxy server which i can add to the proxy settings on their browser via group policy.
> 
> Does anyone know of any free or cheapish software solution for windows that will do this? Or maybe something standalone I can install on a PC/VM?
> 
> I guess I could always write and schedule some batch files to switch a blocked hosts file with a non blocked one.
> 
> Network is Windows 2003 SBS server, Windows XP sp3 workstations, single interface on server Netgear DG834 router which whilst it does have some scheduling it doesn't allow setting of a window only single block window - for example 9-5pm, but I would want to open it in the middle.

*I posted the following answer, which received 3 upvotes:*

While I agree with the most here that this is a management issue and in an ideal world it would end with a new policy; however, in the world in which we live in, an enforcement arm is required in addition to policy.

Others have mentioned several packages you could purchase; I think what you've done is fine -- what you need is a way to automate it. I think a simple powershell and a pair of scheduled tasks would work just fine.

---
*Originally posted on [Server Fault](https://serverfault.com/a/259724) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
