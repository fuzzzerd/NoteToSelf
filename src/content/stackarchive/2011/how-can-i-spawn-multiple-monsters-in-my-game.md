---
title: "How can I spawn multiple monsters in my game?"
description: "My answer to \"How can I spawn multiple monsters in my game?\" on Game Development"
date: 2011-09-16
author:
  name: Nate Bross
tags:
  - 2d
  - iphone
  - game-mechanics
  - objective-c
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/17393"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/17383):*

> I made a little iPhone game in which I want to make multiple monsters spawn.
> 
> I have one UIImageView called `enemy` that spawns at beginning of the game. But I want it to spawn many more monsters until I say it needs to stop spawning them.
> 
> I know how to get random locations. This question is a follow up to [this one.](https://gamedev.stackexchange.com/questions/17381/how-can-i-spawn-monsters-at-random-locations)

*I posted the following answer, which received 1 upvote:*

You need to have a collection of monsters and a MAX\_MONSTERS constant. I'm not much of an Objective-C programmer, but this pseudo-code should get you going:

```
.. top of program
MAX_MONSTERS = 5;
MonsterCollection[MAX_MONSTERS] mc;

... game loop
for(int i = 0; i < MAX_MONSTERS; i++)
    if(mc[i] != null && mc[i].IsAlive) 
        mc[i].Update();
    else
        mc[i] = // new monster

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You can use an array, to declare one time, that you want a variable number of monsters. Otherwise you'll need to declare n different `UIImageView` objects, where n is the number of monsters you want.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/17393) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
