---
title: "How to create biomes"
description: "My answer to \"How to create biomes\" on Game Development"
date: 2012-07-18
author:
  name: Nate Bross
tags:
  - xna
  - c#
  - 2d
  - xna-4.0
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/32563"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/32560):*

> I am creating an 2D XNA Tile Based Platformer. I have a tile engine and a world/terrain generator. However, I am trying to create biomes or areas, For example, Desert in one part of the world, ocean on the ends, City in the middle, forests scattered around etc. I can easily make it generate them, but My problem is defining the actual areas to be generated in.

*I posted the following answer, which was chosen as the accepted answer and received 5 upvotes:*

Without any specific knowledge of your generation algorithm, I would suggest the following.

Assuming that your world is defined in a multi-dimensional array `Tile[999,99]`

1.  Decide how many "biomes" you want and of what type
2.  Define the size of each biome
3.  Go through your world array, and pick a start point for each biome
4.  Update the world array with each biome's tile data

For example:

```
Tile[,] World = new Tile[999,99];
Tile[,] Ocean = new Tile[50,10];
// assume we want the ocean to be top left of the world, flowing off the edge
for(int i = 0; i < 50; i++)
{
    for(int j = 0; j < 10; j++)
    {
        World[i,j] = Ocean[i,j];
    }
}

```

You could, as @Nathan suggested, use a distance from water to define which tile-set to use for each area. This could help keep your maps looking fresh and consistent, yet still be generated on-demand.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Cyral Great! Glad it was helpful.

**Nate** (1 upvotes): A side scroller makes it even more simple, you just have to decide the start `x` and stop `x` for each biome.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/32563) — 5 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
