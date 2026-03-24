---
title: "Optimizing an XNA 2D game"
description: "My answer to \"Optimizing an XNA 2D game\" on Game Development"
date: 2011-03-03
author:
  name: Nate Bross
tags:
  - xna
  - 2d
  - optimization
  - xna-4.0
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9279"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9277):*

> Does it make sense to implement the logic to skip rendering objects outside the viewport or should I not care about it and let the Framework do it?

*I posted the following answer, which received 13 upvotes:*

According to the a post on the forums at MSDN, XNA framework does not do frustum culling:

> XNA framework will not do any frustum culling for you - it could not becuase it has no clue where anything will actually end up. All the transformations are done on the GPU and could be a custom shader.

[http://xboxforums.create.msdn.com/forums/p/22763/121897.aspx](http://xboxforums.create.msdn.com/forums/p/22763/121897.aspx)

This post goes on to say, that if you have a lot of objects in your scene, it might be worth rolling your own.

<details>
<summary>Notable comments</summary>

**Michael Coleman** (6 upvotes): Especially if you have a scrolling map (you said it was 2D, so this might be relevant). It's just a waste if you draw large sections that aren't needed. It's not awfully difficult and you might see some kind of improvement.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9279) — 13 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
