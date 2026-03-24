---
title: "Factors to consider when building an algorithm for gun recoil"
description: "A question I asked on Game Development"
date: 2011-01-11
author:
  name: Nate Bross
tags:
  - game-design
  - algorithm
  - playtesting
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/q/7276"
---

*I [asked this on Game Development](https://gamedev.stackexchange.com/q/7276):*

What would be a good algorithm for calculating the recoil of a shooting guns cross-hairs?

What I've got now, is something like this:

1.  Define min/max recoil based on weapon size
2.  Generate random number of "delta" movement
3.  Apply random value to X, Y, or both of cross-hairs (only "up" on the Y axis)
4.  Multiply new delta based on time from the previous shot (more recoil for full-auto)

What I'm worried about is that this feels rather predicable, what other factors should one take into account when building recoil? While I'd like it to be somewhat predictable, I'd also like to keep players on their toes. I'm thinking about increasing the min/max recoil values by a large amount (relatively) and adding a weighting, so large recoils will be more rare -- it seems like a lot of effort to go into something I felt would be simple.

Maybe this is just something that needs to be fine-tuned with additional playtesting, and more playtesters? I think that it's important to note, that the recoil will be a large part of the game, and is a key factor in the game being fun/challenging or not.

---

> [user1430 answered](https://gamedev.stackexchange.com/a/7278) (6 upvotes):
>
> Guns tend to recoil vertically far more than they recoil to the left or right (at least the few I've fired -- pistols and a shotgun -- have done so to the best of my recollection). I have a feeling the random variance in X would just feel unusual.
> 
> I would start with an implementation that kicks the gun/view upwards only, probably based on the power of the gun. When fired, a cooldown timer starts. If the gun is fired again while the cooldown timer is still counting down, the vertical kick is applied again, with intensity proportional to how much time is left on the timer. After a certain threshold it might be appropriate to add X axis variance to indicate that the player is really losing control of the (probably automatic) weapon. I've never fired such a thing so I don't know what that is supposed to feel like, but I imagine "chaotic" would fit nicely. The cooldown should probably scale a bit -- but nonlinearly -- as you continue to fire and the intensity of the kicks should probably be similarly damped or smoothed. Pure linear measures might feel too harsh.
> 
> Whatever you do, it sounds like your initial plans called for a fair bit of randomization and I don't think that would be appropriate -- a small bit, certainly, but sudden large recoils amidst smaller ones seem like they'd be unusual.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/q/7276) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
