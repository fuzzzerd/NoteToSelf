---
title: "Link Aggregation between DELL PC2724 and Cisco Catalyst 3750"
description: "A question I asked on Server Fault"
date: 2011-07-26
author:
  name: Nate Bross
tags:
  - cisco
  - dell
  - switch
  - lag
  - lacp
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/294313"
---

*I [asked this on Server Fault](https://serverfault.com/q/294313):*

I'm trying to configure Link Aggregation between my two switches, on the DELL switch, there is only an option to include a port in a "LAG Group." On the Cisco's I've tried creating an EtherChannel group with "Dynamic Desirable" (set to negotiate). I have also tried to setup the ports as 802.11Q as well as ISL Link (both with same results)

When I plug in the cables, I can see that the links come up for each individual port, but the trunk does not.

I can see the status of each individual "port" on the Cisco as well as the EtherChannel group from the Cisco and each of the individual ports show status "stand-alone."

The lights on the Cisco switches start orange (normal) and eventually go to green, but I cannot get any traffic across the cross-connect. If I remove all "configuration" and use a single cable, everything works fine. I'm trying to get some additional speed with the LAG.

Any thoughts on what I should try?

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): After some research, that is the most up to date Firmware available for this DELL switch.

**Nate** (0 upvotes): I'm running 1.0.1.07 firmware on the DELL. I should also mention, I have other EtherChannel ports working with other (newer) DELL switches.

**Nate** (0 upvotes): That maybe my problem... I know the Cisco supports LACP, but as far as I can tell, the DELL switch does not support anything other than "LAG" which I understand to be an encompasing term for link aggregation, not a specific type. I'm still hunting down new firmware to see if it provides more options for what type of LAG to form. Should I be using 802.11Q on the Ciscos though?

**Nate** (0 upvotes): No... What version have you seen this work on?

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/q/294313) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
