---
title: "Looking for software RAID-style FTP solution"
description: "My answer to \"Looking for software RAID-style FTP solution\" on Server Fault"
date: 2009-09-15
author:
  name: Nate Bross
tags:
  - backup
  - software-raid
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/65681"
---

*Someone [asked on Server Fault](https://serverfault.com/q/65657):*

> [This software (TAHOE-LAFS)](http://allmydata.org/trac/tahoe) allows you to setup an FTP server that will encrypt and split your data, putting it redundantly on a bunch of remote servers. It is highly customizable so that you can adjust the amount of redundancy that you need and that you can easily add additional severs as nodes to the pool of space available.
> 
> I'm looking for something very similar, but instead of servers being nodes, I want normal hard drives to be the nodes. In other words, I want a software RAID (even if it is behind an FTP server) that will allow me to add more drives, adjust the redundancy, etc... without having to rely on standard RAD10, RAID5, RAID6, etc...
> 
> The purpose of this system would be to allow me to build a cheap file server that I can expand over time. I want to be able to mix and match hard drive sizes and I do not want to buy a special card for it. I don't want to rely on the Windows software RAID.
> 
> Is there anything out there?

*I posted the following answer, which received 1 upvote:*

Buy a DROBO (I don't own any of their stock, btw) and attach it via FireWire. Expandable up to 16 TB, any size drives in any combo. It will auto resize and it's got redundancy built in you can lose any single drive and not lose data.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Unless it gives you competitive advantage to roll your own. I'd recommend not re-inventing the wheel. The DORBO will probably give you the best performance and reliability anyway. Just my opinion. Best of luck.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/65681) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
