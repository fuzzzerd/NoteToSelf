---
title: "How do I ensure the value of property for others that are dependent upon it?"
description: "My answer to \"How do I ensure the value of property for others that are dependent upon it?\" on Stack Overflow"
date: 2010-10-06
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc-2
  - properties
  - getter-setter
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3875311"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3875296):*

> I have a property like so:
> 
> ```
> private Decimal _payout; 
> public Decimal PayoutValue
>     {
>         get { return _payout; }
>         set
>         {
>             _payout = value;
> 
>             //second part of following conditional is an enum
>             if (Math.Abs(value) > 1 && this.PayoutType == CutType.Percent)
>             {
>                 _payout /= 100;
>             }
>         }
>     }
> 
> ```
> 
> As you can see, it is dependent upon the value of `PayoutType`, which is just a simple enum property:
> 
> ```
> public CutType PayoutType { get; set; }
> 
> ```
> 
> My problem is that `PayoutType` doesn't seem to get set before `PayoutValue` is set, so the conditional below is never true. How do I force the `PayoutType` to be set before `PayoutValue` is evaluated?
> 
> Thanks.
> 
> **UPDATE** Thanks for your answers guys. I guess I should have mentioned that most of the time this object is bound via DataContexts or from an Http.Post from my client side (MVC project), so I don't really have any constructors. Is there any other way, or should I start getting creative with my programming?

All "required" properties should be in the constructor of your class.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3875311) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
