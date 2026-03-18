---
title: "Is there more simple or beautiful way to reverse a string?"
description: "My answer to \"Is there more simple or beautiful way to reverse a string?\" on Stack Overflow"
date: 2010-12-29
author:
  name: Nate Bross
tags:
  - string
  - f#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4556265"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4556160):*

> Now I am using such a method:
> 
> ```
> let x_rev = new string(x.Reverse().ToArray())
> 
> ```

If what you are doing is from MSDN on [Enumerable.Reverse()](http://msdn.microsoft.com/en-us/library/bb358497.aspx) then you've probably got the most simple solution.

If you're not using .NET 3.5 (read LINQ (not sure if F# was around before then anyway)) you could use the [Array.Reverse()](http://msdn.microsoft.com/en-us/library/d3877932.aspx) method, however, the resulting code is very much the same.

Suffice it to say, what you have is the most elegant way I can come up with to reverse a string, I have used `Enumerable.Reverse()` many times to reverse order of strings in my projects. Obviously, if the String constructor took an `IEnumerable<Char>` we could skip the `.ToArray()` bit which would in my opinion make the code a bit better, but as it stands, an extra `.ToArray()` isn't all that bad.

If you really wanted, you could write an extension method in C# and add a reference to that library in your F# project, that C# extension method would look something like this:

```
public static String ReverseString(this String toReverse)
{
    return new String(toReverse.Reverse().ToArray());
}

```

That adds an extra dependency who's only real benefit is making your F# code a bit more simple, if you're reversing strings all over the place, it might be worth it, otherwise, I'd just wrap up what you've got in a normal F# method and use it that way.

Although, someone much smarter than I may have a more beautiful way to do it.

<details>
<summary>Notable comments</summary>

**Timwi** (4 upvotes): @Nate, @romkyns: Actually, surrogate pairs are not your only problem. A much more common case that this would break is combining character sequences. Fortunately, there is [TextElementEnumerator](http://msdn.microsoft.com/en-us/library/system.globalization.textelementenumerator.aspx) to help you out, which takes care of that _and_ surrogate pairs. Please use it!

**Nate** (0 upvotes): I wouldn't worry about surrogate pairs, until somebody files a bug report, but I digress. Point is that my answer works exactly like the OPs code, so I made the assumption they are also not worried about surrogate pairs.

**Nate** (0 upvotes): @romkyns Thats true, though for typical use cases, this is good enough, provided you know that it wont work when you encounter surrogate pairs, or characters that cannot be represented using a single byte/char.

**Roman Starkov** (4 upvotes): Observe that this is actually subtly wrong: strings in .NET are encoded in UTF-16, meaning that if you have any escape sequences (known as surrogate pairs) your reversed string will be incorrect.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4556265) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
