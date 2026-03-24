---
title: "Which network engine/library/system to use in a .NET turn-based game?"
description: "My answer to \"Which network engine/library/system to use in a .NET turn-based game?\" on Game Development"
date: 2010-09-19
author:
  name: Nate Bross
tags:
  - c#
  - networking
  - turn-based
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/3960"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/3948):*

> I'm developing an [abstract strategy](http://en.wikipedia.org/wiki/Abstract_strategy_game) turn-based game in C#.
> 
> Being so, high network load is not expected. The players don't even have to be connected all the time. The host could wait for the current player to connect and make his move. I know I could make a web site to run that, but I want anyone to be able to host their own games.
> 
> I need something reliable and that enables me to have good productivity.
> 
> I'm already underway with [WCF](http://en.wikipedia.org/wiki/Windows_Communication_Foundation). Was that a good choice? Which other network framework should I consider?

*I posted the following answer, which received 1 upvote:*

If you are simply passing "turn" changes back and forth then you are on the best path. WCF will allow you the greatest flexibility without adding very much to your development efforts, especially if you already know .NET.

Since it seems that latency is not an issue in your game, WCF is a great choice, because it will abstract away all of the message encoding from you, and since you don't need to eek out every last bit of performance, this abstraction should be more benificial to you than harmful.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/3960) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
