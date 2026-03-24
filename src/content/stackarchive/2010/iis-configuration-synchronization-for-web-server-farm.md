---
title: "IIS Configuration Synchronization for Web Server Farm?"
description: "A question I asked on Server Fault"
date: 2010-03-29
author:
  name: Nate Bross
tags:
  - iis
  - configuration
  - windows-server-2008-r2
  - windows
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/127409"
---

*I [asked this on Server Fault](https://serverfault.com/q/127409):*

I'm wondering if there is any good/easy way to get the IIS configurations synchronized?

I'm going to be setting up a pair of IIS Servers with Network Load Balancing. I can get the data files (html, etc) synchronized all fine and well, but I'll be adding new Websites fairly often and I'd like to avoid doing the IIS configuration on multiple servers.

---

> [Vivek Kumbhar answered](https://serverfault.com/a/127431) (2 upvotes):
>
> Did you check the Shared Configuration feature in IIS 7? Check this out [http://learn.iis.net/page.aspx/264/shared-configuration/](http://learn.iis.net/page.aspx/264/shared-configuration/) and [http://learn.iis.net/page.aspx/453/configuring-a-web-farm-using-iis-shared-configuration/](http://learn.iis.net/page.aspx/453/configuring-a-web-farm-using-iis-shared-configuration/)

---
*Originally posted on [Server Fault](https://serverfault.com/q/127409) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
