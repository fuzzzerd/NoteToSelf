---
title: "Changing sprite animation depending on direction"
description: "My answer to \"Changing sprite animation depending on direction\" on Game Development"
date: 2012-08-06
author:
  name: Nate Bross
tags:
  - 2d
  - android
  - physics
  - animation
  - sprites
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/33717"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/33697):*

> I'm working on an android game where my sprite is controlled by a joystick. I just added an animation to my sprite with 4 rows and 3 columns:
> 
> ![enter image description here](https://i.sstatic.net/b4gzV.png)
> 
> Now I want to change the animation of my sprite depending on its direction. How do I calculate the direction of my sprite?
> 
> This is my controls:
> 
> ```
> public void update(MotionEvent event)
> {
>     // drag and drop
>     if (event.getAction() == MotionEvent.ACTION_DOWN)
>     {
>         _dragging = true;
>     }
>     else if (event.getAction() == MotionEvent.ACTION_UP)
>     {
>         _dragging = false;
>     }
> 
>     if (_dragging)
>     {
>         // get the pos
>         _touchingPoint.x = (int) event.getX();
>         _touchingPoint.y = (int) event.getY();
>         // get the angle
>         double angle = Math.atan2(_touchingPoint.y - inity,
>                 _touchingPoint.x - initx) / (Math.PI / 180);
> 
>         // move the beetle in proportion to how far
>         // the joystick is dragged from its center
>         _pointerPosition.y += Math.sin(angle * (Math.PI / 180))
>                 * (_touchingPoint.y / 70);
>         _pointerPosition.x += Math.cos(angle * (Math.PI / 180))
>                 * (_touchingPoint.y / 70);
>     }
> }
> 
> ```
> 
> And this is the drawing method in my sprite-class:
> 
> ```
> private void update()
> {
>     currentFrame = ++currentFrame % BMP_COLUMNS;
> }
> 
> public void draw(Canvas canvas, int x, int y)
> {
>     update();
>     int srcX = currentFrame * width;
>     int srcY = 1 * height;
>     Rect src = new Rect(srcX, srcY, srcX + width, srcY + height);
>     Rect dst = new Rect(x, y, x + width, y + height);
>     canvas.drawBitmap(bitmap, src, dst, null);
> }
> 
> ```

*I posted the following answer:*

Use this to grab the angle

```
point start; // center of joystick 
point end;   // current touch position
double angle =  Math.atan2(start.Y - end.Y, end.X - start.X) * 180 / Math.PI;

```

Then use something like this to draw with rotation

```
canvas.save(); // so we can restore after we rotate
canvas.rotate(angle);
canvas.drawBitmap(...);
canvas.restore();

```

See also [https://stackoverflow.com/questions/3587644/sprite-rotation-in-android-using-canvas-drawbitmap-i-am-close-what-am-i-doing](https://stackoverflow.com/questions/3587644/sprite-rotation-in-android-using-canvas-drawbitmap-i-am-close-what-am-i-doing)

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/33717) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
