---
title: "Securing RDP for a public web server"
description: "My answer to \"Securing RDP for a public web server\" on Server Fault"
date: 2011-06-20
author:
  name: Nate Bross
tags:
  - security
  - windows-server-2008-r2
  - remote-desktop
  - rdp
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/282066"
---

*Someone [asked on Server Fault](https://serverfault.com/q/282043):*

> I'm a developer of a server-based web application. My client has organised a virtual server to be hosted with one of their ISPs. The server is running Windows Server 2008 R2. It's a completely standalone machine (i.e. no domain, no policies pushed down, etc) and I have total control over it. I should note that while I know a reasonable amount about Windows, I'm not a server admin myself and don't know a great deal about how to manage servers.
> 
> However, the ISP doesn't provide any sort of VPN or other security for accessing the machine. They've opened the ports I need publicly open, but the RDP ports are causing me some concern. I need to be able to RDP in from a few machines, and unfortunately some of these have dynamic IPs due to being mobile machines.
> 
> Although the application is minimal risk, I still really don't like having RDP open to the world as well - unfortunately, the options they've given me are:
> 
> *   open RDP to the world so I can use Windows Firewall on the server to manage the IPs that are allowed to access the machine
> *   open RDP to specific IPs at their firewall level
> 
> I was wondering if there are any other solutions anyone can think of which will let me secure RDP but somehow open it to particular IPs as I need to, and that would work on a standalone machine like this?

*I posted the following answer, which received 2 upvotes:*

One thing I've done for some Security through Obscurity is to change the Remote Desktop port number from the default 3389, to something else. That and a very strong username/password combo on the server is about all you're going to be able to do without adding additional software to the mix (something I always try to avoid whenever possible).

You could try running an SSH server on it (I think there are Windows ports of SSH, never used any myself) and you could setup an SSH tunnel, through which you could run Remote Desktop.

---
*Originally posted on [Server Fault](https://serverfault.com/a/282066) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
