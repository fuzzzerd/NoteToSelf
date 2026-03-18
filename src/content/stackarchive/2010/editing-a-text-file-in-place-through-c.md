---
title: "Editing a text file in place through C#"
description: "My answer to \"Editing a text file in place through C#\" on Stack Overflow"
date: 2010-06-23
author:
  name: Nate Bross
tags:
  - c#
  - text-files
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3104369"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3104324):*

> I have a huge text file, size > 4GB and I want to replace some text in it programmatically. I know the line number at which I have to replace the text but the problem is that I do not want to copy all the text (along with my replaced line) to a second file. I have to do this within the source file. Is there a way to do this in C#?
> 
> The text which has to be replaced is exactly the same size as the source text (if this helps).

I'm guessing you'll want to use the FileStream class and seek to your positon, and place your updated data.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3104369) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
