---
title: ".NET Generic List&lt;T&gt; Problem, works by design, need work around. Add value instead of reference"
description: "A question I asked on Stack Overflow"
date: 2009-08-19
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - generics
  - generic-programming
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1297286"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1297286):*

I have a `List<T>` and I need to avoid the behavior I'm about to outline:

```
    // assume cls and numberToAdd are parameters passed in.
    int pos = numberToAdd;
    List<MyClass> objs = new List<MyClass>(numberToAdd);

    for(int i = 0; i < numberToAdd; i++)
    {
        objs.Add(cls);
        objs[i].X = -((pos * cls.Width) + cls.Width / 2);
        pos--;
    }

    Console.WriteLine(objs[0].X + "\r\n" + objs[1].X);

```

This results in this writeline printing the same value.

Basically what I need is to change the behavior of the "Add" method. I'd like to add a new instance of the object with the same values and not simply a reference to the same object. I understand this will use alot more memory.

---

> [Noon Silk answered](https://stackoverflow.com/a/1297291) (1 upvotes):
>
> What is the 'cls' variable? Just create a new one inside each loop. What you want to do is clone it; but honestly that'll be confusing. I'd suggest just creating a new one per loop.
> 
> \-- Edit
> 
> Noticed you'd comment about 'cls'.
> 
> I suggest you clone it then (assuming you can't change the call and do my above suggestion). Do this by just creating a new one, and copying all the properties over.
> 
> Typically, if you have control of the Type of 'cls', you just make a 'Copy' constructor. It's like so:
> 
> ```
> class Foo {
>     private int x;
> 
>     public Foo (Foo toCopy) {
>        this.x = toCopy.x;
>     }
> 
>     ...
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1297286) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
