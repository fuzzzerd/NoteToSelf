---
title: "Match Making Groups of Players"
description: "My answer to \"Match Making Groups of Players\" on Game Development"
date: 2010-12-22
author:
  name: Nate Bross
tags:
  - ranking
  - tournament
  - matchmaking
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/6746"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/6734):*

> Given a situation where I have a pool of `X` people of different scores (ranks) `S` with game size `N`. How do I partition the pool into `N` sized games where the standard deviation of ranks for each games is minimized?
> 
> (quality of the game is inversely proportional to STD of ranks)

*I posted the following answer, which received 1 upvote:*

If your values for X and N are very large, it would probably make the most sence to keep the player list sorted by `Rank` such that you could always take the bottom `N` elements to create a group. This will front-load your computation time (keeping the list sorted every time you add a new item), in contrast with the above algorithm which would require execution every time a new group is to be created.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): After rereading the question and your updated explination, my code (even fixed) wouldn't have done what you want; that said, it is wrong, I'd copied it and removed some important bits.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/6746) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
