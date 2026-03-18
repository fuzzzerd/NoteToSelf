---
title: "Why are properties on classes in ASP.NET using C# generally public and properties using C# for desktop apps private?"
description: "My answer to \"Why are properties on classes in ASP.NET using C# generally public and properties using C# for desktop apps private?\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5197499"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5197462):*

> I have searched high and low (and very possibly could have missed it), but in my years of programming, I have always come across one practice that seemed to be the standard in OOP, which is to use private properties in an object with public methods to manipulate the data.
> 
> However, the more I delve into ASP.NET (specifically with MVC), the more public properties I see inside of classes (specifically models) such as the ones shown at [Scottgu's blog discussing the Entity Framework](http://weblogs.asp.net/scottgu/archive/2010/07/16/code-first-development-with-entity-framework-4.aspx).
> 
> Does it have something to do with the way that LINQ populates a class?
> 
> Thanks in advance, and the answer may be out there, but I have been looking for a long time, and can't figure out why ASP.NET uses public and even the desktop C# apps use private.

Public Properties are the way the .NET community has elected to deal with this.

Note the difference here:

```
public int Property { get; set; } // C# auto-prop

public int Property; // C# "field"

```

The former is the standard way, and is generally accepted. A backing field can be added when necessary. The latter is typically avoided, since it doesn't have the get/set.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): My answer differs from the accepted answer only in level of detail. I explicitly mention a backing filed (which would be private).

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5197499) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
