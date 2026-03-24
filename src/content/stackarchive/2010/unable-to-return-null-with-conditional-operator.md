---
title: "Unable to return null with conditional (?:) operator"
description: "My answer to \"Unable to return null with conditional (?:) operator\" on Stack Overflow"
date: 2010-12-03
author:
  name: Nate Bross
tags:
  - c#-4.0
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4348986"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4348948):*

> I've got a method that whose return type is a nullable int.
> 
> ```
>  private int? LookupId(string name, string stateAbbreviation)
> 
> ```
> 
> I'm trying to cleanup the code and decided to use a conditional operator on the return statement.
> 
> ```
> return id != 0 ? id : null;
> 
> ```
> 
> Basically, if the id is not 0, go a head and return the id. It should never return 0 from the db. If, by chance, it is 0, return null.
> 
> The error is "Type of conditional expression cannot be determined because there is no implicit conversion between 'int' and '' "
> 
> The conditional op is intended to replace a functioning If...Else statement.
> 
> Is there anything wrong with trying to use a conditional this way, in this combination? What am I missing?

*I posted the following answer, which received 12 upvotes:*

Try `return id != 0 ? Id : (int?)null;` ?

<details>
<summary>Notable comments</summary>

**Joel Rondeau** (3 upvotes): Funny enough, `return id != 0 ? (int?)Id : null;` also works.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4348986) — 12 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
