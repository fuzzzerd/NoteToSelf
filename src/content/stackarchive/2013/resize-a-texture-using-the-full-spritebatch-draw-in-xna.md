---
title: "Resize a texture using the full SpriteBatch.Draw in XNA"
description: "My answer to \"Resize a texture using the full SpriteBatch.Draw in XNA\" on Game Development"
date: 2013-05-29
author:
  name: Nate Bross
tags:
  - xna
  - rendering
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/56456"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/55856):*

> I'm using the full Spritebatch.Draw function to draw my explosion sprite since I also need rotation. I am using the Scale value to resize my texture, but I can't get it to be accurate.
> 
> I want to be able to set the textures Size to a specific pixel size, width/height are exactly the same. Say the texture is 128x128, and I want to resize it to be 23x23.
> 
> Heres my current code:
> 
> ```
>   Vector2 Scale = new Vector2((float)sprite.Area.Width / (float)sprite.Texture.Width, (float)sprite.Area.Height / (float)sprite.Texture.Height);
>             spriteBatch.Draw(sprite.Texture, sprite.Position, null, sprite.Color * sprite.Alpha, (float)Math.Atan2(sprite.Angle.Y, sprite.Angle.X), new Vector2(sprite.Area.Width / 2, sprite.Area.Height / 2), Scale, SpriteEffects.None, 0f);
> 
> ```
> 
> I have the Area set to be the size I want it at, however the Draw function seems to not be drawing it to the exact size.

*I posted the following answer, which received 2 upvotes:*

Since it looks like you are using the `Scale` parameter, you will need to calculate the correct scale value based on the original and target size. Since the `Scale` parameter is a float, and not a pixel size, you'll need to calculate the percentage your target is of your source.

> If your resource is 128x128, and you draw at scale `1.0f`, your output will be 128x128.
> 
> If your resource is 128x128, and you draw at scale `0.5f`, your output will be 64x64.
> 
> If your resource is 128x128, and you draw at scale `0.179f`, your output will be 23x23 (rounding may make this slightly different, adjust scale accordingly.

The formula for uniform scaling as you are asking, would be `Scale = TargetSize/SourceSize`.

For additional information, and alternate approaches (i.e. using a destination rectangle instead of a scaling factor) see [this MSDN article](http://msdn.microsoft.com/en-us/library/bb194913.aspx).

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/56456) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
