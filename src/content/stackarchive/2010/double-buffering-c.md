---
title: "Double buffering C#"
description: "My answer to \"Double buffering C#\" on Stack Overflow"
date: 2010-06-18
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - winforms
  - graphics
  - double-buffering
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3071081"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3070208):*

> I'm trying to implement the following method:  
> `void Ball::DrawOn(Graphics g);`
> 
> The method should draw all previous locations (stored in a queue) of the ball and finally the current location. I don't know if that matters, but I print the previous locations using `g.DrawEllipse(...)` and the current location using `g.FillEllipse(...)`.
> 
> The question is, that as you could imagine there is a lot of drawing to be done and thus the display starts to flicker much. I had searched for a way to double buffer, but all I could find is these 2 ways:
> 
> 1.  `System.Windows.Forms.Control.DoubleBuffered = true;`
>     
> 2.  `SetStyle(ControlStyles.DoubleBuffer | ControlStyles.UserPaint | ControlStyles.AllPaintingInWmPaint, true);`
>     
> 
> while trying to use the first, I get the an error explaining that from in this method the Property DoubleBuffered is inaccessible due to its protection level. While I can't figure how to use the SetStyle method.
> 
> Is it possible at all to double buffer while _**all the access**_ I have is to the Graphics Object I get as input in the method?
> 
> Thanks in Advance,
> 
> Edit: I had created the following class
> 
> ```
> namespace doubleBuffer
> {
>     class BufferedBall : System.Windows.Forms.Form
>     {
>         private Ball ball;
>         public BufferedBall(Ball ball)
>         {
>             this.ball = ball;
>         }
> 
>         public void DrawOn(Graphics g)
>         {
>             this.DoubleBuffered = true;
>             int num = 0;
>             Rectangle drawArea1 = new Rectangle(5, 35, 30, 100);
>             LinearGradientBrush linearBrush1 =
>             new LinearGradientBrush(drawArea1, Color.Green, Color.Orange, LinearGradientMode.Horizontal);
>             Rectangle drawArea2 = new Rectangle(5, 35, 30, 100);
>             LinearGradientBrush linearBrush2 =
>                new LinearGradientBrush(drawArea2, Color.Black, Color.Red, LinearGradientMode.Vertical);
>             foreach (Point point in ball.previousLocations)
>             {
>                 Pen myPen1;
>                 if (num % 3 == 0)
>                     myPen1 = new Pen(Color.Yellow, 1F);
>                 else if (num % 3 == 1)
>                     myPen1 = new Pen(Color.Green, 2F);
>                 else
>                     myPen1 = new Pen(Color.Red, 3F);
>                 num++;
>                 myPen1.DashStyle = System.Drawing.Drawing2D.DashStyle.Solid;
>                 myPen1.StartCap = System.Drawing.Drawing2D.LineCap.RoundAnchor;
>                 myPen1.EndCap = System.Drawing.Drawing2D.LineCap.AnchorMask;
>                 g.DrawEllipse(myPen1, (float)(point.X - ball.radius), (float)(point.Y + ball.radius), (float)(2 * ball.radius), (float)(2 * ball.radius));
>             }
>             if ((ball.Host.ElapsedTime * ball.Host.FPS * 10) % 2 == 0)
>             {
>                 g.FillEllipse(linearBrush1, (float)(ball.Location.X - ball.radius), (float)(ball.Location.Y + ball.radius), (float)(2 * ball.radius), (float)(2 * ball.radius));
>             }
>             else
>             {
>                 g.FillEllipse(linearBrush2, (float)(ball.Location.X - ball.radius), (float)(ball.Location.Y + ball.radius), (float)(2 * ball.radius), (float)(2 * ball.radius));
>             }
>         }
>     }
> }
> 
> ```
> 
> and the ball drawOn looks like this:
> 
> ```
> new BufferedBall(this).DrawOn(g);
> 
> ```
> 
> Is that what you meant? because it is still flickering?

Another option, that I'll toss out for you, is to do all your drawing to a Bitmap, and then in the OnPaint method, you simply draw that Bitmap to the form.

Its manual, but it gives you full control. I've used it with some success on some pet projects of mine.

You also might want to look into XNA -- it might be overkill for your project here, but you can use XNA in WinForms as a rendering engine.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, it is, but I'm not sure why it still flickers for you.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3071081) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
