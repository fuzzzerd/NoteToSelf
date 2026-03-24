---
title: "Sprite sheet or multiple resources"
description: "My answer to \"Sprite sheet or multiple resources\" on Game Development"
date: 2011-03-30
author:
  name: Nate Bross
tags:
  - android
  - animation
  - sprites
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/10419"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/10417):*

> When animating for the Android platform is it a better practice to create a sprite sheet with multiple states for each sprite on a single picture or should I instead export individual images for each character/state/etc.? Which option gives me a smaller file size for resources and which is easier for the programmer to animate?

*I posted the following answer, which was chosen as the accepted answer and received 4 upvotes:*

It depends how many you have and how many of those would be in use at any given time.

I would break it down as follows:

For each "sprite" I would have one sheet, each WxH section is a single frame. If there are only a few states, I'd keep those all in the same image file, and just make a map of

1.  Walking is sprites 0-9
2.  Jumping is 10-15
3.  Crouching is 15-20

If you have many states per sprite, I would consider breaking up each state animation into its own file.

If you only have a few sprites and a few states, it might be best to simply have it all on a single image file, and use the maping I have above, but include it per sprite. This will keep the amount of memory usage to a minimum, since you're targeting android, memory is a premium resource and should be conserved where possible.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/10419) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
