---
title: "Breakpoints are not hit while debugging xunit test that includes a large string"
description: "My answer to \"Breakpoints are not hit while debugging xunit test that includes a large string\" on Stack Overflow"
date: 2018-08-29
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - debugging
  - xunit
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/52084881"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/52081527):*

> I have a test that uses some Base64 encoded strings as parameters to a method. The test runs and passes (or fails if I modify the method to a failed state). The point is that the test framework _executes_ as expected.
> 
> When I try to debug the test through Visual Studio (or VSCode) the debugger starts, loads symbols, and then exits with my test case showing a passing state. No Breakpoints are hit.
> 
> I only identified this large string by trial an error, removing one test case at a time until I was able to successfully hit breakpoints.
> 
> This method reproduces the problem. Even though its not used, comment out b64 and you should be able to hit breakpoints through the debugger, uncomment it and breakpoints fail.
> 
> This happens with xunit 2.3.1 and 2.4.0; not sure if its even an xuint thing, but I'm trying to figure out what I can do to debug this method.
> 
> Run `dotnet new xunit` and drop this test in: [https://gist.github.com/fuzzzerd/8347a8609fd1ccabdfaeea564d42a976](https://gist.github.com/fuzzzerd/8347a8609fd1ccabdfaeea564d42a976) (snip is too large for question body)

Looks like I'm running into this issue: [https://github.com/dotnet/roslyn/issues/20118](https://github.com/dotnet/roslyn/issues/20118). There's no work around posted, but loading from a file does successfully work around this issue.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/52084881) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
