---
title: "Browser based MMO"
description: "My answer to \"Browser based MMO\" on Game Development"
date: 2011-10-18
author:
  name: Nate Bross
tags:
  - mmo
  - client-server
  - browser-based-games
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/18676"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/18674):*

> We are a team of 4 trying to develop a browser based MMORPG. Its partially text based in a way like [Might and Magic](http://en.wikipedia.org/wiki/Might_and_Magic%3a_Heroes_Kingdoms). The world map would be in 3D and actions would be automatically resolved. The game involves a lot of exploring. We are mainly design students and don't have much of a technical background. So our first choice to develop this game was Unity3D. Would like some advice on creating browser based game and game engines that can handle server-client interactions. Also, our game is centered around players creating communities and groups. The game should allow players to do so. While this is not our primary concern now, I would simply like to get some direction in terms of creating a browser based MMORPG.
> 
> **Edit:** Sorry for asking such a broad question, I will try to ask more specific questions
> 
> 1.  What technology can I use to build the client? Will simple HTMl/JS will do? How would Java work? Can I use XNA also to deploy to the web using Silverlight?
>     
> 2.  On the server side, what kind of software should we be looking to use? Will a linux box with LAMP work well? If I am using Unity3D can I communicate to an SQL database?
>     
> 3.  What kind of bandwidth am I looking at for roughly 100 users? The server will have to synchronize player position, chat, and events like quest completion and skill unlocking.

*I posted the following answer, which received 8 upvotes:*

I assume since you're students, you are building this as a class project. Please let me first suggest that you scale back your ambitions. Making games is hard, making good games is harder still. I HIGHLY recommend that you and your team

1.  Greatly reduce your design. If you have a short timeframe and have to learn everything as you go, you will run into problems and it will be hard to get anything done.
2.  Think single player first. Making a multi-player game is tricky and will most likely require some programming to get working. In general multi-player must be thought of and designed for early on, but I recommend your first game be a single player one.
3.  Stay motivated and ask specific questions you have here when you get stuck. If you have a specific question and you show how you have tried to solve it on your own, its very likely someone on this site will be able to assist you.

The main point, is that multiplayer is hard to do, so I recommend you work on your game design skills in a single player environment. Then if you are wildly successful, maybe try adding multiplayer and/or start a new game with client/server architecture from the getgo.

<details>
<summary>Notable comments</summary>

**ultifinitus** (3 upvotes): This is a good point- High hopes are great, but unfortunately most large projects like this go unfinished. (maybe not most, but that's the trend I've seen)

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/18676) — 8 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
