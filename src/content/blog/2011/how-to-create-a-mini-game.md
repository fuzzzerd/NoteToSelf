---
title: "How to create a mini-game?"
description: "My answer to \"How to create a mini-game?\" on Game Development"
date: 2011-01-21
author:
  name: Nate Bross
tags:
  - xna
  - directx
  - unity
  - unreal
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/7580"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/7576):*

> I am wondering how to creat a mini-game like "Diner Dash" or like "Big Fish Games". I want my game to be 2d, but it looks like 3d: see this image. [http://www.topxgames.com/bigfish/diner-dash-flo-through-time/screen1.jpg](http://www.topxgames.com/bigfish/diner-dash-flo-through-time/screen1.jpg) Also, if you know some good game-engine to create games like those then thanks a lot in advance.

*I posted the following answer, which was chosen as the accepted answer and received 7 upvotes:*

I'm assuming that you are confusing the term "[mini-game](http://en.wikipedia.org/wiki/Minigame)" with "[casual game](http://en.wikipedia.org/wiki/Casual_game)." I'm going to attempt to answer you with the assumption that you are talking about creating a casual game, which is still a very broad question, but I'll try to give it a stab from a high-level; however, if you really do have a full game and are just looking to add mini-games to it, I don't know what I can offer to guide you there.

Some key concepts for casual games, are (all my opinion):

*   **Quick to play**, that is to say your game should have gameplay that is very simple to pick up and just play. You shouldn't have a "tutorial mode" or any of that, it should be so simple anyone can figure it out.
*   By extension of quick to play, most popular casual games have gameplay that is on the shorter end of the spectrum, 30-90 seconds is common.
*   Progress after a gameplay period should be saved.

I can only speak for myself, but [XNA](http://msdn.microsoft.com/en-us/aa937791.aspx) has a very low cost of entry, the learning curve is small if you already are familiar with C++ and/or Java. It also lets you deploy your game to Xbox, Windows Phone, and PC.

As @Spooks said, 2D games that appear to be 3D are frequently called [2.5D](http://en.wikipedia.org/wiki/2.5D) or pseudo-3D. And is typically done with 2D sprites that appear to be 3D.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/7580) — 7 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
