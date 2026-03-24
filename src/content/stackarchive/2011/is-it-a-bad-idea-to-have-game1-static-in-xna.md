---
title: "Is it a bad idea to have Game1 static in XNA?"
description: "My answer to \"Is it a bad idea to have Game1 static in XNA?\" on Game Development"
date: 2011-04-05
author:
  name: Nate Bross
tags:
  - xna
  - c#
  - architecture
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/10671"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/10660):*

> Is it a really bad idea to have my `Game1` class as static? As at the moment in my `Game1` class I have a class called `TileHandler` which handles everything to do with my current set of tiles, and `AnimalHandler` which handles all my animals (surprisingly).
> 
> Now if I am in `AnimalHandler` and want to check if a tile is walkable from `TileHandler` then that causes problems or I have to pass a list of walkable tiles into `AnimalHandler`, which I'd rather not do.
> 
> What would be easier would be to make `Game1` static and then in `AnimalHandler` just go `Game1._tileHandler.WalkableTile(position)`.
> 
> Now I can't see anything immediately wrong with this or anything that'd cause any problems but I've only just started using static classes, so does anyone more knowledgeable see any giant reason why that's a bad idea?

*I posted the following answer:*

The points raised here are all good. In my experience (which admitedly is weighted more toward business apps than games), there are great uses for static classes and members and I've used them many times. I have found, that as requirements and complexity grow, I end up recycling those static classes and converting them to instance classes and start passing them around.

The point I'd like to make is that, if using a static class helps you get **this** game out, go for it, but still do the right things: implement an interface or base class so it is easier to rip it out and convert it to an instance class later on.

An ounce of prevention is worth a pound of cure, so make sure your static class doesn't tie you down in away that makes it hard to change. It is pretty easy to refactor a method using a static class that implements an interface so it accepts a new interface parameter and uses that interface instead of the static class reference.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/10671) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
