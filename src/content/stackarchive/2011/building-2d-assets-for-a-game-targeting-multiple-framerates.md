---
title: "Building 2D Assets for a Game Targeting Multiple Framerates"
description: "A question I asked on Game Development"
date: 2011-01-19
author:
  name: Nate Bross
tags:
  - xna
  - algorithm
  - assets
  - animation
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/q/7536"
---

*I [asked this on Game Development](https://gamedev.stackexchange.com/q/7536):*

To make a real-world example, lets assume I want to build an animated sprite for an explosion. The duration of the animation should last ~1 second, and we'll say exactly one second to make the math a bit more simple. And lets assume I'm using XNA and my goal is to target both XBox (60fps), PC (60fps), and Windows Phone 7 (30fps).

My question is this, how should I build the sprite animations so that my programming is as simple as possible without simply using a timer to calculate which frame I should be on (which I feel would make the animation "choppy")?

---

> [user744 answered](https://gamedev.stackexchange.com/a/7537) (6 upvotes):
>
> You have two basic options, animate by frame or animate by time. If you animate by frame it will run twice as long. If you animate by time it will skip half the frames. Choppiness in this case is largely the result of bad animation (no blur, no squash+stretch, no ease-in/out); 30fps is more than smooth enough for sprites in motion.
> 
> As for how I'd do it with a timer,
> 
> ```
> # Figure out how long the animation's been going
> elapsed = (now - start)
> # Figure out how far we are into it.
> percentage = elapsed / animation.duration 
> # Figure out what frame we are given that state.
> frame = animation.frames[percentage * animation.frames.size()]
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Joe thanks for that -- as an answer I could accept it ;-) as a comment, I can only +1...

**user744** (4 upvotes): You have two basic options, animate by frame or animate by time. If you animate by frame it will run twice as long. If you animate by time it will skip half the frames. Choppiness in this case is largely the result of bad animation (no blur, no squash+stretch, no ease-in/out); 30fps is more than smooth enough for sprites in motion.

**Nate** (0 upvotes): On the lower framerate, if I'm skipping frames to keep up, it will be choppy... maybe it will still be acceptable?

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/q/7536) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
