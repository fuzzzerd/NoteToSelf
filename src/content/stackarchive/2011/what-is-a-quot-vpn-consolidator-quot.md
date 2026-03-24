---
title: "What is a &quot;VPN Consolidator&quot;"
description: "A question I asked on Server Fault"
date: 2011-06-03
author:
  name: Nate Bross
tags:
  - vpn
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/276820"
---

*I [asked this on Server Fault](https://serverfault.com/q/276820):*

A client recently mentioned using a VPN consolidator for remote access to their server. I've never heard this term used before. Is it some type of slang that I'm not familiar with?

I did a bit of searching and I came up completely empty.

---

> [user2874 answered](https://serverfault.com/a/276825) (7 upvotes):
>
> Best guess: **They used "VPN Consolidator" as a synonym for "VPN Concentrator".** There is no hard'n'fast definition of a VPN concentrator either; it's generally just a device which is dedicated to being endpoint for (many) VPNs.
> 
> Say you had a good DMZ & dual firewall setup that is working well, and you don't want to change it. A new need for a large'ish number of simultaneous VPN connections for 'road warriors' arises. Your existing firewalls aren't built for high-speed cryptography, they don't have a processing power to handle many AES streams at once.
> 
> So you add a "VPN Concentrator" -- either a more modern firewall-style appliance with more CPU, or a full server -- and dedicate this box to handling the VPNs.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I'm not familiar with that either...What would that be? What is it used for?

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/q/276820) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
