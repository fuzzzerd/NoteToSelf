---
title: "Resize WPF UserControl without all children &quot;jumping around&quot;"
description: "A question I asked on Stack Overflow"
date: 2011-02-23
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - user-interface
  - animation
  - storyboard
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/5096467"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/5096467):*

Is there a way to resize a WPF UserControl in such a way that the child controls don't flop around?

I've got this Storyboard:

```
<Storyboard>
    <DoubleAnimation Storyboard.TargetProperty="Height" Storyboard.TargetName="MyUserControl" To="145" From="0" Duration="0:0:1" />
</Storyboard>

```

This works great; it takes my control from Height Zero to Height 145 -- the problem is that as the Height property changes, all of the child controls inside start jumping around, I suspect, due to their HorizontalAlignment and VerticalAlighment properties. Is there a way I can disable that until the animation is finished?

I'm trying to create the illusion of this UserControl "sliding" into view -- so I'm open to other approaches if I'm going about this wrong.

---

> [Pavlo Glazkov answered](https://stackoverflow.com/a/5096583) (5 upvotes):
>
> Everything is "jumping around" because every time the `Height` of the control is changed all the containing controls reposition themselves according to the new available space.
> 
> To achieve the desired effect you should use `RenderTransform` instead of changing the actual `Height` of the control.
> 
> Here is how you can do that. First, add `ScaleTransform` as a value of `RenderTransform` property on your control:
> 
> ```
> <MyUserControl.RenderTransform>
>     <ScaleTransform ScaleY="0" />
> </MyUserControl.RenderTransform>
> 
> ```
> 
> Then, modify target property of your animation to change the `ScaleY` property of the transform:
> 
> ```
> <Storyboard>
>     <DoubleAnimation Storyboard.TargetProperty="RenderTransform.(ScaleTransform.ScaleY)" Storyboard.TargetName="MyUserControl" To="145" Duration="0:0:1" />
> </Storyboard>
> 
> ```
> 
> **Update:**
> 
> Another way to achieve the slide-into-view effect is to use `TranslateTransform` with negative `Y` value:
> 
> ```
> <MyUserControl.RenderTransform>
>    <TranslateTransform Y="-1000" />
> </MyUserControl.RenderTransform>
> 
> ```
> 
> And then, animate its `Y` property to 0:
> 
> ```
> <Storyboard>
>     <DoubleAnimation Storyboard.TargetProperty="RenderTransform.(TranslateTransform.Y)" Storyboard.TargetName="MyUserControl" To="0" Duration="0:0:1" />
> </Storyboard>
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/5096467) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
