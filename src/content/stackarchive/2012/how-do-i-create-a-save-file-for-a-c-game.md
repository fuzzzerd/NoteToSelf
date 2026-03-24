---
title: "How do I create a save file for a C++ game?"
description: "My answer to \"How do I create a save file for a C++ game?\" on Game Development"
date: 2012-03-21
author:
  name: Nate Bross
tags:
  - c++
  - savegame
  - serialization
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/25967"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/25963):*

> I am coding my final for a Video game Programming course, and I want to know how to create a save file for my game, so that a user can play, and then come back later. Any idea how this is done, every thing I have done before has been single run programs.

*I posted the following answer, which received 42 upvotes:*

You need use [serialization](http://en.wikipedia.org/wiki/Serialization) to save your variables in memory to your hard drive. There are many types of serialization, in .NET XML is a common format, though there are binary and JSON serializers available. There is an entry in the C++ FAQ on general serialization techniques:

*   [https://isocpp.org/wiki/faq/serialization](https://isocpp.org/wiki/faq/serialization)

There are libraries that can aid in implementing serialization. Some are mentioned in other answers. Also refer to [this](https://stackoverflow.com/questions/234724/is-it-possible-to-serialize-and-deserialize-a-class-in-c) StackOveflow Question for more information.

The variables needing to be serialized are probably going to be related to game state. For example, you will probably want to know this type of information

1.  The player was playing level 3
2.  The player was at X, Y world coordinates
3.  The player has three items in his backpack
4.  Weapon
5.  Armor
6.  Food

You wont really care what textures are being used (unless your player can change their appearance, that's a special case), because they are usually the same. You need to focus on saving important gamestate data.

When you start your game, you start as normal for a "new" game (this loads your textures, models, etc) but at appropriate time you load the values from your save file back into the game state object replacing the "default" new game state. Then you allow the player to resume playing.

I've greatly simplified it here, but you should get the general idea. If you have a more specific question ask a new question here and we can try to help you with it.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @DanNeely Great point. Using a text format means you might be able to skip building an editor, which can save valuable development time.

**Nate** (2 upvotes): @DanNeely A fair point, no reason you cannot use a text format to store lots of complicated data, but generally speaking, when your data is that complicated, the benefits of another format (binary, xml, etc) become more pronounced.

**Nate** (1 upvotes): Yes, if your game is simple, a text file might be sufficient; you need to keep in mind that anyone can edit a text file and thus make their own save games...

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/25967) — 42 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
