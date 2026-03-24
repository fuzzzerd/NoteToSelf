---
title: "Populating Sprites"
description: "My answer to \"Populating Sprites\" on Game Development"
date: 2011-05-18
author:
  name: Nate Bross
tags:
  - java
  - android
  - game-mechanics
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/12461"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/12431):*

> I am making a android game, it's a tower/base defense like type of game (yea I know it is kind of confusing), I was wondering if anyone knows a good way to have the attacking sprites randomly generate without the number of sprites being higher than the level. I want the attack sprites to equal the level. I have 2 sprite types that I want to be generated, I just don't know how to make it to where one of the two randomly comes. Ex: you on level 4 and Sprite A spawns and then 3 others right after it but which version you get is random.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

I presume you're running in Android's flavor of Java, so

For generating random numbers, see [this](https://www.cs.duke.edu/csed/java/jdk1.4.2/docs/api/java/util/Random.html).

You'll need to setup a loop, which will load your extra sprites:

```
// you may wish to use a seed, so you can re-generate these numbers later, this depends on your use
Random gen = new Random(); 
for(int i = 0; i < currentLevelNumber; i++)
{
    double r = generator.nextGaussian();

    if(r > 0)
        // sprite type A
    else
        // sprite type B
}

```

I'm assuming you already know how to load, draw, and update sprites. If not, start [here](http://warriormill.com/2009/10/adroid-game-development-part-1-gameloop-sprites/).

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/12461) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
