---
title: "MMO architecture - Highly Scalable with Reporting capabilities"
description: "My answer to \"MMO architecture - Highly Scalable with Reporting capabilities\" on Game Development"
date: 2011-07-06
author:
  name: Nate Bross
tags:
  - architecture
  - networking
  - mmo
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/14550"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/14494):*

> A friend of mine is asking me to help out on a project of his, I have done a small amount of game development before, but mainly do application and enterprise development these days.
> 
> He is asking me to look into some of the networking part of his game. I know that a huge part of this is going to involve reporting/analytics as well as scalability, so it isnt as simple as spamming a server and instantly getting responses.
> 
> In the enterprise app/web world we tend to use [CQRS](http://abdullin.com/cqrs/) pattern or some other similar approach when we need to scale quite well and also take into account reporting on interactions etc.
> 
> So I imagine that most typical MMO style games (lets assume mmorpg games akin to WoW), they must employ a heavily distributed and scaleable system. So do they end up using a node system with a messaging fabric behind the scenes?
> 
> Sorry for being a bit vague but are there any sort of articles on people discussing the overall architecture for these style games?

*I posted the following answer, which received 1 upvote:*

There are two types of MMO games. There are real-time games, along the lines of Eve and World of Warcraft, then there is everything else. Farmville, Mafiawars, etc. They both dictate totally different backend architectures.

For games like Farmville, your standard line-of-business type architecture will really excel, because the way users interact with the data is very similar and the data can easily be stored in a traditional Relational Database System.

Games that require real-time interaction between hundreds or thousands of players simply cannot be shoehorned into the line-of-business architecture. As @Patrick points out, many of the supporting elements of the game such as logging, authorization and authentication can be handled in a similar fashion to line-of-business applications. The tricky part, is handling "the world." This is where there really is no "right way" it all depends on how many players you expect to have, and what type of resources (programming and hardware) you are willing to throw at it.

I would argue, that you can start with a typical dedicated server setup for an FPS, and optimize from there where you start to see issues. Probably the first thing to implement is a way to have multiple of these "servers" talking to each other. Obviously you'll want to run this on a beefy physical box with plenty of bandwidth. IMO, the reason that many FPS games keep server size small, is because they know people are going to run it on some old P4 they have lying around and they'll do it on a crappy DLS connection, not because the server software cannot keep track of hundreds of players. Though I'd bet that typical "level size" is also a reason to keep the max players lower on FPS games.

The reality is that you will not have the same amount of players that World of Warcraft or Eve have overnight, and if you ever do approach those numbers where your architecture startes to show its weaknesses, I always say, that is a great problem to have because it means you're raking in the cash.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, some type of message system is required for serving the world with mroe than one node; however, at some point, the "world" must be serialized to disk in the event of a system crash. The frequency of this can vary, but it is off this database that I would build front-end facing web apps.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/14550) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
