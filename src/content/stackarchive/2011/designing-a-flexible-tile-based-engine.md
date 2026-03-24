---
title: "Designing a flexible tile-based engine"
description: "My answer to \"Designing a flexible tile-based engine\" on Game Development"
date: 2011-03-07
author:
  name: Nate Bross
tags:
  - c#
  - 2d
  - performance
  - tiles
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9416"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9403):*

> I'm trying to create a flexible tile-based game engine to make all sorts of non-realtime puzzle games, just as Bejeweled, Civilization, Sokoban, and so on.
> 
> The first approach I had was to have a 2D array of Tile objects, and then have classes inheriting from Tile that represented the game objects. Unfortunately that way I couldn't stack more game elements on the same Tile without having a 3D array.
> 
> Then I did something different: I still had the 2D array of Tile objects, but every Tile object contained a List where I put and different entities. This worked fine until 20 minutes ago, when I realized that it's too expensive to do many things, look at this example:
> 
> I have a Wall entity. Every update I have to check the 8 adjacent Tiles, then check all of the entities in the Tile's List, check if any of those entities is a Wall, then finally draw the correct sprite. (This is done to draw walls that are next to each other seamlessly)
> 
> The only solution I see now is having a 3D array, with many layers, that could suit every situation. But that way I can't stack two entities that share the same layer on the same tile. Whenever I want to do that I have to create a new layer.
> 
> Is there a better solution? What would you do?

*I posted the following answer:*

I agree with @Omnion. Use the list approach, but keep it sorted if performance is a problem. That is to say use a hybrid approach. Use the list as your third dimension , but only identify the first 5 items as a specific type, and anything after that is an ink own type, or a type that won't require checking multiple times per frame.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9416) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
