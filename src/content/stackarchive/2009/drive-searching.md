---
title: "Drive searching"
description: "My answer to \"Drive searching\" on Stack Overflow"
date: 2009-10-13
author:
  name: Nate Bross
tags:
  - c#
  - regex
  - search
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1560939"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1560905):*

> I am developing an application and I would like to be able to search the whole drive for a regular expression. I would prefer to do this in c# but I can call other languages. Is there any easy way to just seek through all the binary data on a drive from begining to end?

*I posted the following answer:*

I don't think C# can read all files / data for the drive the OS is on, since the OS locks some files.

You could use the System.IO namespace to enumerate all files, and then scan them individually byte by byte, this obviously would take a long time.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1560939) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
