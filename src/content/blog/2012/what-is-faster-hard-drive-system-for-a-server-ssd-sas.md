---
title: "What is faster hard drive system for a server, SSD, SAS, RamDisk?"
description: "My answer to \"What is faster hard drive system for a server, SSD, SAS, RamDisk?\" on Server Fault"
date: 2012-02-06
author:
  name: Nate Bross
tags:
  - ubuntu
  - hardware
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/357422"
---

*Someone [asked on Server Fault](https://serverfault.com/q/357420):*

> I hope this is the correct section, this is my first time here, I have a question please.
> 
> I think that a lot of people are asking this question in this period.
> 
> We are managing a server of a game with a big exchange of data (minecraft) and we have to buy a new server, but we have to find where is the best way to mantain the map.
> 
> We have three option in Ubuntu enviroment, Ramdisk, SSD and SAS, do you know who will be the faster to mantain the map (1.9gb, but a lot of small files, huge transfer)?
> 
> I am not really an expert of this, so if I can I would like to add the link of the server that we would like to rent, so maybe you can be more precise, if I can put the link please tell me, I will delete it. [http://www.hetzner.de/en/hosting/produkte\_rootserver/ex4s](http://www.hetzner.de/en/hosting/produkte_rootserver/ex4s)
> 
> Thanks for your time and sorry about my bad english. Best Regards,
> 
> Paolo
> 
> P.s I don't know nothing more, so please explain everything :(.

*I posted the following answer, which was chosen as the accepted answer and received 6 upvotes:*

You will need to take into account the pro/con for each of the things you've listed.

## Ramdisk

Fastest option you listed, but it will still require a real HD to save data to. If the server goes off-line, anything on the RAMDISK will be lost unless it is persisted to long-term storage. Also requires a lot of memory on your server.

## SSD

Very fast, and good for tons of small IO. Very expensive and not much capacity.

## SAS (I assume you mean 10k/15k drives, not 7.2k NL-SAS)

Still pretty fast, comes in much larger sizes.

## What I would do

If it were me, I would start some monitoring, to see if disk IO is really a limiting factor, for a game server, my guess is that its CPU or network that is your limiting factor. If you find that disk IO is responsible, I would personally grab a pair of 15k SAS drives and run them in RAID-1 (or if money is no object, I'd get 4 or 8 and run them in RAID-10).

---
*Originally posted on [Server Fault](https://serverfault.com/a/357422) — 6 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
