---
title: "unit testing priority, tools, metrics"
description: "My answer to \"unit testing priority, tools, metrics\" on Stack Overflow"
date: 2011-01-09
author:
  name: Nate Bross
tags:
  - unit-testing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4642597"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4642574):*

> Imagine that we have 1000 functions in our program. Do we need to test all of them?
> 
> Can we give some priorities to the functions and can we test some of them after that but not all?
> 
> To do this which tools and metrics can we use?

In an ideal world, you will have multiple Unit Tests for each method (or function) in your solution. In reality, this usually doesn't happen, especially when working on existing systems.

There are no automated ways to prioritize which methods you should unit test since every software solution is different. I would focus on methods and classes that are the core of your solution, and try to get as much unit test coverage on those methods. Then focus on the other parts of your code.

Unit testing tools vary based on your language and environment. Visual Studio includes basic unit testing, additionally there is NUnit for .NET testing. For Java there is JUnit.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4642597) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
