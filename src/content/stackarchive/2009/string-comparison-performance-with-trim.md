---
title: "String.comparison performance (with trim)"
description: "My answer to \"String.comparison performance (with trim)\" on Stack Overflow"
date: 2009-12-07
author:
  name: Nate Bross
tags:
  - c#
  - string
  - string-comparison
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1862388"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1862314):*

> I need to do alot of high-performance case-insensitive string comparisons and realized that my way of doing it .ToLower().Trim() was really stupid due do all the new strings being allocated
> 
> So I digged around a little and this way seems preferable:
> 
> ```
> String.Compare(txt1,txt2, StringComparison.OrdinalIgnoreCase)
> 
> ```
> 
> The only problem here is that I want to ignore leading or trailing spaces, ie Trim() but if I use Trim I have the same problem with string allocations. I guess I could check each string and see if it StartsWith(" ") or EndsWith(" ") and only then Trim. Either that or figure out the index,length for each string and pass to string.Compare override
> 
> ```
> public static int Compare
> (
>     string strA,
>     int indexA,
>     string strB,
>     int indexB,
>     int length,
>     StringComparison comparisonType
> ) 
> 
> ```
> 
> but that seems rather messy and I probably have to to use some integers if I dont make a really big if-else statement for every combination of trailing and leading blanks on both strings... so any ideas of an elegant solution?
> 
> Here's my current proposal:
> 
> ```
> public bool IsEqual(string a, string b)
>     {
>         return (string.Compare(a, b, StringComparison.OrdinalIgnoreCase) == 0);
>     }
> 
>     public bool IsTrimEqual(string a, string b)
>     {
>         if (Math.Abs(a.Length- b.Length) > 2 ) // if length differs by more than 2, cant be equal
>         {
>             return  false;
>         }
>         else if (IsEqual(a,b))
>         {
>             return true;
>         }
>         else 
>         {
>             return (string.Compare(a.Trim(), b.Trim(), StringComparison.OrdinalIgnoreCase) == 0);
>         }
>     }
> 
> ```

I would use the code you have

```
String.Compare(txt1,txt2, StringComparison.OrdinalIgnoreCase)

```

and add any `.Trim()` calls as you need them. This will save your initial option 4 strings most of the time (`.ToLower().Trim()`, and two strings all of the time (`.ToLower()`).

If you are suffering performance problems after this, then your "messy" option is likely the best bet.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1862388) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
