---
title: "How to get a distinct list in Entity Linq to SQL"
description: "My answer to \"How to get a distinct list in Entity Linq to SQL\" on Stack Overflow"
date: 2016-10-25
author:
  name: Nate Bross
tags:
  - c#
  - sql
  - entity-framework
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/40244379"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/40244173):*

> I have a generic object table where each entry has a Key and version. So you might have
> 
> ```
> Object 1, version 1  
> Object 1, version 2  
> Object 1, version 3  
> Object 2, version 1  
> Object 2, version 2
> 
> ```
> 
> How can I request to return the highest version of each object, ie return version 3 of object 1 and version 2 of object 2? I can't work out how to use a Distinct query as the objects do not match, they have different versions, I want the highest version number of each object
> 
> This is my query so far
> 
> ```
>  var dbObjects = _objectStoreRepository.GetDataObjects().OrderByDescending(d => d.Version).Where(d =>
>                     d.ObjectKey.ToLower().Contains(objectKey) &&
>                     ((d.Status.ToLower() == request.Status.ToLower()) || string.IsNullOrEmpty(request.Status)) &&
>                     d.CreatedAt <= request.AsAtTime).ToList();
> 
> ```
> 
> But this returns all versions of each matching object, not just the highest version

You will want to use a [.GroupBy](https://msdn.microsoft.com/en-us/library/system.linq.enumerable.groupby\(v=vs.110\).aspx) with a Select:

```
var results = _objectStoreRepository
    .GetDataObjects()
    .Where(d 
        => d.ObjectKey.ToLower().Contains(objectKey) 
        && ((d.Status.ToLower() == request.Status.ToLower()) || string.IsNullOrEmpty(request.Status)) 
        && d.CreatedAt <= request.AsAtTime)
    .GroupBy(o => o.ObjectKey)
    .Select(g => g.OrderBy(x => x.Version).LastOrDefault())
    .ToList();

```

First you group the results by common "key" then once those are grouped we order the results inside that group by the version and take the last or default. You may need to change the Select/OrderBy to fit your exact data.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/40244379) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
