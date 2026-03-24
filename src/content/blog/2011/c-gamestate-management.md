---
title: "C++ GameState management"
description: "My answer to \"C++ GameState management\" on Game Development"
date: 2011-05-24
author:
  name: Nate Bross
tags:
  - c++
  - architecture
  - game-loop
  - state
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/12680"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/12664):*

> I have been attempting to make a game engine in C++ and have come across the dilemma of game state management. I have done a lot of research and found numerous ways of accomplishing from game engine with derived classes to using enums and I would like to know the most effective/efficient way of managing game states.
> 
> EDIT  
> I would like to know how other people implement their game state management, i.e. what you like the most and why you like it. Also, any tutorials/code examples that are generally about game state would also be much appreciated.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

In most of my games (that are all small in scope) I have used an `enum` and a `switch` (in some cases an `if..else if...`) and it has always been sufficiently fast. I've never had more than a few states, which helps.

```
enum GameStates
{
    Running = 1,
    Menu = 2,
    Credits = 3
}

// update loop

switch(this.CurrentState)
{
    case GameStates.Running:
        UpdateRunning(gameTime);
        break;
    case GameStates.Menu:
        UpdateMenu(gameTime);
        break;
    case GameStates.Credits:
        UpdateCredits(gameTime);
        break;
    // add more states here
}

void UpdateRunning(GameTime gameTime)
{
    if(running == null) LoadRunning(); // 
    // perform the rest of your game logic
}

```

This gives you a few things worth mentioning:

1.  You can change state anywhere, as long as you have a pointer to your main class.
2.  You can load/unload as necessary to save memory (if your game is big it might be nice)
3.  _**You've kept your very simple and easy to follow. This is the single most important thing a programmer can do IMO.**_

(Please excuse my C#/XNA style this was copy/pasted and tweaked, shouldn't be to hard to adapt to C++)

<details>
<summary>Notable comments</summary>

**Ali1S232** (4 upvotes): if you define a class for each state, it'll help you organize your code and also let you to define `OnEnter` and `OnExit` events for every event, very useful for loading unloading unnecessory data.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/12680) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
