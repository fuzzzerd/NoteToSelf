---
title: "How do they keep track of the NPCs in Left 4 Dead?"
description: "My answer to \"How do they keep track of the NPCs in Left 4 Dead?\" on Game Development"
date: 2011-02-16
author:
  name: Nate Bross
tags:
  - game-design
  - ai
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/8666"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/8663):*

> How do they keep track of the NPC zombies in Left 4 Dead?
> 
> I am talking about the NPCs that just walk into walls or wander around aimlessly. Even though the players cannot see them, they are there (say inside rooms or behind doors). Let's say there's about 10 or so zombies in a hallway and inside rooms. Does the game keep all of those zombies in a list and iterate through giving them commands? Do they just spawn when the user is within a certain radius or reached a special location?
> 
> Say you placed the 4 units (controlled by players) on completely different places throughout the map. Let's assume you aren't being swarmed and then you have not killed any of these aimless NPCs. Would the game be keeping track of 10 x 4 = 40 zombies in total?
> 
> Or is my understanding completely off?
> 
> The reason I ask is if I were to implement something similar on a mobile device, keeping track of 40 or more NPCs might not be such a great idea.

*I posted the following answer, which received 1 upvote:*

I can't speak to how the Left 4 Dead implementation works, but I can say how I'd probably do it.

I'd go for something like your second option, track each player and only load NPCs when players move past trigger points. The key in a system like this, is to make the trigger points far enough away from the player that they are unable to associate that `walking past this fence post` triggers `that car to blow up, and shoot a zombie at them.`

I would probably have an active NPC collection, which the trigger points either add or remove NPCs from the collection. This allows you to spend CPU/GPU resources on NPCs that players are actually interacting with, but it gives you the flexibility to load NPCs at any time.

Think about a boss who can hear sounds, maybe the boss is loaded at the start of the map and if the player going through the map makes lots of noise (grenades, pipe bombs, etc), the boss will seek out the player and attack out of the blue, instead of waiting till the player reaches the boss arena.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/8666) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
