---
title: "Casting to List(Of T) in VB.NET"
description: "My answer to \"Casting to List(Of T) in VB.NET\" on Stack Overflow"
date: 2010-10-22
author:
  name: Nate Bross
tags:
  - vb.net
  - generics
  - casting
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4001189"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4001179):*

> In C# it's possible to cast to `List<T>` - so if you have:
> 
> ```
> List<Activity> _Activities;
> List<T> _list;
> 
> ```
> 
> The following will work:
> 
> ```
> _list = _Activities as List<T>;
> 
> ```
> 
> but the translated line with VB.NET which is:
> 
> ```
> _list = TryCast(_Activities, List(Of T))
> 
> ```
> 
> throws a compilation error. So I've had a good hunt around and experimented with LINQ to find a way round this to no avail. Any ideas anyone?
> 
> Thanks
> 
> Crispin

*I posted the following answer:*

I always use `DirectCast(object, type)`

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4001189) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
