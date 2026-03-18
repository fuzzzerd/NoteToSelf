---
title: "C#: Nested conditionals vs continue statement"
description: "My answer to \"C#: Nested conditionals vs continue statement\" on Stack Overflow"
date: 2010-07-26
author:
  name: Nate Bross
tags:
  - c#
  - resharper
  - nested-loops
  - continue
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3338185"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3338147):*

> In using ReSharper recently, it is suggesting I reduce nesting in certain places by inverting `if` conditions and using the `continue` statements.
> 
> **nested conditionals:**
> 
> ```
> foreach(....)
> {
>     if(SomeCondition)
>     {
>         //do some things
> 
>         if(SomeOtherNestedCondition)
>         {
>             //do some further things
>         }
>     }
> }
> 
> ```
> 
> **continue statements:**
> 
> ```
> foreach(....)
> {
>     if(!SomeCondition) continue;
> 
>     //do some things
> 
>     if(!SomeOtherNestedCondition) continue;
> 
>     //do some further things
> }
> 
> ```
> 
> I understand some of the logic of why you'd want to reduce nesting for performance and memory issues as well as how the two snippets equate to each other, however from my development background, the _before_ example is easier to follow when reading the code.
> 
> Which approach do you prefer and why? Do you use `continue` over nested ifs in your everyday code?

With the `continue` style code; how would you handle a third operation that isn't dependent on SomeOtherNestedCondition, this makes the order of the code important which IMO makes it less maintainable.

For example:

```
foreach(....) 
{ 
    if(!SomeCondition) continue; 

    //do some things 

    if(!SomeOtherNestedCondition) continue; 

    //do some further things 

    if(!SomeSecondNonNestedCondition) continue;

    // do more stuff
}

```

What happens when SomeOtherNestedCondition causes the `continue;` to happen, but SomeSecondNonNestedCondition should still execute?

I would refactor out each bit of "code" and use nested `if()`s to call each refactored method, and I'd keep the nested structure.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Clearly the order is important, but in my example, if SomeSecondNonNestedCondition should execute, in the event that SomeOtherNestedCondition is false it will not. This may or may not be intended behavior, since SomeSecondNonNestedCondition isn't dependent on SomeOtherNestedCondition.

**Nate** (0 upvotes): Maybe I articulated my point poorly, but I think KP got the main point, that sometimes theres too much going on to use the `continue` design.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3338185) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
