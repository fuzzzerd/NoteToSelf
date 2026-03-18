---
title: "How I could remove leading zeros in string C# WPF"
description: "My answer to \"How I could remove leading zeros in string C# WPF\" on Stack Overflow"
date: 2009-12-29
author:
  name: Nate Bross
tags:
  - c#
  - string
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1976443"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1976403):*

> After I convert a decimal value `salePr` to string, using following code:
> 
> ```
> decimal salePr;
> string salePrStr;
> ...
> salePrStr = (salePr).ToString("0000.00");
> '''
> 
> ```
> 
> I'd like to get rid of leading zeros (in case result is <1000).
> 
> What is right and the best way to do this operation?

It looks like you are trying to display currency, if you want to display it as currency, try `salePrStr = String.Format("{0:C}", salePr)` otherwise use the format `0.00`

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1976443) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
