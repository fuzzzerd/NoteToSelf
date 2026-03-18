---
title: "What is best way to create scrolling WORLD?"
description: "My answer to \"What is best way to create scrolling WORLD?\" on Stack Overflow"
date: 2011-07-25
author:
  name: Nate Bross
tags:
  - c#
  - xna
  - sprite
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6820010"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6819933):*

> In this game im trying to create, players are going to be able to go in all directions
> 
> I added one single image(1024x768 2d texture) as background, or terrain.
> 
> Now, when player moves around I want to display some stuff.
> 
> For example, lets say a lamp, when player moves enough, he will see lamp. if he goes back, lamp will disappear because it wont be anymore in screen
> 
> If Im unclear, think about mario. when you go further, coin-boxes will appear, if you go back they will disappear. but background will always stay same
> 
> I thought if I spawn ALL my sprites at screen, but in positions like 1599, 1422 it will be invisible because screen is only 1024x768, and when player moves, I will set place of that sprite to 1599-1,1422-1 and so. Is it a good way to do this ?
> 
> Are there better ways?

There are two ways you can achieve this result.

1.  Keep player and camera stationary, move everything else.
2.  Keep everything stationary except the player and the camera.

It sounds like you are trying to implement the first option. This is a fine solution, but it can become complicated quickly as the number of items grows. If you use a tile system, this can become much easier to manage. I recommend you look into using a tile engine of some sort. There are a lot of great tile map editors as well.

Some resources for using Tiles:

*   [Tiled](http://www.mapeditor.org/) -- Nice Map Editor
*   [TiledLib](http://tiledlib.codeplex.com/) -- XNA Library for using Tiled Maps

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6820010) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
