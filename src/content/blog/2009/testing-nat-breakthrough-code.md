---
title: "Testing NAT Breakthrough Code"
description: "My answer to \"Testing NAT Breakthrough Code\" on Stack Overflow"
date: 2009-10-27
author:
  name: Nate Bross
tags:
  - c#
  - network-programming
  - nat
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1631119"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1626280):*

> I am very interested in at least trying to implement NAT break through for my senior project. (I am doing a networking API). It's not even a requirement of my project, just a interest of mine. I know the basics of how it works, correct me if I'm wrong: Two clients connect to a server that isn't behind a NAT and this server, knowing the IP of these two clients, tell the clients to connect to each other at the same time. Thus the "Breakthrough".
> 
> This seems not terribly easy or terribly hard to code. However, the part I'm stuck at is the testing of this. Is there a reasonable setup I can do with just one router/one NAT and my three available computers?
> 
> Thanks for any advice!

In terms of code/theory on NAT breaking, I cannot offer advice, but I can make some suggestions on setting up a test environment.

You can download a copy of [m0n0wall](http://m0n0.ch/wall/) and run it inside of a Virtual PC image (both free). This will give you a second router w/out purchasing any additional hardware. With this extra router, you can create a seperate subnet for your two clients.

Another, easier to grasp option is simply to pickup a second router, you can get a good one pretty cheap.

Then setup your existing router and server as they are now, a 192.168.1.x /24 subnet; then setup your second router (m0n0wall/hardware router) as 192.168.2.x /24 subnet, and plug the second router's "internet" port into one of the "PC" ports on your first router. Then plug both clients into the second router.

(I realize thats a bit confusing, comment if you cannot follow what I mean)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1631119) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
