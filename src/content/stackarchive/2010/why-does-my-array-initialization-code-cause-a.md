---
title: "Why does my array initialization code cause a StackOverflowException to be thrown?"
description: "My answer to \"Why does my array initialization code cause a StackOverflowException to be thrown?\" on Stack Overflow"
date: 2010-05-26
author:
  name: Nate Bross
tags:
  - c#
  - arrays
  - stack-overflow
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2915298"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2915203):*

> The following line of code in my class constructor is throwing a StackOverflowException:
> 
> ```
> myList = new string[]{};  // myList is a property of type string[]
> 
> ```
> 
> Why is that happening? And what's the proper way to initialize an empty array?
> 
> * * *
> 
> UPDATE: The cause was in the setter, in which I was attempting to trim all values:
> 
> ```
> set 
> {
>   for (int i = 0; i < myList.Length; i++)
>      {
>         if (myList[i] != null) myList[i] = myList[i].Trim();
>      }
> }
> 
> ```

It appears as though what @Jonas H said is accurate, you may be recursivly modifying the Property instead of its backing field.

**WRONG**

```
private String[] _myList;
public String[] myList 
{
    get {return _myList;}
    set  
    { 
        for (int i = 0; i < myList.Length; i++) 
        { 
            if (myList[i] != null) myList[i] = myList[i].Trim(); 
        } 
    }
}

```

**RIGHT**

```
private String[] _myList;
public String[] myList 
{
    get {return _myList;}
    set  
    { 
        for (int i = 0; i < _myList.Length; i++) 
        { 
            if (_myList[i] != null) _myList[i] = _myList[i].Trim(); 
        } 
    }
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2915298) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
