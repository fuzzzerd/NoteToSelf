---
title: "Basic LINQ query to check if string occurs within a list"
description: "My answer to \"Basic LINQ query to check if string occurs within a list\" on Stack Overflow"
date: 2015-03-05
author:
  name: Nate Bross
tags:
  - c#
  - linq
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/28883029"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/28882960):*

> I have a list MyGroups and a string 'AllowedGroups'.
> 
> For example I have string in MyGroups.Name = "Admin Only" and AllowedGroups ="Admin Only, Normal Group". I can't understand why the following expression evaluates to false when it should be true:
> 
> ```
> model.MyGroups.Any(m => m.Name.Contains(AllowedGroups)
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 6 upvotes:*

I think what you need, based on the information you've provided, is the opposite of what you have.

Something like this:

```
var allowedGroupsArray = AllowedGroups.Split(',');
var result = model.MyGroups.Any(m => allowedGroupsArray.Contains(m.Name));

```

Specifically, using `Array.Contains()` inside the `.Any()` call should generate basically a `WHERE ... IN` type clause in your SQL.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/28883029) — 6 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
