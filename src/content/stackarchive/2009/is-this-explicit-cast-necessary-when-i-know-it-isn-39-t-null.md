---
title: "is this explicit cast necessary when I know it isn&#39;t null?"
description: "My answer to \"is this explicit cast necessary when I know it isn&#39;t null?\" on Stack Overflow"
date: 2009-12-18
author:
  name: Nate Bross
tags:
  - c#
  - casting
  - "null"
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1929086"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1929063):*

> I have the following:
> 
> ```
> MyEnum? maybeValue = GetValueOrNull();
> 
> if (null != maybeValue)
> {
>     MyEnum value = (MyEnum)maybeValue;
> }
> 
> ```
> 
> What I want to know is if that explicit `(MyEnum)` cast is necessary on an instance of type `MyEnum?`. This seems like a simple question, I just felt paranoid that there could possibly be some runtime error if I just did `MyEnum value = maybeValue` within that `if` statement.

*I posted the following answer, which received 3 upvotes:*

I believe that when you define a variable as a nullable type, it adds a `.HasValue` property and a `.Value` property. You should be able to use those to avoid any casting.

You can rewrite your code like this

```
MyEnum? maybeValue = GetValueOrNull();

if (maybeValue.HasValue == true)
{
    MyEnum value = maybeValue.Value;
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1929086) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
