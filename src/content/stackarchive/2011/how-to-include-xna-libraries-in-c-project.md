---
title: "how to include XNA libraries in C# project?"
description: "My answer to \"how to include XNA libraries in C# project?\" on Stack Overflow"
date: 2011-06-01
author:
  name: Nate Bross
tags:
  - c#
  - xna
  - libraries
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6204291"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6204272):*

> I am trying to make a C# game. I want to include XNA libraries there (e.g. Microsoft.XNA.Framework.Graphics). But, if I do so, I get an error :
> 
> The type or namespace XNA doesnot exist in the namespace Microsoft.
> 
> Can anyone please help ?

First, you need to add a reference to the XNA binary files. Second, I recommend you start off with the Built-In Visual Studio XNA Game Template, and work from there.

To add the references manually, you'll (probably need [XNA Game Studio](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=9ac86eca-206f-4274-97f2-ef6c8b1f478f) installed) and then add references to `Microsoft.Xna.Framework.dll` and whatever else you need.

Personally, I still think you should start with the built-in visual studio template for a Game. Once you get a feel for it, move on to advanced concepts like embeding your game into a standard WinForm app or whatever.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6204291) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
