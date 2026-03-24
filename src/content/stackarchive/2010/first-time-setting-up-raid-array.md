---
title: "First Time Setting Up RAID Array"
description: "My answer to \"First Time Setting Up RAID Array\" on Server Fault"
date: 2010-08-19
author:
  name: Nate Bross
tags:
  - raid
  - hp
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/172375"
---

*Someone [asked on Server Fault](https://serverfault.com/q/172372):*

> I have never set up a RAID array before.
> 
> I just purchased an HP Proliant DL580 G2 server that has a Smart Array 5i RAID controller on it. Do I need any special utility CD to configure the RAID before I load the OS on it? Or is it some type of GUI that I can load after the BIOS loads? I will be loading the operating system and all files onto one partition. I will be putting Debian Linux on this server. It comes with 3x36GB drives, and I want to do a RAID1 array with one hot spare (not looking for speed, just redundancy).
> 
> The server does not come with any software, so I'm wondering if there's something else I need to get to be able to configure the RAID. Also, any tips to help get it set up correctly would be greatly appreciated.

*I posted the following answer, which received 1 upvote:*

Typically, during the POST there will be an option ala "CTRL + R" to "Enter RAID Utility" which will allow you to configure the RAID setup. Once you've completed that, you will probably need to load special drivers for your OS install. The CDs that come with the server will walk you through the steps necessary for your target OS deployment.

---
*Originally posted on [Server Fault](https://serverfault.com/a/172375) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
