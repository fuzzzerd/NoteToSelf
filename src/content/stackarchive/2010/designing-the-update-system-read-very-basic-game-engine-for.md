---
title: "Designing the Update system (read very basic game engine) for an XNA game"
description: "A question I asked on Game Development"
date: 2010-12-01
author:
  name: Nate Bross
tags:
  - xna
  - architecture
  - game-loop
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/q/6132"
---

*I [asked this on Game Development](https://gamedev.stackexchange.com/q/6132):*

I am trying to determine the best way to implement the "update" system or engine for a simple XNA game.

## **Description of situation**

I have a few classes, lets call them:

1.  Player \[will be an array/list/collection of 1-4 local players\]
2.  Enemy \[will consist of all enemy characters in the given "zone"\]
3.  Future \[not implemented, may not be implemented for this game, but may be needed in future\]
4.  Future

I'm trying to decide what the best way to manage this will be, I'm going back and forth between a couple options.

## **First Approach**

In the `Update()` method of my game, write code like this:

```
void Update(GameTime gameTime)
{
    var ctlInput = GetControllerInput();
    for(int i = 0; i < 4; i++)
    {
        if(Player[i] != null) { Player[i].Update(gameTime, ctlInput); }
    }

    for(int i = 0; i < Enemy.Count; i++)
    {
        Enemy[i].Update(gameTime, Player);
    }
}

```

In this version, I would add "FrameStatus" fields to the Player class, which would look like `bool IsShooting` and `Vector2 TargetedLocation` etc. This also means that each class would be responsible for knowing how to update itself in the game world.

In my eyes, the advantages of this approach are:

1.  No new classes.
2.  Classes become self-documenting
3.  Easy to extend and add additional properties

but the disadvantages are:

1.  Order of code in Game.Update is very important
2.  Tight coupling of Player and Enemy classes

## **Second Approach**

Implement a type of UpdateManager class, which accepts the user input, and it alone updates the Player and Enemy classes. This would relegate the Player and Enemy classes to simply dumb-data classes, and they wouldn't necessarily have any game logic in them at all.

```
void Update(GameTime gameTime)
{
    var ctlInput = GetcontrollerInput();
    updateManager.Update(gameTime, ctlInput);
}

```

The advantages of this approach, in my eyes, are:

1.  Keeps code away from Game.Update()
2.  Doesn't require Player and Enemy classes to know about each other at all

Disadvantages as I see it:

*   Adds a new class to my game
*   The new class, will have a lot of code as time goes on and more types of objects enter the game world

## **Actual Question**

Of the pro/cons I've come up with for my two approaches,

*   do you think I've missed any, what are they?
*   which makes you lean for or against an approach, why?

Which approach would you take, and also why would you go that route? Would you elect for a third option? What would that option look like?

---

> [Tetrad answered](https://gamedev.stackexchange.com/a/6134) (6 upvotes):
>
> Well there are a couple of assumptions about your first approach that I don't think are entirely accurate.
> 
> 1) Enemy and Player being tightly coupled.
> 
> Why is that, specifically? Could an event system solve some of the coupling issues? Could intermediary classes (i.e. your world/level/whatever container class) handle some of the logic? I mean, sure, if you want your enemies to start behavior X if the player is shooting then the easiest thing to do is just query the player directly, but there are ways around that. There are lots and lots of articles/papers/books on how to decouple classes, so I won't go into too much detail here.
> 
> That being said, I don't necessarily think coupling is something to be avoided at all costs. If your _design_ is coupled, then having a few coupled classes here and there isn't going to hurt too much. Doing things like having delegates just to avoid having your class "know about" another class to call a function doesn't really help much except compile times.
> 
> 2) The order of things in Update is very important
> 
> This is a similar assumption as the coupling. I've worked with games in the past where my code looked a lot like what you had in your first code. I've also started working with Unity recently where _everything_ is a game object, the code you write is all components on those game objects, and the order of updates for everything in the world is non-deterministic. It's entirely possible to write code where order doesn't matter that much, although to be fair Unity does provide a LateUpdate pool for things that need to happen after everything else. This is mainly used for things like moving the camera after the player moves to make sure everything doesn't feel jittery, but in the general case I really don't care which update method is called first.
> 
> For both of those assumptions I think you could ask specific questions on "how do I decouple these two classes given this situation" and get some answers. I can't just give you a blanket "here do this" answer.
> 
> If you remove those assumptions I think you'll find the first option looks a lot more lucrative.
> 
> * * *
> 
> Definitely stay away from option 2 though. That just feels like a blob class if you try to shove everything in some kind of global "world manager". Some data-driven-design people might come to its defense, but object-oriented-design people hate it. I've personally never done it that way but I can imagine it getting pretty out of hand with any amount of complexity if you go into it without proper structure and delegation of responsibilities in one way or another.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I agree, that there are plenty of cases where it is the right choice, but I generally try to avoid adding extra code.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/q/6132) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
