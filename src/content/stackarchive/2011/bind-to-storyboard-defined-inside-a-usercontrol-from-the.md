---
title: "Bind to storyboard defined inside a UserControl from the parent window"
description: "A question I asked on Stack Overflow"
date: 2011-02-23
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - user-interface
  - mvvm
  - resources
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/5097225"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/5097225):*

I just got my storyboard working, now I'm trying to encapsulate all of the functionality into a UserControl.

The goal is to take a button on my window, and have it start a storyboard (that slides the user control into view) that is defined within my UserControl, then when a button within the UserControl is clicked trigger yet another storyboard in the user control (to slide the the UserControl out.)

I found this [question](https://stackoverflow.com/questions/438795/controlling-a-usercontrols-storyboard-from-the-parent-window-in-wpf-using-only-x), which seems quite similar; however, there's no satisfactory answer there and additionally, I'm open to other solutions to achieve my goal.

My assumption is that my UserControl should know how to "slide" itself into view and out of view, this control is basically a glorified input dialog so it will be told to "show" it self externally, but only it will know when it hide itself.

I would be OK with the animation/storyboarding being defined outside the control, but if that is best (which seems to be the consensus from the question above) -- how would I "slide-out" when the OK or Cancel button is pushed from within the control?

It feels ugly for the Window to perform the "slide-in" and the control to perform "slide-out" -- but that is where the originating control exists.

I'd rather a fully XAML solution; but I'm open to dropping some code in the UserControl. I'm looking for a robust and easy solution, because once I get this working, I have several additional UserControls to fit into this mold.

---

> [Y.Yanavichus answered](https://stackoverflow.com/a/5105606) (1 upvotes):
>
> May be you should try [Visual States](http://msdn.microsoft.com/en-us/library/system.windows.visualstatemanager%28v=vs.95%29.aspx)?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/5097225) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
