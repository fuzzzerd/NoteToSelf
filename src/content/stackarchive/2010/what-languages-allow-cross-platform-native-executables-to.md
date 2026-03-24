---
title: "What languages allow cross-platform native executables to be created?"
description: "My answer to \"What languages allow cross-platform native executables to be created?\" on Stack Overflow"
date: 2010-05-01
author:
  name: Nate Bross
tags:
  - programming-languages
  - executable
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2748604"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2748548):*

> I'm frustrated to discover that Java lacks an acceptable solution for creating programs that will run via double-click. Other than .NET for Windows, what modern and high-level programming languages can I write code in that can be compiled for various platforms and run as a native/binary in each (Windows, Linux, OSX (optional))
> 
> Assuming I wanted to write code in python, for instance, is there a cohesive way that I could distribute my software which wouldn't require users to do anything special to get it to run? I want to write and distribute software for computer-illiterate and Java has turned out to be a real pain in this respect.
> 
> **CLARIFICATION**: When i say cross-platform I mean that there are ways I can compile my source code using different compilers for each target system. I don't need a compile-once solution... I just want a simple experience for users of the software even if I need to compile it and work out code issues for each target platform.

*I posted the following answer:*

As stated by others, your best bet for exacty what you are asking is C, it will compile on almost any platform, as its effectivly a "high-level assembler."

That said, to achieve the goal you want, a managed language is going to be your best bet. Something like Silverlight for Windows/OSX (and Moonlight for Mono on Linux) is going to be your best bet, additionally it will provide code-once deploy everywhere solution.

Adobe Flash/Flex/Air would be another option, which will give you compile once deploy anywhere, I know thats not what you asked for, but it is the closes to achieving the goal of a simple user expeirence.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2748604) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
