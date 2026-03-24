---
title: "Applicability of Business Architectures in XNA 4"
description: "My answer to \"Applicability of Business Architectures in XNA 4\" on Game Development"
date: 2012-07-24
author:
  name: Nate Bross
tags:
  - xna
  - architecture
  - design-patterns
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/32927"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/32906):*

> I've done a lot of C# programming and the architecture we use of late is a MVC => PresentationService => Domain Service And/OR DataService => Repository with a UnitOfWork and a messaging bus. In web applications this gives a pretty clean and flexible design that's extensible but is also stateless.
> 
> I've been working on a 2D starter project in XNA and I find these layers are still useful until I get to the interface and start trying to deal with knowing the states of everything, keeping the sprites and bounding rectangles and detecting clicks and drags.
> 
> What patterns should I be looking at that maybe I just wasn't exposed to doing enterprise architecture but are clearly needed in a game.
> 
> Which concepts might I need to let go of when doing a game because they are not applicable.

*I posted the following answer, which was chosen as the accepted answer and received 7 upvotes:*

I'm not a big fan of these on-site link posting answers, but in this case I feel there are several questions that address this.

*   [What are some programming design patterns that are useful in game development?](https://gamedev.stackexchange.com/questions/4157/what-are-some-programming-design-patterns-that-are-useful-in-game-development)
*   [Why are MVC & TDD not employed more in game architecture?](https://gamedev.stackexchange.com/questions/3426/why-are-mvc-tdd-not-employed-more-in-game-architecture)
*   [Unit Testing a C#/XNA Game Project](https://gamedev.stackexchange.com/questions/1901/unit-testing-a-c-xna-game-project)

You may also want to browse some other questions in the [design-patterns](https://gamedev.stackexchange.com/questions/tagged/design-patterns?sort=votes&pagesize=50) tag on this site.

With respect to porting skills and patterns learned while developing business apps on the Microsoft Stack to game development, I think you're in a big boat with a lot of other developers. My guess is that you are very new to game development, so my advise would be to skip any and all patterns and best practices to **get your first game working.**

Some additional thoughts

1.  Keep the scope of your first game small
2.  Get something on the screen as fast as possible
3.  Make that thing on the screen react to user input
4.  Start implementing the rules of your game
5.  Finish testing, and **ship your game**
6.  Refactor the best bits of code into a common library
    1.  Implement patterns you think fit, based on your experience with shipping your first game
7.  Start your next game and continue working on your library

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @HonorableChow I understand where you are coming from; but I've read about too many games that were never finished due to getting bogged down in design and re-engineering. I have a few in that category myself.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/32927) — 7 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
