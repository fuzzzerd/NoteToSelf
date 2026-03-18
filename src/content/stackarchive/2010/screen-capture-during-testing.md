---
title: "Screen capture during testing"
description: "My answer to \"Screen capture during testing\" on Stack Overflow"
date: 2010-05-13
author:
  name: Nate Bross
tags:
  - wpf
  - testing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2829734"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2829729):*

> This is an application for reviewing performance tests. Simple in concept, tricky to describe. Picture:
> 
> 1) Recording interactions with a WPF program so the inputs can be played back.
> 
> 2) Playing the inputs back while doing a continuous screen capture.
> 
> 3) Capturing wall time as well as continuous CPU percentages during playback.
> 
> 4) Repeating steps (2) and (3) lots of times.
> 
> 5) Writing the relevant stuff out to files/db.
> 
> 6) Reading it and putting it all in a fancy UI for easy review/analysis.
> 
> The killer for me is (2). I could use some guidance on a good, possibly commercial, screen capture SDK. I would also welcome the news that my whole problem already has a solution. And of course any thoughts on the overall idea would also be great.
> 
> Thanks.
> 
> Ed

Windows API? Maybe System.Drawing?

[http://www.codeproject.com/KB/dialog/screencap.aspx](http://www.codeproject.com/KB/dialog/screencap.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2829734) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
