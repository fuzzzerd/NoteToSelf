---
title: "Is it possible to render controls inside controls in XNA?"
description: "My answer to \"Is it possible to render controls inside controls in XNA?\" on Game Development"
date: 2013-09-06
author:
  name: Nate Bross
tags:
  - xna
  - sprites
  - rendering
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/61847"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/61832):*

> I want to know if there is an easy way to render sprites in XNA inside other sprites or something similar (I don't know if sprite is the best or unique way to draw in XNA). For example, I want to draw an object called SCENE that defines a rectangle. Inside the rectangle there are some SQUARES. I'd like to code something to draw all the SQUARES when the SCENE are draw. At the same time, if I draw the SQUARES on the SCENE, the movement of the SQUARES are limited by the SCENE size.
> 
> Is this possible in XNA?
> 
> I did this with Pygame and is very easy to make.
> 
> Thanks in advance.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

The way that you would do this would be to use the power of C# and create some objects.

You would create a Scene object, that would have a Square object, which internally would have a collection of Squares inside it.

The `.Draw()` method of Scene would know it had to draw its own background, as well as tell the Square object to draw itself and all its children.

This is relatively easy with C#, extremely common, and probably the most simple way to do what you just mentioned in your post. A quick sample you might start with:

```
public class Scene 
{
    public Texture2D background;
    public SquareList Square;

    public class SquareList : List<Square>
    {
        List<Square> Items;
        public void Draw(SpriteBatch batch) 
        {
            foreach(var item in items) 
            {
                // store position of each item instead of hardcode
                batch.Draw(item, new Vector2(0,0), Color.White); 
            }
        }
    }
    public class Square
    {
        Texture2D myTexture;
    }
    public void Draw(SpriteBatch batch) 
    {
        batch.Draw(background, new Vector2(0,0), Color.White);
        Square.Draw(batch);
    }
}

```

In this case, containment seems to make the most since, but you may want to have some of your objects inherit from a common base, such as "Sprite" or similar. It is beyond the scope of a single answer on this site to explain all of that. I recommend that you review some of the XNA sample code and see how they do things, and come back and ask us specific questions when you get stuck.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/61847) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
