---
title: "Going fullscreen without stretching in an XNA game"
description: "My answer to \"Going fullscreen without stretching in an XNA game\" on Game Development"
date: 2011-01-24
author:
  name: Nate Bross
tags:
  - xna
  - c#
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/7686"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/7680):*

> I've got a 2D game that I'm working on that is in a single aspect ratio. When I switch it to fullscreen mode on my widescreen monitor it stretches. I tried using two viewports to give a black background to where the game shouldn't stretch to, but that left the game in the same size as before. I couldn't get it to fill the viewport that was supposed to hold the whole game.
> 
> How can I get it to go fullscreen without stretching and without me needing to modify every position and draw statement in the game?

*I posted the following answer, which received 2 upvotes:*

From: [http://forums.create.msdn.com/forums/p/58545/358858.aspx](http://forums.create.msdn.com/forums/p/58545/358858.aspx) (emphasis mine)

> There is a very simple answer to your question: **your monitor is a widescreen monitor, if you set a non-widescreen resolution to it, it will have to stretch the output to give you an image**. Some graphics adapters and some screens provide a '4:3 in wide' mode which destretches for you.
> 
> However if you want your game to always look right and not be stretched you have todo the following:
> 
> *   Render to a rendertarget instead of to the screen directly
> *   Get the texture from the render target
> *   Clear the screen to black
> *   Start a spritebatch and render your texture at the correct aspectratio on screen scale it by using an overload that uses the targetRectangle, this way you have automatic black borders either above or on the sides.
> 
> This should be be realy easy to implement :)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Exactly, there isn't an automatic way to do this for 2D -- you need to render on something besides the screen, then render that to the screen.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/7686) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
