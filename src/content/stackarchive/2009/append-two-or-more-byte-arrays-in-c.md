---
title: "Append two or more byte arrays in C#"
description: "My answer to \"Append two or more byte arrays in C#\" on Stack Overflow"
date: 2009-05-21
author:
  name: Nate Bross
tags:
  - c#
  - arrays
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/895149"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/895120):*

> Is there a best (see below) way to append two byte arrays in C#?
> 
> Pretending I have complete control, I can make the first byte array sufficiently large to hold the second byte array at the end and use the [Array.CopyTo](https://msdn.microsoft.com/en-us/library/system.array.copyto%28v=vs.110%29.aspx) function. Or I can loop over individual bytes and make an assignment.
> 
> Are there better ways? I can't imagine doing something like converting the byte arrays to string and joining them and converting them back would be better than either method above.
> 
> In terms of best/better (in order):
> 
> 1.  Fastest
> 2.  Least RAM consumption
> 
> A constraint is that I must work in the .NET 2.0 framework.
> 
> The two choices recommended are MemoryStream and BlockCopy. I have run a simple speed test of 10,000,000 loops 3 times and got the following results:
> 
> ## _Average of 3 runs of 10,000,000 loops in milliseconds:_
> 
> *   **BlockCopy Time: 1154**, with a range of 13 milliseconds
> *   MemoryStream GetBuffer Time: 1470, with a range of 14 milliseconds
> *   MemoryStream ToArray Time: 1895, with a range of 3 milliseconds
> *   CopyTo Time: 2079, with a range of 19 milliseconds
> *   Byte-by-byte Time: 2203, with a range of 10 milliseconds
> 
> Results of List<byte> [AddRange](https://msdn.microsoft.com/en-us/library/z883w3dc%28v=vs.110%29.aspx) over 10 million loops: List<byte> Time: 16694
> 
> ## Relative RAM Consumption (1 is baseline, higher is worse):
> 
> *   **Byte-by-byte: 1**
> *   **BlockCopy: 1**
> *   **Copy To: 1**
> *   MemoryStream GetBuffer: 2.3
> *   MemoryStream ToArray: 3.3
> *   List<byte>: 4.2
> 
> The test shows that in general, unless you are doing a lot of byte copies \[**which I am**\], looking at byte copies is not worth a focus \[e.g. 10 million runs yielding a difference of as much as 1.1 seconds\].

Your first option of making the first array large enough to contain the second array and using Array.CopyTo ends up being roughly the same as manually iterating over each item and making the assignment. Array.CopyTo() just makes it more concise.

Converting to string and back to array will be horribly slow in contrast to the above. And would likely use more memory.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/895149) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
