---
title: "Road Warrior VPN Setup"
description: "My answer to \"Road Warrior VPN Setup\" on Server Fault"
date: 2012-05-29
author:
  name: Nate Bross
tags:
  - vpn
  - openvpn
  - cisco-asa
  - mikrotik
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/393663"
---

*Someone [asked on Server Fault](https://serverfault.com/q/393656):*

> I apologise up front for the rather open ended nature of this question but I've got well out of my depth and could really do with some pointers.
> 
> I need to set up a road warrior VPN solution which will allow our customers to securely access a number of services we provide for them. Customer machines will be running a variety of Windows versions from XP onwards with a variety of patch levels. Typically they will connect from the clients main offices but not always. It is safe to assume that all clients will be behind NATs but we may occasionally see a connection that isn't NAT'ed. Typical connection situation is therefore:
> 
> Customer Laptop -- Router (NAT) -- Internet -- VPN Server + Firewall -- Server (Win 2008 R2, Non-routable IP)
> 
> There will initially be a dozen or so people that could connect but that will grow quickly to around 100. It's unlikely that we'll see that many concurrent connections though, I imagine our total VPN throughput would be <50Mbps peak.
> 
> What are my options for setting this up?
> 
> I've been trying to set up a system like this using a MikroTik router for a few days but have struggled to get it working correctly, particularly with NAT'ed clients. I've had a quick look at OpenVPN and liked what I saw but I think it's unlikely our customers IT departments would allow the client to be installed. Finally I've looked at the Cisco ASA range but I'm on a fairly tight budget so this is less preferable but it looks like it would work pretty much out of the box. My fall back position is to connect the server directly and use the provided VPN + Firewall facilities but that is far from ideal as the number of servers is likely to grow over time.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

What is wrong with installing OpenVPN clients? I would find out from your customers if this is an option, because it will be cheap and probably do what you want... though there is some configuration required (I haven't ever done it, but I've read about it being pretty good).

On another note, I've used [Watchguard](http://www.watchguard.com/) firewalls with mobile VPN, and been pretty happy. It works just fine when the clients are behind NAT. They aren't cheap, but they are less expensive than Cisco.

---
*Originally posted on [Server Fault](https://serverfault.com/a/393663) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
