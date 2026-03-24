---
title: "Unit Testing a C#/XNA Game Project"
description: "A question I asked on Game Development"
date: 2010-07-30
author:
  name: Nate Bross
tags:
  - game-design
  - xna
  - c#
  - patterns
  - unit-testing
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/q/1901"
---

*I [asked this on Game Development](https://gamedev.stackexchange.com/q/1901):*

I have been dabling in game development since I started programming, but never very seriously. I work as a business app developer, but I'm working on some games in my spare time.

In the business world (on the Microsft web-dev stack) ASP.NET MVC is becoming really popular, because of its ease of unit-testing the way the interface works.

I'm wondering what design patterns (MVC, MVP, MVVM, etc) one could use to write a game in which all of the game logic is easily unit-testable. Is this possible or feasible? Am I wasting my time, is it better to do full builds and then run "integration" type tests instead of unit-tests?

Sample code would be great, but a writeup is also useful.

(I tried to add a unit-testing tag, but don't have the rep required...)

---

> [Andrew Russell answered](https://gamedev.stackexchange.com/a/1903) (17 upvotes):
>
> Here is a good article that I found that describes an architecture for separating out functionality to make it not only easily reusable, but also potentially far easier to unit-test:
> 
> [http://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/](http://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/)
> 
> Some games will benefit from a MVC-like pattern. Board games like chess and card games come to mind. In most cases, however, this is massive overkill.
> 
> Personally I find it is sufficient to only unit-test things that are algorithmic in nature. Things that you will depend on to "just work" when you're writing gameplay code, and can be insidiously hard to track down problems in, if they don't. Things like intersection tests or networking code.
> 
> (Things that ideally will be built into a 3rd party framework so you don't have to write _or_ test them!)
> 
> One technique I do like to use for unit testing game-related things is what I call the "visual unit test". The basic concept being a simple line-rendering of the bit of code in question (say for example an intersection function), and some basic key or mouse assignments to manipulate the inputs. No one said unit tests have to be automated - they just have to break things down into individual units and test them.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/q/1901) — 13 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
