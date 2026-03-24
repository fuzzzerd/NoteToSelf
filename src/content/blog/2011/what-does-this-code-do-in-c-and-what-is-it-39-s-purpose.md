---
title: "What does this code do in c# and what is it&#39;s purpose?"
description: "My answer to \"What does this code do in c# and what is it&#39;s purpose?\" on Stack Overflow"
date: 2011-07-21
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - properties
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6783348"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6783343):*

> ```
>  public class A {
>     public Par mParams;
>     public Par Parameters {
>         get { return mParams; }
>         set { mParams = value; }
>     }
> }
> 
> ```
> 
> I am new to c#
> 
> What is `public Par Parameters`? This seems neither a class or a function. Confused here.

*I posted the following answer, which was chosen as the accepted answer and received 9 upvotes:*

Think of it like a `public Par getParameters()` and `public void setX(Par p)` method in Java. So, it is closest to a "function" but it is actually called Property. You can use it like this:

```
A myObject = new A();
a.Parameters = new Par(...);

```

This is a property which is backed by a public field, in this case, it is somewhat redundant, mParms should be declared as `protected` or `private`.

I recommend that you review this [MSDN Programming Guide](http://msdn.microsoft.com/en-us/library/x9fsa0sw.aspx) on Properties. It explains quite well, how they work and what they're used for.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6783348) — 9 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
