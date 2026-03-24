---
title: "XBAP usage and maturity issues"
description: "My answer to \"XBAP usage and maturity issues\" on Stack Overflow"
date: 2009-10-30
author:
  name: Nate Bross
tags:
  - clickonce
  - xbap
  - commercial-application
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1650500"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1599803):*

> we're considering migrating our UI to XBAP. we've chosen XBAP despite knowing the clients must have .net pre-installed, since we're not targeting the masses but rather IT professionals in the corporate environment, and it's a way to preserve our investment (in a WPF based UI in a client-server architecture) and enjoy web deployment. however, we are concerned about the maturity of the platform/architecture and it's adoption.
> 
> **do you know of any commercial applications out there using XBAP, and do you have any experience using it? can you elaborate on that experience?**
> 
> **also, as @Murph suggested, can you think of strong reasons to prefer clickOnce over XBAP (or the other way around)?**

*I posted the following answer, which received 1 upvote:*

I could be wrong, but IIRC XBAP uses ClickOnce as it's underlying deployment method. \[Cant find where I read this, so take that with a grain of salt.\]

That said, I've had great success running a WPF application via ClickOnce deployment. As was stated before, you deploy all the files to your web server. As you release updates you simply copy them to your web server, as clients run the app they get prompted to update to the newest verison, you can require update, or allow them to deferr.

Its very user friendly and doesn't require the overhead of a browser to run your application.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1650500) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
