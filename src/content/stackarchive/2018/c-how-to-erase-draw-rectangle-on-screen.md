---
title: "C# - How to erase draw rectangle on screen?"
description: "My answer to \"C# - How to erase draw rectangle on screen?\" on Stack Overflow"
date: 2018-09-26
author:
  name: Nate Bross
tags:
  - c#
  - draw
  - erase
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/52525034"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/52524946):*

> I am using this code to draw a rectangle that will be re-draw again after 500ms at mouse position.
> 
> Everything is fine, the rectangle draw works perfectly, but with this code, the old rectangles that have already been draw on screen keep on screen forever, they don't be erased.
> 
> I need that the old rectangles to be erased after the new one is made. The new rectangle is made with while loop.
> 
> ```
> int i = 0;
> while (i != 1)
> {
>     int x = Cursor.Position.X;
>     int y = Cursor.Position.Y;
>     Graphics g = Graphics.FromHwnd(IntPtr.Zero);
>     Rectangle mouseNewRect = new Rectangle(new Point(x, y), new Size(30, 30));
>     g.DrawRectangle(new Pen(Brushes.Chocolate), mouseNewRect);
>     Wait(500);
> }
> 
> ```
> 
> EDIT: I need to erase the rectangles that are both inside and OUTSIDE the form. Ideas?

*I posted the following answer:*

You need to cause the window you are drawing to, to repaint itself between your iterations. An alternative solution would have you capture the window to an in-memory image; draw your rectangle on a copy of that image, then draw the image to the window. Repeating this process each time, so that the target window doesn't have artifacts from previous iterations.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @GabrielWeiss you can't just 'erase' them because once they're drawn you don't know what's behind them so there's nothing to erase; you need to repaint/redraw the area behind the rectangle each time before you paint the next rectangle.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/52525034) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
