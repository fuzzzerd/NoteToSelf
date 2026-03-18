---
title: "IEnumerable.Single is throwing an exception"
description: "My answer to \"IEnumerable.Single is throwing an exception\" on Stack Overflow"
date: 2011-08-25
author:
  name: Nate Bross
tags:
  - c#
  - entity-framework
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7196273"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7196165):*

> I have the following code which uses Entity Framework:
> 
> ```
> g_getWidgets = from getWidgets in g_libraryEntities.GET_Widgets() select getWidgets;
> .
> .
> .
> IQueryable<GET_Fragments_Result> iqueryable = g_getWidgets.AsQueryable<GET_Widgets_Result>();
> var nameValueObject = from nv in iqueryable where nv.ID == int.Parse(key) select nv;
> widget = nameValueObject.Single();
> 
> ```
> 
> The `widget = nameValueObject.Single();` line throws an exception saying "`The result of a query cannot be enumerated more than once.`
> 
> What is the proper way to perform this function? I just want to to return an item with the proper ID.

I would recommend using `SingleOrDefault` instead of `FirstOrDefault`.

> **Enumerable.FirstOrDefault()**
> 
> Returns the first element of a sequence, or a default value if the sequence contains no elements.
> 
> Source: [http://msdn.microsoft.com/en-us/library/bb340482.aspx](http://msdn.microsoft.com/en-us/library/bb340482.aspx)

This means that if there are more than one match, only the first one found will be returned.

> **Enumerable.SingleOrDefault()**
> 
> Returns the only element of a sequence, or a default value if the sequence is empty; this method throws an exception if there is more than one element in the sequence.
> 
> Source: [http://msdn.microsoft.com/en-us/library/bb342451.aspx](http://msdn.microsoft.com/en-us/library/bb342451.aspx)

This means that if there is more than one match an exception is thrown. This is useful if having duplicate entries is a data violation.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7196273) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
