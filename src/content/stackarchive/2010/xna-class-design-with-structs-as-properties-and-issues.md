---
title: "XNA Class Design with Structs as Properties and issues because they are value types and not reference types"
description: "A question I asked on Stack Overflow"
date: 2010-03-23
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - xna
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2497396"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2497396):*

I'm wondering how you'd recommend designing a class, given the fact that XNA Framework uses Struct all over the place?

For example, a spite class, which may require a Vector2 and a Rectangle (both defined as Struct) to be accessed outside of the class.

The issue come in when you try to write code like this:

```
class Item 
{
    public Vector2 Position {get; set;}
    public Item() { Position = new Vector2(5,5); }
}

Item i = new Item();
i.Positon.X = 20; // fails with error 'Cannot modify the return value of Item because it is not a variable.'

// you must write code like this
var pos = i.Position;
pos.X++;
i.Position = pos;

```

The second option compiles and works, but it is just butt ugly. Is there a better way?

---

> [Joel Martinez answered](https://stackoverflow.com/a/2502539) (6 upvotes):
>
> Or, just to throw this out there ... just expose the field. There's nothing inherently wrong with exposing a public field.
> 
> For example, if your entity exposes a Vector3 for it's position so that other things can use that value in their own calculations ... just expose it. Otherwise, if no other class or entity needs to know the position, do not expose it at all :-)
> 
> Here is some sage advice from [Rico Mariani](http://blogs.msdn.com/ricom/archive/2006/08/31/733887.aspx):
> 
> > Generally, my feeling is that properties are highly overrated and fields terribly under-utilized. Did I mention that not everyone agrees with this position? :)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2497396) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
