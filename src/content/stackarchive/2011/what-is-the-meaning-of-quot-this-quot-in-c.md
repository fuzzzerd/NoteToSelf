---
title: "What is the meaning of &quot;this&quot; in C#"
description: "My answer to \"What is the meaning of &quot;this&quot; in C#\" on Stack Overflow"
date: 2011-06-07
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6270798"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6270774):*

> Could anyone please explain the meaning "this" in C#?
> 
> Such as:
> 
> ```
> // complex.cs
> using System;
> 
> public struct Complex 
> {
>    public int real;
>    public int imaginary;
> 
>    public Complex(int real, int imaginary) 
>    {
>       this.real = real;
>       this.imaginary = imaginary;
>    }
> 
> ```

*I posted the following answer, which received 20 upvotes:*

The `this` keyword is a reference to the current instance of the class.

In your example, `this` is used to reference the current instance of the class `Complex` and it removes the ambiguity between `int real` in the signature of the constructor vs. the `public int real;` in the class definition.

[MSDN has some documentation](http://msdn.microsoft.com/en-us/library/dk1507sz.aspx) on this as well which is worth checking out.

Though not directly related to your question, there is another use of `this` as the first parameter in [extension methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods). It is used as the first parameter which signifies the instance to use. If one wanted to add a method to the `String class` you could simple write in any static class

```
public static string Left(this string input, int length)
{
    // maybe do some error checking if you actually use this
    return input.Substring(0, length); 
}

```

See also: [http://msdn.microsoft.com/en-us/library/bb383977.aspx](http://msdn.microsoft.com/en-us/library/bb383977.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6270798) — 20 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
