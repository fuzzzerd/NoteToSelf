---
title: "Competing with C++ for games programming"
description: "My answer to \"Competing with C++ for games programming\" on Game Development"
date: 2011-04-13
author:
  name: Nate Bross
tags:
  - c++
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/11072"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/11069):*

> I'm curious as to why C++ is so popular for games development, and not other languages instead. I know you can create very fast code with it, but what exactly is it that makes it popular?
> 
> Is it just because it's fast? Is it some other feature in the language, like the OO paradigm or the portability? Is it because of all the libraries that have been created over time? Or some combination of all these (and other) reasons?
> 
> If someone could fill me in on this, I'd be very happy. :-)

*I posted the following answer, which received 14 upvotes:*

There are a few reasons, that I'd like to mention in addition to what @Graham brought up.

*   Legacy Code - many studios have lots of C++ code, goes to your mention of libraries.
*   C++ is really a high-level assembler, and has **direct** access to hardware (as direct as you can get running on top of an Operating System at least) and is quite fast. If you want, in C++ you can drop directly down into assembly language for instruction level control (not that it is always wise, its just not possible with Java, C#, Python, etc)
*   DirectX and OpenGL natively support C++, most other languages have "bindings" to the underlying libraries through intermediate layers, thats not to say they aren't fast or can't do many of the same things, but it adds a layer of software between your game and the hardware.
*   As @Graham mentions, lots of programmers know it, so its easy to find experienced developers, and its also quite portable, compared to C# which is stuck on the .NET Framework (there is Mono, but it generally laggs a generation behind Microsoft's implementation.)

<details>
<summary>Notable comments</summary>

**user744** (4 upvotes): Why should legacy code be deprecated (not depreciated)? "Legacy code" just means it's old, not that it's bad.

**A.A. Grapsas** (7 upvotes): C++ is a high level language, as is C. Assembly is low level. Now, C++ is higher level than C is, just as C# is higher than C++ and Ruby/Python are higher than C#.

**foo** (3 upvotes): I disagree. C++ is a high-level language, with the build-in facility to fall back on C (which is a low-level language).

**Nate** (5 upvotes): C++ is a `low-level` language; but a `high-level` assembler, IMO.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/11072) — 14 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
