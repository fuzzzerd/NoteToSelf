---
title: "Windows Server 2008 VPN"
description: "My answer to \"Windows Server 2008 VPN\" on Server Fault"
date: 2011-08-12
author:
  name: Nate Bross
tags:
  - windows
  - windows-server-2008
  - security
  - vpn
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/300605"
---

*Someone [asked on Server Fault](https://serverfault.com/q/300602):*

> I have some questions about Windows VPN that I am hoping someone can answer:
> 
> 1) Is it possible to limit what users can access when connecting via VPN? For example, can I only allow users to access one server in the network?
> 
> 2) If I want to setup VPN so that it always connects when an internet connection is present, is there a way to disable the connection when a user is inside the LAN?
> 
> 3) Is Windows VPN secure with special certificates? Just using the default configuration?

*I posted the following answer:*

1.  Yes -- See [Routing and Remote Access](http://technet.microsoft.com/en-us/library/cc754634%28v=WS.10%29.aspx). A simple way to do it, is to assign DHCP to VPN clients on a new subnet, then only allow that subnet to access the resources you want remote users to see.
2.  I have never used that option, I always have users connect when necessary. Maybe someone else knows the answer to that point.
3.  When configured correctly, yes. There are options during setup/configuration for what type of encryption to require.

---
*Originally posted on [Server Fault](https://serverfault.com/a/300605) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
