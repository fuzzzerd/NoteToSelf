---
title: "Programming a P2P distributed system using Microsoft WCF"
description: "My answer to \"Programming a P2P distributed system using Microsoft WCF\" on Stack Overflow"
date: 2011-04-22
author:
  name: Nate Bross
tags:
  - .net
  - wcf
  - network-programming
  - p2p
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5759317"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5759030):*

> I am about to develop a distributed system using WCF. I need to do the following:
> 
> *   Send and receive packets ensuring delivery.
> *   Send and receive echo messages.
> *   Determine distances (if possible).
> *   Encrypt data and send them, decript received data.
> 
> I need to do this without discovery services or so on. I just need something that allows me to put an IP address and a port and to enstablish a communication.
> 
> Is it possible to use TCP? What about UDP?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

UDP is not a good choice for persistant connections; TCP is a much better choice. What you're talking about should be possible with WCF; the main issue is going to be getting the first IP address to connect to without having a centralized location.

Basically, you'll write a WCF service that has a specific endpoint, your service could be hosted by the "client" application so it that you can connect to others running the same program; you'd simply need their IP and port to connect to their end-point.

All that said, depending on the nature of your P2P system, writing your own TCP client and server may serve you better, since WCF is mostly about passing messages back and forth.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5759317) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
