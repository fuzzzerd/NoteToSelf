---
title: "Writing a base64 string to a file without carriage returns"
description: "My answer to \"Writing a base64 string to a file without carriage returns\" on Stack Overflow"
date: 2010-01-25
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - character-encoding
  - base64
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2135621"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2135560):*

> Will I run into problems if I write a base64 string into a file without breaking it up using carriage returns?
> 
> Is there a length where I'll run into difficulties writing and reading a big string in one go?
> 
> Right now the size of the strings I'm storing are about 100 characters but they can get into the 10,000+ range - will that be a problem?
> 
> Thanks in advance.

To answer your direct question, yes there is a size that you will start to notice read/write performance issues if you are using a single large string; however, it depends on many things, including Disk IO, CPU load, and even free memory. On a semi-modern machine, I'd say you wont really have issues as long as your files are under 2-3 MB.

That said, Neil's advice to use a buffer is good advice, since it will yeild much better performance and allow you to display a progressbar, etc.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2135621) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
