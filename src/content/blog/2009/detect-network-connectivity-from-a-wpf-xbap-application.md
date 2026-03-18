---
title: "Detect network connectivity from a WPF/XBAP Application?"
description: "My answer to \"Detect network connectivity from a WPF/XBAP Application?\" on Stack Overflow"
date: 2009-05-13
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - xbap
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/859799"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/859753):*

> Is there any way to determine if an XBAP (WPF hosted in a browser) application has network connectivity? If not, how would a traditional windows client written in C# and .NET determine if it has connectivity?
> 
> Basically the use case is an XBAP application running on a mobile laptop connected to an intranet via WiFi. The laptop will not have a connection to the Internet. The WiFi connection may or may not be there depending upon where the user is at the time.

GateWayIPAddressInformation should work: [http://msdn.microsoft.com/en-us/library/system.net.networkinformation.gatewayipaddressinformation(loband).aspx](http://msdn.microsoft.com/en-us/library/system.net.networkinformation.gatewayipaddressinformation\(loband\).aspx)

If you get the gateway IP address, and you can Ping ([http://msdn.microsoft.com/en-us/library/system.net.networkinformation.ping(loband).aspx](http://msdn.microsoft.com/en-us/library/system.net.networkinformation.ping\(loband\).aspx)) it you are probably connected.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/859799) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
