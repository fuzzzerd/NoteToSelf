---
title: "jquery ondrag map load only what has not been viewed"
description: "My answer to \"jquery ondrag map load only what has not been viewed\" on Game Development"
date: 2010-12-06
author:
  name: Nate Bross
tags:
  - javascript
  - maps
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/6252"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/5362):*

> When a person mouse down, moves the mouse, and mouses up the system gets the different in the mouse down coord and the mouse up coords and loads in the new map items. However, the problem is it loads them every time so I want a way to track what has been loaded without too much work on checking or storing checks.
> 
> *   Most promising. Came up with while typing this. Section the screen into 250x250 sectors and check if that sector has been loaded.
>     
> *   Keep track of each corner of the screen and see if there is an area of those that have not loaded.
>     
> *   Keep a record of the corners of the screen. When mouse up coords are greater then load the different. Problem is if they are at coord 10,000 then it will load from -10k to 10k positive and that is a lot of items to load.
>     
> *   Check every item on the page to see if it is loaded. If I do this I might as well reload the whole page.
>     
> 
> If anyone has some suggestions; feel free to pass them on.

*I posted the following answer:*

Unless I misunderstand your question, I would expect what you describe to be desired behavior. It seems to me, like you are streaming the mapping data as the user pans around the map. As soon as it's off the screen, I would unload those resources and then load up resources for the newly visible sections.

If you don't unload resources as the user pans around, eventually, the user will have the entire map loaded into memory, and this would defeat the purpos of streaming data to the user in the first place.

If the actual streaming of the map is what's got you stumped, I think your first approach is best. Put the map into sections (usually called Tiles) as the user pans around, determine which tiles should be loaded and unloaded, then render all of the loaded tiles.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/6252) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
