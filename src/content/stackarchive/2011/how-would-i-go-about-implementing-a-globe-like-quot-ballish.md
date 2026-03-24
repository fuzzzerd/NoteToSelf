---
title: "How would I go about implementing a globe-like &quot;ballish&quot; map?"
description: "My answer to \"How would I go about implementing a globe-like &quot;ballish&quot; map?\" on Game Development"
date: 2011-03-18
author:
  name: Nate Bross
tags:
  - xna
  - c#
  - graphics-programming
  - maps
  - heightmap
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9940"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9933):*

> I am new to 3D development and I have this idea of having the game world like our globe is - a ball. So, there would be no corners in the map and the game is top-down RTS game. I would like the camera to go on and on and never stop even though you are moving the camera to the same direction all the time.
> 
> I am not sure if this is even possible, but I would really like to build a globe-like map without borders. Can this be done, and how exactly? I am using XNA, C#, and DirectX. Any tutorials or links or help is greatly appreciated!

*I posted the following answer, which received 1 upvote:*

Might I ask, do you really need a globe? Is your world small enough that the curvature would be visible? Why not approximate the globe with a bunch of rectangles? It will make your life easier, and presuming your world is large enough and if implemented well, can give the illusion of a fully connected world to boot.

Think of some games which have large open worlds, for the most part, they consist of "zones" where each "zone" borders other "zones." There is typically ocean surrounding groups of these "zones" which the player cannot manually cross, but the player is free to walk from zone to zone without restriction. For example, think of WoW's two continents and the dividing ocean.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9940) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
