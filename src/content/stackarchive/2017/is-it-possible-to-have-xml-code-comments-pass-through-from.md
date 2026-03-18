---
title: "Is it possible to have XML Code Comments pass through from an Interface to the Implementing class while using `var` syntax?"
description: "A question I asked on Stack Overflow"
date: 2017-11-24
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - visual-studio
  - comments
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/47479320"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/47479320):*

Imagine the following code

```
public interface IFoo 
{
    /// <summary>
    /// Gets bar
    /// </summary>
    string Bar();
}

public class Foo : IFoo // fixed, as a miss from my simplified example for SO
{
    public string Bar() { return "Bar"; }
}

```

Visual Studio correctly shows the code comments in the intellisense popup when you code like this:

```
IFoo instance = new Foo(); // shows what is in IFoo

```

but if you use the `var` syntax it does not show the code comments from the interface

```
var instance = new Foo(); // only shows what is in class Foo

```

In an attempt to remediate this, I've tried throwing a `<see>` tag into the summary on class Foo which points to interface IFoo, however this doesn't work.

Is there a tag/way to allow the interface comments to pass through in all use cases?

For what its worth, I did read/review [this question on a similar topic](https://stackoverflow.com/q/1875440/86860), providing two different comments isn't realistic for every method in every case (often they're one and the same, used only for injection and testing) so providing different flavor comments on both wont work, at least not for all cases.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/47479320) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
