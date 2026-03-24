---
title: "Is it possible to simulate a pause in a game for a fake exhaustive task?"
description: "My answer to \"Is it possible to simulate a pause in a game for a fake exhaustive task?\" on Game Development"
date: 2012-08-08
author:
  name: Nate Bross
tags:
  - xna
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/33863"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/33862):*

> Having windows phone OS 7.1 and it is for better understanding the game pipeline.
> 
> `Game.IsFixedTimeStep = true` and `TargetElapsedTime is 60`
> 
> The idea was to start a new thread and use `Thread.Sleep()`
> 
> ```
> protected override void Update(GameTime gameTime)
> {
>     Sleep();
> 
>    base.Update(gameTime);
> }
> 
> bool m_bSleepRunning;
> void Sleep()
> {
>    m_bSleepRunning = true;
>    new System.Threading.Thread(
>      () => 
>                { 
>                     Thread.Sleep(2000);
>                     m_bSleepRunning =false;
>                ;}
>      ).Start();
>    while(m_bSleepRunning)
>    {
>       //empty cycle
>    }
> }
> 
> ```
> 
> While debug there is a pause for every update, but the property `gameTime.ElapsedGameTime.TotalMilliseconds` is not updated.

*I posted the following answer, which was chosen as the accepted answer and received 4 upvotes:*

By calling `Thread.Sleep()` inside of a new thread the main thread will not sleep and your Update method is not blocked. To achieve the question you asked give this a shot:

```
protected override void Update(GameTime gameTime) 
{ 
    System.Threading.Thread.Sleep(2000);
    base.Update(gameTime); 
}

```

If, on the other hand, your objective is to only update something every so often, try something like this:

```
float elapsedTime = 0f;
protected override void Update(GameTime gameTime) 
{ 
    elapsedTime += gameTime.ElapsedGameTime.TotalMilliseconds;

    if(elapsedTime >= 2000)
    {
        elapsedTime = 0;
        // run the code you want to happen every so often here
    }

    base.Update(gameTime); 
}

```

The first code block will bring your entire game to a grinding halt for two seconds, this may be what you are trying to do. The second code block will keep your game running, but allow you to execute some code only every two seconds.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Artru I don't understand what you're trying to do. My first code block does what it **looks like** your code is trying to do. My second code block allows you to perform a task every so often without blocking the UI. If you are performing an exhaustive task in the UI thread, it **will** block. Based on your use of threads above and your updated question, it seems that you are trying to synchronize the UI thread with a worker thread, in which case you should do some research and find out how to best do that in your situation. Something like DavidLively's solution should be a good start.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/33863) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
