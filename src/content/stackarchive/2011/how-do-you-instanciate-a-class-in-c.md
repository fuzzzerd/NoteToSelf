---
title: "how do you instanciate a class in c#?"
description: "My answer to \"how do you instanciate a class in c#?\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - object
  - xna
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5196886"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5196781):*

> I am making a game for the Windows Phone using XNA framework C#.
> 
> The main player in the game has to shoot. I have a bullet class, but how do you instantiate that bullet everytime the user clicks on the screen?
> 
> The bullet class basically draws itself and has a function called "Shoot", this is used for the bullet to move in the direction of the player.
> 
> I am a noob at c# xD

If you're having trouble instantiating a class, I presume you're also not familiar with the Content Pipeline either, so assuming a basic bullet structure, I'd do something like this:

To load a Texture2D use code like this:

```
var tx = this.Content.LoadContent<Texture2D>("TextureYouAddedAsContent");

```

I presume your Bullet class has a constructor which takes a Texture2D and other parameters, use code like this to instantiate it:

```
int speed = 500;
Vector2 pos = new Vector2(50, 50); // start at 50, 50, top left
Vector2 dir = new Vector2(1, 0); // direction is in positive X direction
Bullet bullet = new Bullet(tx, pos, dir, speed);

```

Also, checkout [http://GameDev.StackExchange.com](http://GameDev.StackExchange.com), and specifically this [question](https://gamedev.stackexchange.com/questions/9297/when-should-a-bullet-texture-be-loaded-in-xna).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5196886) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
