---
title: "How do I find the physical memory size in Java?"
description: "My answer to \"How do I find the physical memory size in Java?\" on Stack Overflow"
date: 2009-06-04
author:
  name: Nate Bross
tags:
  - java
  - memory
  - installation
  - memory-management
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/950805"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/950754):*

> I'm writing an installer that will tune the configuration of the product for the particular hardware on which it will be run. In particular, I want to determine how much physical RAM is installed in the system so I can estimate how much memory to allocate to the product when it runs.
> 
> Ideally, I'd like to do this in a platform-independent, pure Java way, as the installer will need to run on several different platforms, but in case this isn't possible, solutions for Windows are preferred as that's the most common deployment platform.
> 
> In this case, it's safe to assume that the product will be the only/main application running on the box, so I don't have to worry about squeezing anyone else out. I don't want to over-allocate as this, in our experience, can hurt performance.

For windows, you'll need to access WMI - this will get you going: [Accessing Windows Management Instrumentation (WMI) from Java](http://j-integra.intrinsyc.com/support/com/doc/other_examples/WMI_Scripting_from_Java.htm).

You'll want to use this section of WMI: Win32\_LogicalMemoryConfiguration.

There may be a pure java way of doing this, but I am unaware of it.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes different versions of windows support different WMI Classes. You'll need to adjust based on your target OS.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/950805) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
