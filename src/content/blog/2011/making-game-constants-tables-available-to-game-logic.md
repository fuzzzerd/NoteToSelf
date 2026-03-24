---
title: "Making game constants/tables available to game logic classes/routines in a modular manner"
description: "My answer to \"Making game constants/tables available to game logic classes/routines in a modular manner\" on Game Development"
date: 2011-03-15
author:
  name: Nate Bross
tags:
  - software-engineering
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9807"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9781):*

> Suppose I have a game where there are several predefined constants and charts (a XP chart, cost of goods and so on). Those could be defined at runtime, or load from files at start-up. The question is how should those logic routines access the constants and charts?
> 
> For example, I could try using global variables, but that cause all classes relying on the variables to be tightly coupled with them.

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

It really depends upon what type (and quantity/size) of data you're talking about. If it is a small bit of data that can be safely kept in memory for the duration of execution, something like a static class would be my recommendation.

```
public static class Constants
{
    public static int[] Levels = { 0, 100, 200, 400, 800, 1600, 3200, 6400 }
}

```

This way, the experience required to get to Level X is `Constatns.Levels[X - 1];` and accessing other data is easy as well, if you need a collection of Items, you can add it here too, if your Items data is too large to store in memory, you can also implement caching logic within the static class.

Making it static keeps a single copy in memory, and ensures that every client of this class is getting the same data.

While this does "tightly couple" your classes together, tight coupling is not a bad thing if the design really needs it, which in the case of Item stats and XP charts, it is, IMHO, reasonable to tightly couple these. I always try to keep it simple, until something forces it to be complicated.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9807) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
