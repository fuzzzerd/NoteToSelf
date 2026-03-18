---
title: "How do programs handle file &quot;opened with...&quot; them?"
description: "My answer to \"How do programs handle file &quot;opened with...&quot; them?\" on Stack Overflow"
date: 2010-04-13
author:
  name: Nate Bross
tags:
  - c#
  - windows
  - winapi
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2633432"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2633414):*

> I am wondering if someone could point me in the right direction. You know how for example, in most IDEs, if you open a source file with "open with", it runs the program and opens it up? and then if you open another one, it opens it in a new tab in the same process?
> 
> My question is NOT how to add a program to the shell commands, but rather:
> 
> 1.  How would a C# application "receive" a PDF file for example?
>     
> 2.  How would the application open the file in the same process when another file is run with it (not having to instances of the program)?

Your program would have to be able to talk to other instances of itself, and say "hey, I'm already open, what are you trying to do, let me do it for you."

<details>
<summary>Notable comments</summary>

**Ben S** (4 upvotes): The relationship is usually the other way: "Hey, is anyone already open? Can you do this for me?"

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2633432) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
