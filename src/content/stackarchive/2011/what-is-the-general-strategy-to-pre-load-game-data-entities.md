---
title: "What is the general strategy to pre-load game data(entities/map)"
description: "My answer to \"What is the general strategy to pre-load game data(entities/map)\" on Game Development"
date: 2011-03-18
author:
  name: Nate Bross
tags:
  - loading
  - maps
  - data
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9918"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9916):*

> I'm new to games programming and am wondering what tactics games use to pre-load entity and map data. Will a game initialise with the fundamental map data stored in memory?

*I posted the following answer, which received 4 upvotes:*

I'd say this really depends on what type of game you're making, but some general points.

1.  Only load what you absolutly know you need immediatly, or you know you'll need soon
2.  Only remove things from memory when you absolutly know you wont need them again AND you need to load something that fits the constraints of #1 AND you've reached your memory limit
3.  A general understanding of Paging and Virtual Memory of Operating Systems can be applied to games in terms of when to remove data from memory -- that is to say, those ideas can be applied to game systems because many games have "OS like" requirements (fast, direct access to memory, input, and network devices)

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9918) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
