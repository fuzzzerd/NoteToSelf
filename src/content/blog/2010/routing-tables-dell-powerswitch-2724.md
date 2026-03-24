---
title: "routing tables -- dell powerswitch 2724"
description: "My answer to \"routing tables -- dell powerswitch 2724\" on Server Fault"
date: 2010-07-30
author:
  name: Nate Bross
tags:
  - internet
  - switch
  - routing
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/165722"
---

*Someone [asked on Server Fault](https://serverfault.com/q/165715):*

> I was hoping to know if there is a way to direct all traffic to a specific url, to the server it corresponds to on our local network with out having to go out into the internet. It would be way more convenient for the system we have set up here.
> 
> Please and thank you.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

The way I've done this in the past is by running an internal DNS server that has similar DNS "lookup" zones as the internet, but it simply has local (non-routable) IPs listed.

Then via DHCP, you assign all users to use this DNS server, which will always give out LAN IP addresses for servers you specify.

---
*Originally posted on [Server Fault](https://serverfault.com/a/165722) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
