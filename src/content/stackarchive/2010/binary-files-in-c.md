---
title: "Binary Files in C#"
description: "My answer to \"Binary Files in C#\" on Stack Overflow"
date: 2010-06-21
author:
  name: Nate Bross
tags:
  - c#
  - binaryfiles
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3085470"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3085437):*

> i am writing a project in C# i wanna save a class in binary file and then read that file it in C i wanna know how can i do it without serialize and deserialize please help me

*I posted the following answer:*

I presume you mean you want to have a C# application write a file. Then have a separate C/C++ application read that file? On that assumption, in C# you'll need to look into the System.IO namespace, and specifically the FileStream class.

On a side note, I'd really recommend writing a C# Class Library project that handles this read/write via .NET serialization classes and then invoke it nativly from your C# code, and use COM (`[assembly: ComVisible(true)]`) to access your .NET code from your C/C++ code.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You're right, what I meant was to make the .NET class `[assembly: ComVisible(true)]`.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3085470) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
