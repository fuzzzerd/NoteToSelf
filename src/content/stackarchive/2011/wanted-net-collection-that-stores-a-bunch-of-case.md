---
title: "Wanted: .Net collection that stores a bunch of case insensitive strings fast and efficient"
description: "My answer to \"Wanted: .Net collection that stores a bunch of case insensitive strings fast and efficient\" on Stack Overflow"
date: 2011-01-14
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - collections
  - generics
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4695351"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4695288):*

> I'm looking for a simple collection that will store a bunch of strings in **a case insensitive** way. I need at least a `Contains()` and `Remove()` method to see if a certain string is present and to remove that string.
> 
> I've tried `List<string>` but that one is case sensitive. I need could use a case insensitive `Dictionary<TKey, T>`, but that "feels" like a waste of space. Doing a `ToLower()` on each string is a waste of performance.
> 
> Does anyone know what kind .Net collection I should use?

*I posted the following answer:*

Write your own `Contains()` and `Remove()` methods, which perform the case insensitve comparison.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Guess I missed the point in the OPs question about speed. I must have been posting my solution at the same time you were posting yours. I guess I'll ammend the comment, "It isn't faster."

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4695351) — -1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
