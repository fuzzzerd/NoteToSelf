---
title: "Can I stream a Windows App from a Linux server?"
description: "My answer to \"Can I stream a Windows App from a Linux server?\" on Server Fault"
date: 2011-12-20
author:
  name: Nate Bross
tags:
  - linux
  - windows
  - saas
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/342755"
---

*Someone [asked on Server Fault](https://serverfault.com/q/342748):*

> We are transitioning from distributed software (on a disc) to software as a service (SaaS) and are looking into how to present our application to users. My question is whether it is possible to stream a Windows-based app from a Linux server via something like remote desktop or terminal services?
> 
> Note: The user is not getting a whole desktop though, just an icon which would remotely launch the application. Similar to Citrix XenApp.

*I posted the following answer:*

As @Tim already mentioned, the only way this is possible is if your app can be recompiled for Linux and/or it is Java and/or it is .NET and compatible with Mono.

If that isn't the case (fairly likely in my experience) you'll need to go with something like XenApp, which requires a Windows Server host, but can deliver to just about every platform as a consumer.

---
*Originally posted on [Server Fault](https://serverfault.com/a/342755) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
