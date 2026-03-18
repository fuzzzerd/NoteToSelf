---
title: "Sorting by column name string"
description: "My answer to \"Sorting by column name string\" on Stack Overflow"
date: 2009-06-12
author:
  name: Nate Bross
tags:
  - .net
  - silverlight
  - sorting
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/988811"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/988799):*

> I have an observable collection. I want to use linq to sort it. I have the propertyname of the property I want to sort (as a string) for my type.
> 
> What is the best/fastest way to do this?
> 
> Different propertyname strings will be passed into the function

I have only ever been able to do this through reflection.

```
var v = YouList.OrderBy(t => t.GetType().InvokeMember(sField,
    System.Reflection.BindingFlags.GetProperty,
    null,
    t,
    null)
).ToList());

```

I'm assuming the same code will work for an ObservableCollection...

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/988811) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
