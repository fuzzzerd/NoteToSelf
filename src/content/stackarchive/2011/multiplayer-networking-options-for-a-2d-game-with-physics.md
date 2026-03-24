---
title: "Multiplayer / Networking options for a 2D game with physics"
description: "My answer to \"Multiplayer / Networking options for a 2D game with physics\" on Game Development"
date: 2011-03-15
author:
  name: Nate Bross
tags:
  - game-design
  - networking
  - multiplayer
  - design-patterns
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9809"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9101):*

> **Summary:**
> 
> My 50% finished 2D sidescroller with Box2D as physics engine should have multiplayer support in the final version. However, the current code is just a singleplayer game.
> 
> *   What should I do now?
> *   And more important, how should I implement multiplayer and combine it with singleplayer?
> *   Is it a bad idea to code the singleplayer mode separated from multiplayer mode (like Notch did it with Minecraft)?
> 
> The performance in singleplayer should be as good as possible (Simulating physics with using a loopback server to implement singleplayer mode would be a problem there)
> 
> **Full background / questions:**
> 
> I'm working on a relatively large 2D game project in C++, with physics as a core element of it. (I use Box2D for that)
> 
> The finished game should have full multiplayer support, however I made the mistake that I didn't plan the networking part properly and basically worked on a singleplayer game until now.
> 
> I thought that multiplayer support could be added to the almost finished singleplayer game in a relatively easy and clear way, but apparently, from what I have read this is wrong.
> 
> I even read that a multiplayer game should be programmed as one from the beginning, with the singleplayer mode actually just consisting of hosting an invisible local server and connecting to it via loopback. (I found out that most FPS game engines do it that way, an example would be Source)
> 
> So here I am, with my half finished 2D sidescroller game, and I don't really know how to go on.
> 
> Simply continueing to work on the singleplayer / client seems useless to me now, as I'd have to recode and refactor even more later.
> 
> First, a general question to anybody who possibly found himself in a situation like this:
> 
> *   How should I proceed?
> 
> Then, the more specific one - I have been trying to find out how I can approach the networking part for my game:
> 
> **(Possible solutions:)**
> 
> *   Invisible / loopback server for singleplayer
> 
> This would have the advantage that there basically is no difference between singleplayer and multiplayer mode. Not much additional code would be needed.
> 
> A big disadvantage: Performance and other limitations in singleplayer. There would be two physics simulations running. One for the client and one for the loopback server.
> 
> Even if you work around by providing a direct path for the data from the loopback server, through direct communcation by the threads for example, the singleplayer would be limited.
> 
> This is a problem because people should be allowed to play around with masses of objects at once.
> 
> *   Separated singleplayer / Multiplayer mode
> 
> There would be no server involved in singleplayer mode.
> 
> I'm not really sure how this would work. But at least I think that there would be a lot of additional work, because all of the singleplayer features would have to be re-implemented or glued to multiplayer mode.
> 
> *   Multiplayer mode as a module for singleplayer
> 
> This is merely a quick thought I had. Multiplayer could consist of a singleplayer game, with an additional networking module loaded and connected to a server, which sends and receives data and updates the singleplayer world.
> 
> In the retrospective, I regret not having planned the multiplayer mode earlier. I'm really stuck at this point and I hope that somebody here is able to help me!

*I posted the following answer, which received 1 upvote:*

I think that the positives of a local loop back server, far out weigh the negatives. The amount of code reduction is extremely valuable, in my opinion.

With regard to running redundant physics simulations, you should look into server ticks, Valve has a great writeup on it [here](http://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking). In a local server environment, you maybe able to remove the "client simulation" and simply send full-world updates, in a local-only situation to avoid the redundant physics simulations since you'll have plenty of bandwidth.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9809) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
