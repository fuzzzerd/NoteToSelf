---
title: "Why does ReSharper need to scan all files when converting a property to an auto property?"
description: "My answer to \"Why does ReSharper need to scan all files when converting a property to an auto property?\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net
  - resharper
  - automatic-properties
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5196969"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5196943):*

> Is there any difference between accessing a property that has a backing field
> 
> ```
>     private int _id;
>     public int Id
>     {
>         get { return _id; }
>         set { _id = value; }
>     }
> 
> ```
> 
> versus an auto-property?
> 
> ```
> public int Id { get; set; }
> 
> ```
> 
> The reason I'm asking is that when letting ReSharper convert a property into an auto property it seems to scan my entire solution, or at least all aspx-files.
> 
> I can't see any reason why there should be any difference between the two from outside the class. Is there?

*I posted the following answer, which was chosen as the accepted answer and received 12 upvotes:*

The compiler generates the backing field for Auto-Properties automatically, so no, there shouldn't be any difference.

ReSharper is scanning all the files, because if you have a `Partial` class defined, it could be using the backing field instead of the public property even though the code exists in physically different files.

For Example:

```
// MyClass.cs
public partial class MyClass
{
    int _id;
    public int ID { get { return _id; } set { _id = value; } }
    public MyClass(int identifier)
    {
        ID = identifier;
    }
}

// MyClass2.cs
public partial class MyClass
{
    public void ChangeID(int newID) 
    {
        _id = newID;
    }
}

```

ReSharper must scan all files, since it has no way to know where a partial class might be defined.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Ian -- I'm not sure about files in other solutions, but ReSharper has no way of knowing the contents of a file until after it scans it, so it must scan ALL files to find any partial classes defined.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5196969) — 12 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
