---
title: "What is the proper method to format dates?"
description: "My answer to \"What is the proper method to format dates?\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5199487"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5199466):*

> I have some `DateTime`s in my model. I only want to extract the date in a particular view.
> 
> By formatting the data in my view instead of my model, I can give other views the flexibility to use `DateTime` or just `Date`.
> 
> How can I go about formatting my `DateTime` in a View?

You could do

```
dateTime.ToShortDateString();

```

Or

```
dateTime.ToString("{0:d}");

```

Or

```
dateTime.ToString("MM/dd/yyyy");

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5199487) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
