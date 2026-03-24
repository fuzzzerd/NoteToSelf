---
title: "Scrolling background loop"
description: "My answer to \"Scrolling background loop\" on Game Development"
date: 2011-04-04
author:
  name: Nate Bross
tags:
  - c#
  - 2d
  - side-scroller
  - silverlight
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/10631"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/10629):*

> I'm trying to scroll my background forever and so I'm using the background image twice. When the first one goes off screen, it should relocate to the end of the second one. However, there seems to be a black bar inbetween the two images and so it seems that the image is not being moved into place quick enough. What would be the algorithm to do such a thing to give the illusion of a continuous background? I've got this at the moment (which loops, but with a black bar in between the background image)
> 
> ```
>  GeneralTransform gt = bg1Canvas.TransformToVisual(Application.Current.RootVisual as UIElement);
>         Point bg1Offset = gt.Transform(new Point(0, 0));
> 
> 
>  GeneralTransform gt2 = bg2Canvas.TransformToVisual(Application.Current.RootVisual as UIElement);
>         Point bg2Offset = gt2.Transform(new Point(0, 0));
> 
> 
>  bg1.TranslateX -=  playerVel.X; //bg1 and bg2 are the composite transforms for the canvas
>  bg2.TranslateX -=  playerVel.X;
> 
>  if (bg1Offset.X < -bg_width)
>      bg1.TranslateX -= bg1Offset.X - bg_width;
>  if (bg2Offset.X < -bg_width)
>      bg2.TranslateX -= bg2Offset.X - bg_width;
> 
> ```
> 
> Any ideas?
> 
> Edit - Updated code Edit 2: New code with three images (all same width). Works for the first few scrolls, then suddenly stops working and no background is displayed.
> 
> ```
> if (bg1Offset.X < -bg_width )
>                 bg1.TranslateX = bg3Offset.X+bg_width;
> 
>             if (bg2Offset.X < -bg_width )
>                 bg2.TranslateX = bg1Offset.X + bg_width;
> 
>             if (bg3Offset.X < -bg_width)
>                 bg3.TranslateX = bg2Offset.X + bg_width;
> 
> ```

*I posted the following answer, which received 1 upvote:*

I think you need to draw the image three times: Imagine your background is `\/`

```
1.      [ /\ ] \/ \/
2.    \ [ /\ ] / \/
3.    \/[ \/ ] \/ 
4. \/ \ [ /\ ] /    
5.      [ /\ ] \/ \/

```

(assuming Right ==> Left scrolling)

If you're seeing a black bar (I presuem you are clearing to `Color.Black`) you probably have an error in your positioning code.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/10631) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
