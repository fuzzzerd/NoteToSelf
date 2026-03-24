---
title: "Drawing territories border in 2d map"
description: "My answer to \"Drawing territories border in 2d map\" on Game Development"
date: 2011-03-09
author:
  name: Nate Bross
tags:
  - 2d
  - rendering
  - maps
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9553"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9551):*

> I'm programming a little web strategy game. In the country map I pretend to display each country with a national color. The issue is how to render the borders in a simple and efficient way. Right now I'm planning to set a field to each tile called "border" with values from 0 to 8. The algorithm would check for EVERY tile is its adjacent has a different "owner". If the tile is inside the territory, the border value would be 0, because would not have adjacent any tile with different owner, if not, would vary between 1 (north) clockwise to 9 (north-west) and then draw the border.
> 
> I find this simple but too processor-intensive. Are there any other "pro" choices to render territories borders?

*I posted the following answer:*

In your map, why not just have an attribute on each tile indicating if it is a border (and if so, what edge and what color)? The benefit is that it will use less processor cycles, the drawback is that you must know at design time where the borders are.

Unless you are procedurally generating your maps, this should be an easy thing to setup. Even if you are generating the map procedurally, you only need to run the processor intensive step of calculating borders one time, at design time, not every frame.

If knowing at design time is not an option, you could similarly add the attributes to your tiles; and only calculate them once, upon loading the map data. That doesn't resolve the processor intensive task, but it does keep it to a minimum.

In terms of the algorithm you are using, there may be more optimized way to do it, but if you can avoid making those optimizations by moving when/where the algorithm is run, I'd do that first.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9553) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
