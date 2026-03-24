---
title: "How can I make a collection of mini-games in XNA where the user can download packs of minigames and the main .exe can run them without being altered?"
description: "My answer to \"How can I make a collection of mini-games in XNA where the user can download packs of minigames and the main .exe can run them without being altered?\" on Game Development"
date: 2011-01-28
author:
  name: Nate Bross
tags:
  - xna
  - c#
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/7788"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/4960):*

> I'm currently making a PC game in XNA. It's actually a collection of mini-games (there's 3 mini-games at the moment) however I plan to make and add more, in downloadable 'packs'.
> 
> My question is, what's the best way to achieve this?
> 
> Currently my thoughts are:
> 
> *   Create a 'game' interface
> *   Build games to this interface but create them as .dlls
> *   Have the main .exe file scan a directory and load in the .dlls at runtime.
> 
> I've not messed around with the idea much, but I know there are applications at-least that use this plug-in approach (Notepad++ seems to), but I'm not sure of any games that do (although I'm sure they must exist). However it seems that this is a problem that has been solved previously, so I'm wondering if there's any form of established best-practice.

*I posted the following answer, which received 1 upvote:*

Since you're building a game for Windows, you can access the full framework as @Ranieri stated. Your architecture sounds solid; however, you might want to check into [MEF](http://msdn.microsoft.com/en-us/magazine/ee291628.aspx), the Managed Extensibility Framework. It might make that workflow you outline more streamlined. I haven't used it myself, but I've read good things about it.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/7788) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
