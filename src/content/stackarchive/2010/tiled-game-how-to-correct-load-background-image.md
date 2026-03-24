---
title: "Tiled game: how to correct load background image?"
description: "My answer to \"Tiled game: how to correct load background image?\" on Game Development"
date: 2010-11-03
author:
  name: Nate Bross
tags:
  - game-design
  - tiles
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/5162"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/5158):*

> i'm a newbie. I'm trying to develop a 2d game (top-down view). I would like to load a standard background, a textured ground... My "world" is big, for example 3000px X 3000px. I think it is not a good idea to load a 3000px x 3000px image and move it... So, how is the best practice ? To load a single small image (64x64) and repeat it for N times ? If yes, ok, but how i can manage the "background" movement ? Thanks Bye!

*I posted the following answer:*

I'd try to render images at the same size as the source image, so if that is truely the max size (and also the size of your .png or whatever) I'd render it as-is and be done with it (unless I saw noticable framerate drop by doing that).

If you do see performance problems, or you anticipate much larger imagery, you'd need to come up with a tiling scheme, which will determine which tiles of your map need to be on the screen and render them. One way to do it (maybe not the best) is to use a Tile class, then have an `array[x,y]` of tiles. Each Tile knows its realitive position on the screen and can react to user-input in order to move on the correct axis.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/5162) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
