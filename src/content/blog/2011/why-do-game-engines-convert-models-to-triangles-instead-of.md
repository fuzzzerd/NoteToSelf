---
title: "Why do game engines convert models to triangles instead of using quads?"
description: "My answer to \"Why do game engines convert models to triangles instead of using quads?\" on Game Development"
date: 2011-03-09
author:
  name: Nate Bross
tags:
  - graphics-programming
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9512"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9511):*

> I've worked using Maya for animation and more film orientated projects however I am also focusing on my studies on video game development. Anyways, I was talking with one of my professor and we couldn't figure out why all game engines (that I know of) convert to triangles.
> 
> Anyone happen to know why game engines convert to triangles compared to leaving the models as four sided polygons? Also what are the pros and cons (if any) of doing this?

*I posted the following answer, which was chosen as the accepted answer and received 65 upvotes:*

The bottom line is Triangle Rasterization, which is how computers render objects to the screen. Though others say it more elquently than I:

> All 3D objects that we see on the computer screen are actually made of tiny little geometrical objects often called primitives. Quadrilaterals, triangles, n-gons etc. are example of primitives. We will concentrate on triangles mostly because of one main reason: **every object can be split into triangles but a triangle cannot be split into anything else than triangles.** Because of this, drawing triangles is a lot simpler than drawing polygons of higher order; less things to deal with. This is why those triangles are so commonly used in computer graphics.

Emphasis mine. Source: [http://www.devmaster.net/articles/software-rendering/part3.php](http://www.devmaster.net/articles/software-rendering/part3.php)

<details>
<summary>Notable comments</summary>

**Hatoru Hansou** (6 upvotes): +1 Because is an answer I can safely use as reference when somebody ask me the same thing, to my bookmarks. Only say that, I always have thought that the reason triangles are the small possible primitive is because with the imprecision of float point arithmetic, tris are the only safe polygon you can guarantee to be planar in all cases, with quads you cannot guarantee they will be planar all the time. Modeling software probably show objects as quads or n-gons as convenience to the modeler but apply transforms/render dividing polygons as two or more triangles.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9512) — 65 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
