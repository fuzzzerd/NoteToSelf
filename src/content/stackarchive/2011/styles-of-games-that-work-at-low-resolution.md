---
title: "Styles of games that work at low-resolution"
description: "My answer to \"Styles of games that work at low-resolution\" on Game Development"
date: 2011-02-05
author:
  name: Nate Bross
tags:
  - game-design
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/8157"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/8155):*

> I'm taking a class on compilers, and the goal is to write a compiler for [Meggy Jr devices](http://www.evilmadscientist.com/article.php/meggyjr) (Arduino). The goal is just to make a simple compilers with loops and variables and stuff.
> 
> Obviously, that's lame, so the "real goal" is to make an impressive game on the device. The problem is that it only has 64 pixels to work with (technically 72, but the top 8 are single-color and not part of the main display, so they're really only useful for displaying things like money).
> 
> My problem is thinking of something to do on a device that small. It doesn't really matter if it's original, but it can't be something that's already available. My first idea was "snake", but that comes with the SDK. Same with a side-scrolling shooter.
> 
> Remaining ideas include a tower defense game (hard to write, hard to control), an RPG (same), tetris (lame)..
> 
> The problem is that all of the games I like require a high-resolution screen because they have a lot of text. Even a really simple game like nethack would be hard because each creature would be a single color.
> 
> tl;dr What styles of games require a. No text; and b. Few enough objects that representing them each with a single color is acceptable?
> 
> EDIT: To clarify, the display is 8x8 for a total of 64 pixels, not 64x64.

*I posted the following answer, which received 6 upvotes:*

You could write something akin to a tomagatchi or other virtual pet. The original ones were done on very low resolution screens.

Pong is another game that comes to mind for a low resolution display. While it may seem basic, it covers most of the important bits in many games: collisions, physics (albeit simple), game-loop, etc. On such a limited platform, you may be forced to "roll your own" for many of those tasks which may take up more time that you anticipated.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/8157) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
