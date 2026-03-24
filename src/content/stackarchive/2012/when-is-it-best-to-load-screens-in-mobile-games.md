---
title: "When is it best to load screens in mobile games?"
description: "My answer to \"When is it best to load screens in mobile games?\" on Game Development"
date: 2012-03-23
author:
  name: Nate Bross
tags:
  - android
  - performance
  - libgdx
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/26071"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/26069):*

> In the develpment of a mobile game, is it a good to load all the screens at the start of the game, or destroy and create new ones during the game? I am doing the second thing, because I suppose that the first one consumes a lot of memory, what's recommended?

*I posted the following answer, which received 3 upvotes:*

This totally depends on the nature of your game, and how much data is actually on each screen. My approach to this would be as follows: _avoid premature optimization_. With that said, let me elaborate a little, and explain how I've managed this in some of the games I've written for mobile devices.

I typically load textures as they are needed, because most (if not all) mobile devices have very limited memory. In order to keep performance high, I try to keep these textures around as long as possible, if there is a reasonable chance I'll need it again. A quick example:

I have a texture that is my pause screen. It has some button looking things, that have hotspots around these "buttons" and a few blank areas where I draw text. The first time the pause action is invoked, I pull up the texture and draw it, then when they resume I keep it around, in the event that they pause again. Now, if memory became an issue in this game, I'd ditch the pause menu texture when they resume, so far, its not been a problem.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/26071) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
