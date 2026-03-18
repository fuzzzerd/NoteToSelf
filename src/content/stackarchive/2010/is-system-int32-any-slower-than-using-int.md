---
title: "Is System.Int32 any slower than using int?"
description: "My answer to \"Is System.Int32 any slower than using int?\" on Stack Overflow"
date: 2010-07-07
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3197559"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3197541):*

> > **Possible Duplicate:**  
> > [C#, int or Int32? Should I care?](https://stackoverflow.com/questions/62503/c-int-or-int32-should-i-care)
> 
> Couple of questions on System.Int32:
> 
> 1.  Is there any specific technical reason why sizeof(System.Int32) is not allowed?
> 2.  How fast or slow is System.Int32 in comparison to int type?
> 3.  Calling System.Runtime.InteropServices.Marshal.SizeOf on a variable of type System.Int32 results in 4; how does this work? Would the size of this class be exactly same as that of int internally?

Effectivly there is no difference.

`int == Int32`.

The former is implicitly 32 bits, while Int32 spells it out, similarly Int64 and Int16 (long and short respectivly) do the same.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3197559) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
