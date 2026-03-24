---
title: "Moving my sprite in XNA using classes"
description: "My answer to \"Moving my sprite in XNA using classes\" on Game Development"
date: 2011-02-03
author:
  name: Nate Bross
tags:
  - xna
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/8060"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/8055):*

> Hey, im a newbie at this programming lark and its really frustrating me. I'm trying to move a snake in all directions while using classes. Ive created a vector2 for speed and ive attempted creating a method which moves the snake within the snake class.
> 
> Now I'm confused and not sure what to do next.
> 
> Appreciate any help. Thanks :D
> 
> This is what i've done in terms of the method...
> 
> ```
>   public Vector2 direction()
>         {
>                 Vector2 inputDirection = Vector2.Zero;
> 
>                 if (Keyboard.GetState().IsKeyDown(Keys.Left)) inputDirection.X -= -1;
>                 if (Keyboard.GetState().IsKeyDown(Keys.Right)) inputDirection.X += 1;
>                 if (Keyboard.GetState().IsKeyDown(Keys.Up)) inputDirection.Y -= -1;
>                 if (Keyboard.GetState().IsKeyDown(Keys.Down)) inputDirection.Y += 1;
> 
>                 return inputDirection * snakeSpeed;
> 
>         }
> 
> ```
> 
> Appreciate any help. Thanks :D
> 
> EDIT:  
> Well let me make everything clear. Im making a small basic game for an assignment. The game is similar to the old snake game on the old Nokia phones. I've created a snake class (even though I'm not sure whether this is needed because im only going to be having one moving sprite within the game). After I written the code above (in the snake class), the game ran with no errors but I couldn't actually move the image :(
> 
> EDIT2: Thanks so much for everyones responses!!

*I posted the following answer, which received 2 upvotes:*

I use code like this to move my sprites, it tends to work quite well for me, it also uses "GameTime" to ensure movement is consistent across frame-rates.

```
// Sprite Protecteds
Vector2 direction;
Vector2 position;
float speed;

// Sprite Code
void Update(GameTime time, KeyboardState kb)
{
    // reset to zero for no keys pressed
    direction = Vector2.Zero;

    if (Keyboard.GetState().IsKeyDown(Keys.Left)) direction.X = -1;
    if (Keyboard.GetState().IsKeyDown(Keys.Right)) direction.X = 1;
    if (Keyboard.GetState().IsKeyDown(Keys.Up)) direction.Y = -1;
    if (Keyboard.GetState().IsKeyDown(Keys.Down)) direction.Y = 1;

    position += direction * speed * time. Milliseconds;
}

// Game "Update" method (not sure of exact code here)
sprite.Update(gameTime, Keyboard.GetState());

```

Obviously you may want to provide more parameters to the sprite during its update process, so you may very the speed or other things as well.

<details>
<summary>Notable comments</summary>

**Bill** (3 upvotes): There should be giant red stickers all over every XNA tutorial to inform people of the use of GameTime to modify all frame-by-frame events that you want to be updated at a constant real-time rate to provide a consistent player experience regardless of hardware.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/8060) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
