---
title: "Firewall rule to allow access to windows updates or other resources on a CDN?"
description: "My answer to \"Firewall rule to allow access to windows updates or other resources on a CDN?\" on Server Fault"
date: 2010-07-30
author:
  name: Nate Bross
tags:
  - firewall
  - cdn
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/165633"
---

*Someone [asked on Server Fault](https://serverfault.com/q/165601):*

> What's the best way to poke a firewall hole in a border firewall to allow windows updates?
> 
> As far as I can tell, the windows update sites are hosted on a content distribution network that can potentially change IP addresses every 30 seconds.
> 
> If I "poison" our campus DNS with a static assignment for the sites, eventually I'll be pointing to sites that don't actually host the content anymore.
> 
> Are there any IP addresses that host the update content that are guaranteed to never change?
> 
> In a more generic sense, how do people configure firewalls to allow access to resources hosted on CDNs where the IPs are going to change constantly? The firewall just sees to/from packets and doesn't necessarily know what url (if https) the request is going to, so the firewall doesn't have a direct way to see that this packet is going to the symantec virus definitions update site while that one is looking at a world-cup stream.
> 
> And, in my situation, I don't have the ability to just mandate a specific configuration on the systems on the network. Ah, the joys of working at a university...

*I posted the following answer:*

My recommendation is to install WSUS on a server in your DMZ, and give it unrestricted access to `microsoft.com`

Then, through group policy, I'd point all your other machiens to use your WSUS server. There are a few up-sides:

1.  Only one server has access through the "firewall hole"
2.  You can control which updates go to which server from a centralized control panel.
3.  Reduced bandwidth usage, since only one server downloads from the Internet, the rest download over your LAN.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Does your firewall support DNS lookups? I.e. can you do unrestricted traffic based on DNS? If so, you can see here for a list of domains from Microsoft -- [technet.microsoft.com/en-us/library/bb693717.aspx](http://technet.microsoft.com/en-us/library/bb693717.aspx)

**Nate** (0 upvotes): Ah... missed that bit.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/165633) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
