---
title: "How to handle a Sprite Class?"
description: "My answer to \"How to handle a Sprite Class?\" on Game Development"
date: 2010-09-23
author:
  name: Nate Bross
tags:
  - xna
  - c#
  - sprites
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/4056"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/4023):*

> Currently I am learning XNA and while playing around with some tutorials knowing what I am aiming for a game it made me think that the Sprite Class will be something very important and re-used a lot of times, not sure if I am mistaken or not with this thinking.
> 
> Bellow you can see the Sprite code I am using at the momment and I was wondering:
> 
> *   How a Sprite Class should be or what functions in general it should have or am I mistaken that the Sprite Class will not be used by every sprite in my game ?
> 
> For example, in my sprite I could hold all property of the sprite even if one property is not being used, let's say an object that does not move around so it would have no speed which I could simple have a property saying that speed is disabled.
> 
> So i guess my real question is:
> 
> *   **How should I structure my Sprite Class to have the best usage out of it ?**
> 
> If you have a sample code to show I would appreciate aswell not really necessary, just for reference (also it doesnt need to be in c#).
> 
> **Hope my question is not too confusing.**
> 
> ```
> using System;
> using System.Collections.Generic;
> using System.Linq;
> using Microsoft.Xna.Framework;
> using Microsoft.Xna.Framework.Content;
> using Microsoft.Xna.Framework.Graphics;
> 
> namespace MyGameTest
> {
>     class Sprite
>     {
>         public string AssetName;
> 
>         public Rectangle Size;
> 
>         private float mScale = 1.0f;
> 
>         public Vector2 Position = new Vector2(0, 0);
> 
>         public Vector2 Speed = new Vector2(0, 0);
> 
>         private Texture2D mSpriteTexture;
> 
>         public float Scale
>         {
>             get { return mScale; }
>             set
>             {
>                 mScale = value;
>                 Size = new Rectangle(0, 0, (int)(mSpriteTexture.Width * Scale), (int)(mSpriteTexture.Height * Scale));
>             }
>         }
> 
>         public void LoadContent(ContentManager theContentManager, string theAssetName)
>         {
>             mSpriteTexture = theContentManager.Load<Texture2D>(theAssetName);
>             AssetName = theAssetName;
>             Size = new Rectangle(0, 0, (int)(mSpriteTexture.Width * Scale), (int)(mSpriteTexture.Height * Scale));
>         }
> 
>         public void Draw(SpriteBatch theSpriteBatch)
>         {
>             theSpriteBatch.Draw(mSpriteTexture, Position,
>                                 new Rectangle(0, 0, mSpriteTexture.Width, mSpriteTexture.Height),
>                                 Color.White, 0.0f, Vector2.Zero, Scale, SpriteEffects.None, 0);
>         } 
>     }
> }
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

I have found the concepts and examples in Johnathan Harbor's book VB Game Programming with Direct X to be **very** useful when writing XNA and older MDX code. The book is OLD, and its in Visual Basic 6, but his examples do use encapsulation (since vb6 didn't support inheritance) but they best illustrate the concept of building a basic 'system' through classes - I'd recommend browsing through it in the bookstore or library just to get some of the ideas: [http://search.barnesandnoble.com/Visual-Basic-Game-Programming-with-DIRECTX/Jonathan-S-Harbour/e/9781931841252](http://search.barnesandnoble.com/Visual-Basic-Game-Programming-with-DIRECTX/Jonathan-S-Harbour/e/9781931841252) -- Thats not to say there are not any of these concepts well demonstrated on line or by other authors, but I know and can vouche for the ones in this book.

(This started as a comment but became too long pretty quickly)

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/4056) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
