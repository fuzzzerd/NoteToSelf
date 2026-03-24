---
title: "Render a section of an image to a Bitmap C# Winforms"
description: "My answer to \"Render a section of an image to a Bitmap C# Winforms\" on Stack Overflow"
date: 2009-05-07
author:
  name: Nate Bross
tags:
  - c#
  - winforms
  - xna
  - image-manipulation
  - textures
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/837440"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/837423):*

> I'm working on a Map Editor for an XNA game I'm designing in my free time. The pieces of art used in the map are stored on a single texture and rectangles are stored with coordinates and widths etc.
> 
> In the winforms application I can add segments by selecting the segment I want from a listbox, which is populated from the array of possible segments.
> 
> Problem is I would like to be able to show a preview of the segment selected and, since it is stored on a common texture, I cant simply set a picturebox to display the image.
> 
> Is there anyway of using the rectangle information (.x, .y, .width, .height) to display only the section of the image in a picturebox, or to blit the section to a bitmap and display that?
> 
> Many Thanks
> 
> Michael Allen

*I posted the following answer:*

You can use Graphics.DrawImage() and that will accept a Rectangle.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/837440) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
