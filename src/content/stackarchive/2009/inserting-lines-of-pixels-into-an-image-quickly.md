---
title: "Inserting lines of pixels into an image quickly"
description: "My answer to \"Inserting lines of pixels into an image quickly\" on Stack Overflow"
date: 2009-12-18
author:
  name: Nate Bross
tags:
  - .net
  - performance
  - data-structures
  - image-processing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1929148"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1929106):*

> My current dilemma is as follows:
> 
> I have a 2550x3300 tiff. At certain (variable) points in my tiff I need to insert a line of pixels from elsewhere in the tiff. e.g. I need to insert 12 copies in a row of line 100 between lines 500 and 501.
> 
> I've been looking up different image processing techniques for a few days now and can't find anyone else doing this kind of thing leading me to believe that I'm probably going about this the wrong way.
> 
> Alternatively, if what I'm doing is just very slow and there is no better way to do it, what's the fastest way to do it? Using GDI+ it takes me about 12 seconds to add 1330 lines, 7.7 seconds if I use "unsafe" (I'm doing all this in C# right now) and if I use the FreeImage dll I can get it down to around 2.5 seconds.
> 
> Thanks in advance.

*I posted the following answer:*

Unless this is a performance issue for uses, I'd stick with GDI+ simply because it is baked into the framework and keeps dependencies down. If you really need the performance use the FreeImage library.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1929148) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
