---
title: "How should I replan A*?"
description: "My answer to \"How should I replan A*?\" on Game Development"
date: 2011-02-11
author:
  name: Nate Bross
tags:
  - ai
  - path-finding
  - planning
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/8445"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/8443):*

> I've got a pathfinding boss enemy that seeks the player using the A\* algorithm. It's a pretty complex environment, and I'm doing it in Flash, so the search can get a bit slow when it's searching over long distances. If the player was stationary, I could just search once, but at the moment I'm searching every frame. This takes long enough that my framerate is suffering.
> 
> What's the usual solution to this? Is there a way to "replan" A\* without redoing the entire search? Should I just search a little less often (every half-second or second) and accept that there will be a little inaccuracy in the path?

*I posted the following answer, which received 8 upvotes:*

You could use proximity detection to run the algorithm every few frames if the distance is very great (because in most cases if the distance is large, the target path wont change drastically from frame-to-frame). For example:

```
      Distance > 100, run A* every 2 seconds
100 > Distance >  50, run A* every 1 second
50  > Distance >  25, run A* every 10 frames
25  > Distance <  25, run A* every frame

```

This is assuming that there is a distance where running A\* every frame has performance that is still acceptable. In short, I'd go for your second option. Especially if what you have is working, I'd avoid reimplementing something else if I can just scale back what is working well. The bottom line is that you'll have to try it out to see if it works for your game.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/8445) — 8 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
