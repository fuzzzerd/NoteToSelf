---
title: "How to invoke the screen saver in Windows in C#?"
description: "My answer to \"How to invoke the screen saver in Windows in C#?\" on Stack Overflow"
date: 2009-05-29
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - windows
  - managed
  - screensaver
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/927871"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/927843):*

> I'd like to invoke the user's screen saver if such is defined, in a Windows environment.
> 
> I know it can be done using pure C++ code (and then the wrapping in C# is pretty simple), as suggested [here](http://bobmoore.mvps.org/Win32/w32tip22.htm).
> 
> Still, for curiosity, I'd like to know if such task can be accomplished by purely managed code using the dot net framework (version 2.0 and above), without p/invoke and without visiting the C++ side (which, in turn, can use windows API pretty easily).

*I posted the following answer:*

I'm not sure you can use completely managed code to do this.

This uses Windows API but is still very simple: [Launch System Screensaver from C# Windows Form](https://stackoverflow.com/questions/267728/launch-system-screensaver-from-c-windows-form)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/927871) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
