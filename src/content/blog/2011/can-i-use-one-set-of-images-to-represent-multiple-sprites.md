---
title: "Can I use one set of images to represent multiple sprites in Java?"
description: "My answer to \"Can I use one set of images to represent multiple sprites in Java?\" on Game Development"
date: 2011-11-26
author:
  name: Nate Bross
tags:
  - java
  - graphics
  - image
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/20226"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/20213):*

> I've got a game that has 3 basic sprites, at the moment I'm loading 8 images into each sprite for animating. Each character class has a sprite object. if I've got 10 characters on screen at once then that's 80 images loaded in to memory. Can I make a central sprite class that only holds 8 images for each of the 3 sprites, then get the character objects to request the relevant images from the central sprite class, thereby massively reducing the memory required for the images?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

You can and you probably should. I believe that in Java (as in C#) objects are going to be passed by reference, so you should get this behavior by default without doing any extra work.

Code like this:

```
Sprite spr = Sprite.LoadFromFile("c:\sprite.s");

Character c1 = new Character(spr, x1, y1);
Character c2 = new Character(spr, x2, y2);
Character c3 = new Character(spr, x3, y3);

```

Should give you three `Character` objects all referencing the same Sprite object.

A quick search shows that I stand corrected. [Java is in fact pass-by-value](http://javadude.com/articles/passbyvalue.htm); however, since java has "pointers" the result in the code above should remain the same. Java passes the pointer to the sprite by value; but they will all still "reference" the same sprite.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): That is my understanding, yes.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/20226) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
