---
title: "Suitable Client Server setup for Network Game testing"
description: "My answer to \"Suitable Client Server setup for Network Game testing\" on Game Development"
date: 2011-05-30
author:
  name: Nate Bross
tags:
  - java
  - networking
  - multiplayer
  - performance
  - testing
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/12918"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/12916):*

> I want to test my Client/Server game for which, currently, I am using localhost for both Client and Server.
> 
> Obviously I'm not getting any fluctuation in data and measure idea of performance, and in other parameters, what I wanted to ask how I would test a real world scenario:
> 
> if i create a little network with two computers or
> 
> if check that on LAN on which i am or
> 
> **Are these cases (localhost included) equivalent?**
> 
> or do I really need to test my game on different LANs to have reliable and realistic testing data?
> 
> **How these different network setups influence the testing process?**
> 
> Can somebody please suggest methods for testing the effect of network latency and packet loss on my game?
> 
> **which above setup will give me more up and downs in number with LEAST setup/implementing efforts.**
> 
> The game is supposed to be played on a LAN but it IS capable of more.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

Its hard to tell exactly what you're asking, but there's my thoughts.

When testing networking code, its perfectly acceptable to use `localhost` for both client and server to get it working, because its quick to debug and you can easily debug both client and server. It is important to note, that this is NOT sufficient for testing and final development.

In order for your testing to have maximum impact, you must test as many situations as you can. The minimum you can get away with are (IMO) these:

1.  One client and server on same computer
2.  One client and server on the same SUBNET
3.  One client and server on the same SUBNET with additional players from other SUBNETS (Internet, etc) connecting to server via NAT
4.  Server on the Internet and multiple additional Internet clients connected

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Nothing is comparable to doing both client and server on localhost, because that is a perfect networking case. In the real world, that never happens. Testing on two different computers, connected by any network (even on the same LAN) is a similar topology to anything else you'll see. Just know that depending on setup, you'll see a wider range of packet loss and latency.

**Nate** (0 upvotes): It is better than nothing. Your two computers on a single LAN is probably sufficient; you'll just need to know what depending on the network topology at your deployment site, you may see higher latency and higher packet loss.

**Nate** (0 upvotes): Those IPs are routable, so in my mind, that is the Internet. What I mean. The information that you get from test #4 is that you know your application will work when its being routed. This is typically the weak link in networking code because it introduces more packet loss and latency.

**Nate** (0 upvotes): If I could only chose a single scenario to test, it would be #4. Because it will cover the most bases. You will need at least two computers to test this in an accurate to the real world way.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/12918) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
