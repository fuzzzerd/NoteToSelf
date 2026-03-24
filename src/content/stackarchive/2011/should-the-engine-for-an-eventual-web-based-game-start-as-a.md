---
title: "Should the engine for an eventual web-based game start as a web-service?"
description: "My answer to \"Should the engine for an eventual web-based game start as a web-service?\" on Game Development"
date: 2011-07-15
author:
  name: Nate Bross
tags:
  - architecture
  - web
  - client-server
  - planning
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/14885"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/14884):*

> I've recently decided to start writing an engine for a card game. I'm not a big "cards" player, but a friend introduced me to the game (it's a spin on the game Danish), and I fell in love.
> 
> I want to develop the game in 3 segments:
> 
> 1.  The basic engine, handles cards/decks/gamestate, etc.
> 2.  A user interface (in the form of a mobile/desktop web app.)
> 3.  An artificial intelligence with various strategies/difficulties, etc.
> 
> These are very distinct projects, in my mind... and I'm struggling with seeing how they'll all fit together in the long run. At first, I don't even want to be able to "play" the game using the engine. The engine will primarily be tested by its unit tests. Play testing won't start until a client exists. So there's something of a client-server relationship here.
> 
> The engine is a very large piece of the puzzle. What I'd like to know is: how would you go about developing the "public API" for this engine?
> 
> I was thinking the engine could be a very basic web service, that returns its state via queries to a RESTful API, but I'm worried that developing the engine itself as a web app may lead to poor programming decisions. (For instance, if I chose an MVC micro-framework, well, this API wouldn't really have views... it's just returning serialized objects via JSON, or something to that effect. Is it bad to use MVC for a service like this? )
> 
> My other idea was that the engine would just be a console app, and I would later write a bridge of some kind to pipe data between it and the web-app. (The bridge could really be anything. I mean, the web server and the game engine could both idle in an IRC server and share their state in channels.)
> 
> What approach would you take (develop as a web service, or develop as a standalone app and bridge it later), and why?
> 
> Thanks, Robbie.
> 
> EDIT: So I guess this belongs in Game Development. To clarify, I'm going to write a card game engine. I'm trying to figure out the best way to expose the engine's API so it can be integrated _in the future_ with a web client, and an AI client.
> 
> I didn't even have an account here, so howdy :)

*I posted the following answer, which received 5 upvotes:*

The web service route is probably the best and most scalable.

I also see absolutely **NO** problem using an MVC framework to return JSON (asp.net mvc is great at this). If your controllers only return JSON at first that is fine, you can unit test without any views. When you are ready to add your game interface, you can add views. If their plain html/css or flash/silverlight, it doesn't matter because, as you've stated, you have already built the underlying engine.

I'm not sure what your development or hosting environments look like but I would not over engineer it. A simple set of php files that return JSON may be all you need. I am not familiar with the game you're building, so I am not sure how complex it will be.

In my opinion, if you're new to game development, and you're going it yourself, I highly recommend that you get something that is playable as soon as possible, because it will help keep you motivated to complete the game and polish it to a good level.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): That sounds like a good plan to me. If the code will keep you interested, I say go for it.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/14885) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
