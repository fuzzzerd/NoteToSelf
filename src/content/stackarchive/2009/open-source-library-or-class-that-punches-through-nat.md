---
title: "Open source library or class that punches through NAT/Firewalls for P2P data transfer"
description: "A question I asked on Stack Overflow"
date: 2009-10-28
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - network-programming
  - sockets
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1639375"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1639375):*

I'm looking for some C#/.NET library that I can use to do some NAT-Punching for multi-player game development. Using a central server to establish initial connection is OK, but ideally connections would drop into p2p mode after initial communication with server.

---

> [Julio C&#233;sar answered](https://stackoverflow.com/a/1640200) (2 upvotes):
>
> If you are working with P2P data transfer in .NET please take a look at [Mono Torrent](http://projects.qnetp.net/projects/show/monotorrent) that's an open source implementation of the BitTorrent protocol.
> 
> You can either embed the whole Mono Torrent library and use BitTorrent as your underlying protocol or take the relevant parts of it for your own project. The library has a very liberal license (MIT/X11) that allows embedding.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1639375) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
