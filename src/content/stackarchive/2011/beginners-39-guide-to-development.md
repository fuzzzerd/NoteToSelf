---
title: "Beginners&#39; Guide to Development"
description: "My answer to \"Beginners&#39; Guide to Development\" on Game Development"
date: 2011-03-01
author:
  name: Nate Bross
tags:
  - software-engineering
  - tools
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9191"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9187):*

> So I have some experience programming in Java, and at the moment I am learning how to use Python. I have read on the process of game design and such. I also have media covered, got experience with graphics and audio. My question is geared more towards the actual tools to use for making games, developing. I am willing to commit to a long term development cycle, as I will be doing this as a hobby. I've heard of Flash, Gamemaker, etc. I don't intend to create my own Game Engine, so I was looking for a platform that is extensible and easy to program with an OOP mind frame. As a plus it would be great of said game could be played directly from a website. TIA!

*I posted the following answer, which received 1 upvote:*

Even if you're an experienced programmer (any level of experience), I might recommend using something like GameMaker to build a simple game, before you start building your own. Start with building a game whose rules are well defined, and on the more simple side, think TicTacToe, Pong, or something similar. This will help get you orentated to the process your going to need without getting you stuck in the actual development. This can help you get your art and asset creation workflow down pat. (For my own experience, it this has been my largest pitfall, I spent too much time programming the game and got disenchanted with the project because I hadn't formalized an art workflow for myself.)

If you are not set on building your own engine (which is a good thing, get a game out there thats fun, even the best engine wont make a fun game) AND you are willing to be language agnostic (even though you have Java, you mention GameMaker and Flash) and have thoughts of possibly going public with your game, Epic recently upped the total amount you need to make (from 5k to 50k) before the royalties kick in for using the [UDK](http://www.udk.com/). Its big and complicated, but it has a good deal of head-room.

As Ricket said, Unity is hot right now, and has a pretty low bar to entry and might be worth looking in to.

If being cross-platform is not of high value to you and you would rather do some programming, I cannot recommend C# and XNA highly enough. C# has all of the good parts of Java, without all of the poor parts, like the Java implementation of Genrics, and all the goodness of DirectX in a very "managed" style API. TorqueX is an XNA engine, but if you see my question [here](https://gamedev.stackexchange.com/questions/2934/what-has-your-experience-been-with-torque-products): it is not highly recommended. There are other XNA based frameworks and engines that can help get you off the ground; depending on the complexity of your game, you may not need any of these engines.

If you are dedicated to Python, you might want to look into [pygame](http://www.pygame.org/news.html) -- I'm not much of a python guy, so I can't commont on its ease of use, but I've heard it mentioned a lot with respect to game development in Python.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9191) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
