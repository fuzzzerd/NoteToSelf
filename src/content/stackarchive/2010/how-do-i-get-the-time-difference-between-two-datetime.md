---
title: "How do I get the time difference between two DateTime objects using C#?"
description: "My answer to \"How do I get the time difference between two DateTime objects using C#?\" on Stack Overflow"
date: 2010-05-12
author:
  name: Nate Bross
tags:
  - c#
  - datetime
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2821066"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2821040):*

> How do I get the time difference between two `DateTime` objects using C#?

*I posted the following answer, which received 35 upvotes:*

What you need is to use the [DateTime](http://msdn.microsoft.com/en-us/library/system.datetime\(VS.90\).aspx) classs Subtract method, which returns a [TimeSpan](http://msdn.microsoft.com/en-us/library/system.timespan\(VS.90\).aspx).

```
var dateOne = DateTime.Now;
var dateTwo = DateTime.Now.AddMinutes(-5);
var diff = dateTwo.Subtract(dateOne);
var res = String.Format("{0}:{1}:{2}", diff.Hours,diff.Minutes,diff.Seconds));

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2821066) — 35 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
