---
title: ".NET Max Memory Use 2GB even for x64 Assemblies"
description: "A question I asked on Stack Overflow"
date: 2009-06-11
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - memory
  - memory-management
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/982051"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/982051):*

I've read ([http://blogs.msdn.com/joshwil/archive/2005/08/10/450202.aspx](http://blogs.msdn.com/joshwil/archive/2005/08/10/450202.aspx)) that the maximum size of an object in .NET is 2 GB.

Am I correct in assuming that if I have an Object that takes up 256 MB Memory, since it is a reference type, I can have an array of these 256 MB Objects where all the objects together may takeup >2GB Memory as long as the size of the reference array stays below 2 GB?

---

> [LukeH answered](https://stackoverflow.com/a/982097) (11 upvotes):
>
> Yes, your assumption is correct.
> 
> The 2GB limit applies to each object individually. The total memory used for all objects can exceed 2GB.
> 
> (Whether the runtime is able to allocate enough memory for your requirements is another matter. I doubt if it could find a full 2GB of spare memory on a 32bit machine, but it shouldn't be a problem on 64bit.)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I agree, there are not many scenarios where you would need more than 2 GB in a single object. A game server or database server is really the only thing that comes to mind.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/982051) — 12 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
