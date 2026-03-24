---
title: "How to use Same Library for Silverlight and CLR"
description: "My answer to \"How to use Same Library for Silverlight and CLR\" on Stack Overflow"
date: 2009-05-07
author:
  name: Nate Bross
tags:
  - silverlight
  - build
  - clr
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/832849"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/832823):*

> I Have a library which has custom domain logic. Some of the stuff is heavy hitting and depend on the core runtime outside silverlight runtime.
> 
> Is it possible to compile the same code for 2 different runtimes and reference different flavours from different consumers? How

*I posted the following answer:*

Add two class library projects (SLLib, CLRLib) to your solution. Then add all your .cs files to both solutions.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/832849) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
