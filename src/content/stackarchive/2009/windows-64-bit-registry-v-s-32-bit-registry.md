---
title: "Windows 64-bit registry v.s. 32-bit registry"
description: "My answer to \"Windows 64-bit registry v.s. 32-bit registry\" on Stack Overflow"
date: 2009-05-15
author:
  name: Nate Bross
tags:
  - com
  - registry
  - x86
  - 64-bit
  - clsid
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/869822"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/869783):*

> I heard on Windows x64 architecture, in order to support to run both x86 and x64 application, there is two separate/different sets of Windows registry -- one for x86 application to access and the other for x64 application to access? For example, if a COM registers CLSID in the x86 set of registry, then x64 application will never be able to access the COM component by CLSID, because x86/x64 have different sets of registry?
> 
> So, my question is whether my understanding of the above sample is correct? I also want to get some more documents to learn this topic, about the two different sets of registry on x64 architecture. (I did some search, but not found any valuable information.)

I run an x64 bit machine as my desktop; and I have never run into any issues with the different registry configurations.

Per MSDN, there is apparently a difference: [http://msdn.microsoft.com/en-us/library/ms724072(VS.85).aspx](http://msdn.microsoft.com/en-us/library/ms724072\(VS.85\).aspx)

HTH

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/869822) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
