---
title: "Uses of the modulus operator"
description: "My answer to \"Uses of the modulus operator\" on Stack Overflow"
date: 2010-10-20
author:
  name: Nate Bross
tags:
  - programming-languages
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3980019"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3979992):*

> What are some uses of the modulus operator? I know that it calculates the remainder in division so really I am asking what uses does the remainder have?
> 
> So far I have used it to check if a number was even and alternate colors on a table.

A programming 101 exapmle would be to modulate row colors for data:

```
for(int i = 0; i < 100; i++)
{
    write-color i % 2;
}

```

Determine if a number is evan or odd:

```
return number % 2;

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3980019) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
