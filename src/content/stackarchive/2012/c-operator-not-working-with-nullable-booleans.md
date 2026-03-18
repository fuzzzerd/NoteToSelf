---
title: "C# || operator not working with nullable booleans"
description: "My answer to \"C# || operator not working with nullable booleans\" on Stack Overflow"
date: 2012-01-27
author:
  name: Nate Bross
tags:
  - c#
  - nullable
  - boolean
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9037271"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9037171):*

> I have the following piece of code in my LINQ:
> 
> ```
>     where (tf.Shipped || tf.Ordered || tf.Processed)
> 
> ```
> 
> Note that Shipped, Ordered and Processed are all nullable Boolean fields
> 
> I am getting the following message:
> 
> > Operator || cannot be applied to operands of type 'bool?' and 'bool?'
> 
> Not sure how to resolve this as yes, they need to be nullable booleans and I need to use the OR (||).

```
where ((tf.Shipped.HasValue && tf.Shipped.Value) 
   || (tf.Ordered.HasValue && tf.Ordered.Value) 
   || (tf.Processed.HasValue && tf.Processed.Value)) 

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @CodeInChaos That's ture, but the meaning is explicit.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9037271) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
