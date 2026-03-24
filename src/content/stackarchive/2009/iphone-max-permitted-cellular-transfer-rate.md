---
title: "iPhone Max Permitted Cellular Transfer Rate"
description: "My answer to \"iPhone Max Permitted Cellular Transfer Rate\" on Stack Overflow"
date: 2009-08-07
author:
  name: Nate Bross
tags:
  - iphone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1245415"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1245376):*

> In another question regarding our “transferring excessive volumes of data” rejection letter I asked your advise about what could be done to limit our bandwidth usage.
> 
> Thanks for your replies, we found a solution: we've hobbled the application when its on 3G/Edge and by putting the download on a different thread then halting the thread when it gets to the bandwidth limit we set in code. Now I need to know what a reasonable download rate is.
> 
> Apple provides NO guidelines that I can find other than the app must not, in "Apple's reasonable (sic) judgment excessively use or unduly burden network capacity or bandwidth"
> 
> And does anyone know what "Apple's best practices and other guidelines on how Applications should access and use the cellular network" are exactly.

*I posted the following answer:*

If you are on the Edge network you can saturate the pipe, since it is so slow anyway. If you are on 3G I'd say 20-50KB/s is reasonable.

My two cents...

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1245415) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
