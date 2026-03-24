---
title: "Runtime Storage vs Static Storage"
description: "My answer to \"Runtime Storage vs Static Storage\" on Game Development"
date: 2010-10-28
author:
  name: Nate Bross
tags:
  - gui
  - file
  - xml
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/4935"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/4929):*

> **Runtime Storage (hardcoded) vs Static Storage (file storage)**
> 
> > _(original question)_
> > 
> > I extended my engines GUI from procedural style to object orientated style, but I still have to create menues, buttons etc. So I got the choice to create each menue via a class or have a static main class which loads menues from a XML file. My problem is that I actually like to have static and external storage in XML because it keeps the code and the project clean. But if a GUI Object is created e.g. a button I want to have delegates/callbacks/events on it, but I think that isn't possible with loading and creating GUI Objects by XML files that only contain ints and strings.
> 
> The question is when do you hardcode parts of your game and when do you store them locally.
> 
> **Runtime Storage**
> 
> \+ You safe time while you do not have to write a parser or something similar.
> 
> \- You lose a lot of flexibility in late development
> 
> **Static Storage**
> 
> \+ You gain a lot of flexibility in the late development
> 
> \- You spent a lot of time into a system to read and write, and also handle the storage

*I posted the following answer, which received 3 upvotes:*

My rule of thumb is that if it has double quotes around it, it should probably be in an XML configuration file, unless the double quotes are being used to index into a configuration file.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/4935) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
