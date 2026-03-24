---
title: "What do you use to support multiplayer turn-based network game for iOS and Android games?"
description: "My answer to \"What do you use to support multiplayer turn-based network game for iOS and Android games?\" on Game Development"
date: 2011-04-06
author:
  name: Nate Bross
tags:
  - android
  - networking
  - game-mechanics
  - ios
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/10694"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/10680):*

> If I'm doing a turn-based card game, what kind of technique do you use to support multiplayer gameplay over Internet?
> 
> Is it socket? If it's socket, which SDK (CoronaSDK etc.) can provide solid socket library?
> 
> Can Unity3D can be used solely to support what I need without using other socket servers like SmartFox or Electro?

*I posted the following answer, which received 5 upvotes:*

If your game is turn based, a combination of [long-polling](http://en.wikipedia.org/wiki/Push_technology) (read Push) and web services (SOAP or REST) should be more than sufficient for any turn-based game. They are simple to implement on a server and consume on a multitude of clients.

The advantage of using web services, are two fold. First, just about every platform worth its salt will have a mechanism to invoke web services natively without much ruckus. Second, is that adding additional platforms, or even letting web (desktop based browser) players play against anyone else, is easy since you're just passing messages back and forth over an HTTP connection.

In addition to that, since you're talking about Android and iOS -- where 3G connections are likely to occur, an HTTP web service wont completely die in a "flaky-connection" mode, where as pure TCP sockets would have issues staying connected.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/10694) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
