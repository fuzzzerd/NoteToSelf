---
title: "Is it possible to write a Ping class in C# that will run within Windows 8 Metro environment?"
description: "A question I asked on Stack Overflow"
date: 2012-06-08
author:
  name: Nate Bross
tags:
  - c#
  - windows
  - network-programming
  - windows-8
  - windows-runtime
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/10952346"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/10952346):*

Since the Metro environment on Windows 8 lacks most of the .NET framework class libraries or contains a substancially pared down version, is it possible to execute a "ping" from a Metro style application? There is support for Sockets, so I guess there is hope, but I don't know where to start, since every "C# Ping" example uses [`System.Net.NetworkInformation.Ping`](http://msdn.microsoft.com/en-us/library/system.net.networknformation.ping.aspx) and that is not available in WinRT.

I also looked into the source code for Mono, and their ping implementation fires up ping.exe and returns the result from the standard output window of the command line.

---

> [Richard Cook answered](https://stackoverflow.com/a/15057759) (5 upvotes):
>
> No, unfortunately not. ICMP is not supported in WinRT: `IcmpCreateFile` and related Win32 APIs are only available in the "desktop" API partition. ICMP can be implemented using raw sockets but since these are not supported in WinRT (and usually require elevation, anyway), this option is also not available to you.
> 
> As the developer of a Windows Store network scanning tool myself ([http://lanscan.rcook.org/](http://lanscan.rcook.org/)), I'd love to be able to do this.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/10952346) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
