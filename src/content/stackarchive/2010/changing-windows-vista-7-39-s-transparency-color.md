---
title: "Changing Windows Vista/7&#39;s Transparency Color"
description: "My answer to \"Changing Windows Vista/7&#39;s Transparency Color\" on Stack Overflow"
date: 2010-05-10
author:
  name: Nate Bross
tags:
  - c#
  - winforms
  - transparency
  - aero
  - aero-glass
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2804242"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2804220):*

> Ok, so I've heard that the color Microsoft decided to use for there Transparency is Black. Which would explain why black text is invisible when drawn/placed onto a Glass surface.
> 
> Wouldn't it just make sense for us to change the transparency color (black) BACK to Magenta? Why didn't they do this again? Is it even possible to change this color?

*I posted the following answer:*

I'm not sure about chainging the transparent color, but you could render #010101 text and it should be dark enough for black, no? On a glass surface pure black could be hard to see anyway.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2804242) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
