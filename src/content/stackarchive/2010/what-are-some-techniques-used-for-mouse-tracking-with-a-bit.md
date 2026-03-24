---
title: "What are some techniques used for mouse tracking, with a bit of &quot;emulated lag&quot;?"
description: "A question I asked on Game Development"
date: 2010-08-18
author:
  name: Nate Bross
tags:
  - path-finding
  - control
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/q/2952"
---

*I [asked this on Game Development](https://gamedev.stackexchange.com/q/2952):*

I am trying to implement a system, where the cursor (in my case the player's avatar) is always about 1.5 seconds (a configurable interval) behind where the mouse actually is. If I change the cursor's location every time through, I get an emulated mouse cursor with no delay, I'm wondering if there are any pre-canned type of solutions I can throw at this before I "roll-my-own." Source code or even just basic steps you've used would be helpful.

---

> [Ricket answered](https://gamedev.stackexchange.com/a/2953) (7 upvotes):
>
> I don't think there are any pre-canned solutions; at least I haven't seen any. But here is the logic to such a thing.
> 
> What you essentially want is a **queue** of mouse positions and timestamps. So define an object, let's call it `MousePositionSnapshot`, which has two members, `time` and `position` (or separate x,y if you want). And then define your queue of `MousePositionSnapshot`s. Each update, make a new MousePositionSnapshot with the current timestamp and the current position of the mouse, and push it onto the head of the queue. Then peek at the tail of the queue to see if the timestamp is delayed enough for you, and if so, pop it off the end of the queue and move the emulated cursor to the given position.
> 
> Or, if you have a fixed framerate, you could skip the timestamp since you know how far apart each update is, and just keep your mouse lag in terms of number of updates; if the queue is smaller in length than that amount of updates then don't pop-and-move, otherwise just pop and move the emulated mouse each frame.
> 
> By the way, Queue may already be implemented in your language of choice; it is [part of the C++ standard library](http://www.cplusplus.com/reference/stl/queue/) and of course exists in [java.util.Queue](http://download.oracle.com/javase/6/docs/api/java/util/Queue.html) for Java.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/q/2952) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
