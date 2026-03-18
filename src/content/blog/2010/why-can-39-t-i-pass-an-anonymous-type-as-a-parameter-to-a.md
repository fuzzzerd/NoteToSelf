---
title: "Why can&#39;t I pass an anonymous type as a parameter to a function?"
description: "My answer to \"Why can&#39;t I pass an anonymous type as a parameter to a function?\" on Stack Overflow"
date: 2010-07-07
author:
  name: Nate Bross
tags:
  - .net
  - linq
  - anonymous-types
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3199102"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3199093):*

> I was trying to do something like below but it doesn't work. Why won't .NET let me do this?
> 
> ```
> private void MyFunction(var items)
> {
>  //whatever
> }
> 
> ```

> Beginning in Visual C# 3.0, variables that are declared at method scope can have an implicit type var. An implicitly typed local variable is strongly typed just as if you had declared the type yourself, but the compiler determines the type. The following two declarations of i are functionally equivalent:

```
var i = 10; // implicitly typed
int i = 10; //explicitly typed

```

In otherwords, `var` keyword is only allowed for locally scoped variables.

[Source](http://msdn.microsoft.com/en-us/library/bb383973.aspx).

A little bit more info [here](http://msdn.microsoft.com/en-us/library/bb384061.aspx). Basically, when using `var` you must also initialize the variable to a value on the same line so that the compiler knows what type it is.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): @VincentVancalbergh I think that `dynamic` would provide for the use that OP was after.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3199102) — 7 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
