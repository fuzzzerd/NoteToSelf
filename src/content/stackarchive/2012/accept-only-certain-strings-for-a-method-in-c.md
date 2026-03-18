---
title: "Accept only certain strings for a method in C#"
description: "My answer to \"Accept only certain strings for a method in C#\" on Stack Overflow"
date: 2012-05-09
author:
  name: Nate Bross
tags:
  - c#
  - visual-studio
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10521432"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10521342):*

> I've created a method in C# as you can see below
> 
> ```
> public static IEnumerable<User> QueryTheAD(string filter, string identifier) {
>   if ( filter == "ANiceString" ) {
>     // sexy code here
>   }
> }
> 
> ```
> 
> which works well. However VS rightly shows that not all code path returns a value.
> 
> So is it therefore possible for me to specify that filter can only be one of these:
> 
> *   "Tutor"
> *   "Year"
> *   "SecondName"

The answer depends what the behavior is when `filter` is **not** one of those three strings.

If one of those is required you should either throw an ArgumentException:

```
public static IEnumerable<User> QueryTheAD(string filter, string identifier) 
{
    if(filter != "Tutor" || filter != "Year" || filter != "SecondName") throw new ArgumentException ("filter");

    // sexy code here
}

```

or use an `enum` to require one of the required values:

```
public enum LegalValues { Tutor = 1, Year = 2, SecondName = 3 }

public static IEnumerable<User> QueryTheAD(LegalValues filter, string identifier)
{
     // sexy code here
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10521432) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
