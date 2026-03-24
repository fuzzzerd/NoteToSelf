---
title: "C# how to override like this?"
description: "My answer to \"C# how to override like this?\" on Stack Overflow"
date: 2011-07-27
author:
  name: Nate Bross
tags:
  - c#
  - overriding
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6851221"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6851169):*

> the code below is saying a() cannot override a() as wee.a() is not marked virtual, abstract or override. Is there a a way around this? I need to have code inside the super method, but still want to override it!
> 
> ```
> public abstract class wee
> {
>   public void a()
>   {
> 
>   }
> }
> public class dee : wee
> {
>   public override void a()
>   {
>   }
>   public void b()
>   {
>   }
> }
> 
> ```

*I posted the following answer, which received 1 upvote:*

Mark `wee.a()` as [virtual](http://msdn.microsoft.com/en-us/library/9fkccyh4%28v=VS.80%29.aspx) -- it allows you to provide a base implementation but gives the option to override that behavior in subclasses if needed.

```
// wee
public virtual void a() { // do stuff for base implementation }

// dee
public override void a() { // override behavior implemenation }

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6851221) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
