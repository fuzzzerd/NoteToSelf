---
title: "What&#39;s the &#39;long&#39; data type used for?"
description: "My answer to \"What&#39;s the &#39;long&#39; data type used for?\" on Stack Overflow"
date: 2010-12-01
author:
  name: Nate Bross
tags:
  - c++
  - types
  - long-integer
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4329348"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4329277):*

> I've been programming in C++ for quite a while now and I am pretty familiar with most of the stuff. One thing that I've never understood though is the 'long' data type.
> 
> I googled it but I still don't know what it is for. I've found pages that say it is the same size and has the same range as an int. So what would be the point in using it?
> 
> I found another stack overflow question regarding this here: [Difference between long and int data types](https://stackoverflow.com/questions/900230/difference-in-long-vs-int-data-types-in-c)
> 
> And it seems that the only difference between the two is that sometimes the size is different on different systems. Does that mean that an application that uses long on a 64bit machine won't work on a 32bit machine? If so then wouldn't it be better to not use them at all?
> 
> Also I noticed stuff called "long int" or even "long long"! Is it a data type or a modifier?

*I posted the following answer, which received 6 upvotes:*

From one of the answers in the question you linked:

> The long must be at least the same size as an int, and possibly, but not necessarily, longer.

I can't think of a better way to explain it.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4329348) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
