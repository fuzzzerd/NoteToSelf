---
title: "Netgear router failed (no DHCP addresses served)"
description: "My answer to \"Netgear router failed (no DHCP addresses served)\" on Server Fault"
date: 2010-12-15
author:
  name: Nate Bross
tags:
  - router
  - netgear
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/212945"
---

*Someone [asked on Server Fault](https://serverfault.com/q/212922):*

> I have a Netgear fvx538. Last night, I found that all the lights were on for IP connections to machines, but the router could not do normal functions: dish out addresses by DHCP, allow connection to internet, etc.
> 
> I am not sure what to do with this. Possible options I have not tried:
> 
> 1.  Use second port for WLAN source
>     
> 2.  Reset to factory defaults
>     
> 3.  Connect via RS-232 connection (no idea how to proceed with this)
>     
> 
> And how can I figure out what actually happened?
> 
> Yes, I've tried power-cycling it. Same result: all connection lights on, no machine given an IP address.
> 
> * * *
> 
> Later: it looks like using the second port is the obvious first step:
> 
> "The FVX538 has two broadband WAN ports, WAN1 and WAN2, each capable of operating independently at speeds of either 10 Mbps or 100 Mbps. The two WAN ports let you connect a second broadband Internet line that can be configured on a mutually-exclusive basis to:
> 
> • Provide backup and rollover if one line is inoperable, ensuring you are never disconnected."

*I posted the following answer:*

I'd try factory defaults as a last option. First, you'd connect via RS-232 and use something like [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/) to send and receive commands. You'll probably need to consult some documentation on your device to see exactly how to connect and what serial port settings you need. Baud rate, stop bits, etc.

---
*Originally posted on [Server Fault](https://serverfault.com/a/212945) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
