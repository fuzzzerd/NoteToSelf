---
title: "How can I make a peer-to-peer multiplayer game?"
description: "My answer to \"How can I make a peer-to-peer multiplayer game?\" on Game Development"
date: 2010-09-16
author:
  name: Nate Bross
tags:
  - networking
  - multiplayer
  - peer-to-peer
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/3889"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/3887):*

> How can I make a p2p multiplayer game? I would like to have a server-less multiplayer game. But then, how all the clients know each other?
> 
> Why the p2p-protocol is so famous in file transfer but not in multiplayer games?

*I posted the following answer, which received 12 upvotes:*

There are many reasons p2p is not popular in games, mostly due to lag. Everyone is as slow as the slowest player. We're not talking about bandwidth here, but ping time.

p2p can transfer tons of data, but it does so with a quite high ping, games need to transmit very small amounts of data, with minimal ping time.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/3889) — 12 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
