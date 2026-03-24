---
title: "Android game scrolling background"
description: "My answer to \"Android game scrolling background\" on Game Development"
date: 2011-02-04
author:
  name: Nate Bross
tags:
  - 2d
  - java
  - android
  - game-loop
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/8134"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/8127):*

> I'm just trying to figure out the best approach for running a scolling background on an android device. The method I have so far.... its pretty laggy. I use threads, which I believe is not the best bet for android platforms
> 
> ```
> @Override
>     public void run() {
>         // Game Loop
>         while(runningThread){
>             //Scroll background down
>             bgY += 1;
> 
>             try {
>                 this.postInvalidate();
>                 t.sleep(10);
>             } catch (Exception e) {
>                 // TODO Auto-generated catch block
>                 e.printStackTrace();
>             }
>         }
> 
>     }
> 
> ```
> 
> where postinvalidate in the onDraw function simply pushings the background image down
> 
> ```
> canvas.drawBitmap(backgroundImage, bgX, bgY, null);
> 
> ```
> 
> Thanks in advance
> 
> * * *
> 
> **UPDATE & SOLUTION**
> 
> Thank you for everyone helping me. I came across this:
> 
> post [https://stackoverflow.com/questions/1430741/how-to-draw-lots-of-bitmaps-on-screen-in-an-android-game-without-slow-performance](https://stackoverflow.com/questions/1430741/how-to-draw-lots-of-bitmaps-on-screen-in-an-android-game-without-slow-performance)
> 
> Helped my problem a lot. However, Seemed I was creating bitmaps in the onDraw every time is was caused, meaning that was doing 95% of the slowing down. oops :)
> 
> Below is my inner class in my surfaceview for reference purposes
> 
> ```
> class MapThread extends Thread{
>     private Map map;
>     private SurfaceHolder holder;
>     private boolean run = false;
> 
>     public MapThread(Map map, SurfaceHolder holder){
>         this.holder = holder;
>         this.map = map;
>         setRunning(true);
>     }
> 
>     public void setRunning(boolean run){
>         this.run = run;
>     }
> 
>     @Override
>     public void run(){
>         while(run){
>             try{
>                 Canvas c = null;
> 
>                  try {
>                        c = holder.lockCanvas(null);
>                        synchronized (holder) {
>                             map.onDraw(c);
>                      }
>                  } finally {
> 
>                      if (c != null) {
>                          holder.unlockCanvasAndPost(c);
>                      }
>                  }
>         }
>     }
> }
> 
> ```

*I posted the following answer, which received 3 upvotes:*

There could be a variety of things causing your background scrolling to be choppy.

1.  Your image could be very large causing `canvas.drawBitmap();` to be slow
2.  Your loop could be firing slowly or inconsistently. I could be wrong, and maybe there are extenuating circumstances, but generally a `sleep();` call is never good in a game loop, or any loop for that matter. It could quite easily be the a contributor to your choppiness. I'd remove it to see what happens.
3.  Other code you've stripped out from the example could be taking up lots of milliseconds in your loop.

I highly recommend you track the number of milliseconds between each iteration of your loop. You can use this data to determine how far to move your background based on how long the last loop took. This should smooth out your scrolling for the most part.

If the issue is because your image is so large that drawing it is taking up too much time, you may need to break the image up into smaller parts and "stream" it across the screen based on the scrolling position.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I agree with you. I've read (specifically about .NET's implementation, I thought it applied more generally as well) that `sleep();` calls only promise to sleep for at least the specified time, maybe longer. Since we're talking about milliseconds in a game loop depending on how much longer it sleeps it could be an issue.

**Ricket** (3 upvotes): Actually a sleep call is good in every game loop, but as you pointed out it should be a variable time based on how long the rest of the loop took. But especially in a mobile device, a tight CPU loop will only drain the battery that much faster. No need to run at 200 FPS when the screen can only really update at 60 (or 30, or whatever rate it updates) - you'll just get complaints about draining battery life.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/8134) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
