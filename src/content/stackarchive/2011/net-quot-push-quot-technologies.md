---
title: ".NET &quot;Push&quot; technologies?"
description: "My answer to \".NET &quot;Push&quot; technologies?\" on Stack Overflow"
date: 2011-04-19
author:
  name: Nate Bross
tags:
  - .net
  - push-notification
  - push
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5711608"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5708780):*

> I am designing a new project and I am trying to figure out ways to push data/events from a server application to a client application (ie a WPF application).
> 
> The two I know of are:
> 
> *   Pub/Sub (ie [NServiceBus](http://www.nservicebus.com/))
> *   [Full Duplex WCF](http://msdn.microsoft.com/en-us/library/ms731064.aspx)
> 
> Are there other solutions for the server to talk to the client? If so what are they?

*I posted the following answer:*

You can also use any web transfer, simply increase the timeout from the caller. Then at the server, simply block until you have data to send.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5711608) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
