---
title: "XNA GameTime before first Update"
description: "My answer to \"XNA GameTime before first Update\" on Game Development"
date: 2011-04-18
author:
  name: Nate Bross
tags:
  - xna
  - game-loop
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/11295"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/11284):*

> Using XNA, is it possible to access the GameTime object _before_ Update is called for the first time?
> 
> Can it be used in the game constructor, Initialize or LoadContent methods?

*I posted the following answer, which was chosen as the accepted answer and received 5 upvotes:*

I don't believe this is possible:

> The GameTime object received by Draw and Update isn't technically owned by anyone, but is instead re-created each Game.Tick and passed to Update and Draw from there.
> 
> Internally, Tick fills the value of the Total/ElapsedRealTime properties based off of the current high performance counter value as reported by Stopwatch.GetTimestamp(). If the PC the program is running on does not have a high performance counter, then it returns DateTime.Now.Ticks.
> 
> The Game Time properties (as opposed to real-time) also use the Stopwatch.GetTimestamp, however elapsed time since application launch and last frame are computed internally and then filled in before **GameTime is passed to Draw or Update - so there's no external way to compute those values directly.**

Source: [http://forums.create.msdn.com/forums/t/10587.aspx](http://forums.create.msdn.com/forums/t/10587.aspx), bold mine. Also included there are several work arounds, similar to what you've already outlined though.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, that is likely, but it still doesn't remove having a line in the Update method which passes gameTime somewhere else.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/11295) — 5 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
