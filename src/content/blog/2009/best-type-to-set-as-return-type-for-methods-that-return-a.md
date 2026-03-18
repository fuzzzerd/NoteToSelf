---
title: "Best Type to set as return type for methods that return a collection?"
description: "A question I asked on Stack Overflow"
date: 2009-10-20
author:
  name: Nate Bross
tags:
  - c#
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1596579"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1596579):*

Which is the best type to us for returning collections?

Should I use `IList<T>`, `IEnumerable<T>`, `IQueryable<T>`, something else? Which is best and **why**?

I'm trying to decide which I should use typically, both in the interface and the implementation of a few classes that I'm writing.

**edit** Let me nail this down a little further, I am using LINQ to SQL to return data over a WCF Service. It feels like that may make a change in the best type to use?

---

> [Mike Two answered](https://stackoverflow.com/a/1596608) (1 upvotes):
>
> I default to IEnumerable. I'm shooting for the minimal interface to expose. Both `IList<T>` and `IQueryable<T>` implement `IEnumerable<T>`. So unless you have other specific requirements for the methods I'd go for minimalism and use the least derived type. If you have other requirements in your calling code, such as performance of indexed lookups or getting the number of items in the collection then you might want to choose another type such as `ICollection<T>`.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): How then would the consumer use it? if the method returns IEnumerable<T> how does the consumer call that method and store the result? What concrete generic types use IEnumerable?

**Nate** (0 upvotes): Per the comment above, When using 'IEnumerable<T>' how does the consumer of my class use it? Just explict cast back to 'List<T>'?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1596579) — 15 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
