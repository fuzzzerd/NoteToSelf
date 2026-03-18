---
title: "Finding connection strings in code programmatically"
description: "My answer to \"Finding connection strings in code programmatically\" on Stack Overflow"
date: 2009-06-23
author:
  name: Nate Bross
tags:
  - regex
  - asp-classic
  - string
  - connection
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1033258"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1033206):*

> Seems like a fairly straightforward problem. I want to look through about 6gb of content and classic asp code and find anything that looks like a connection string. Problem is, the connection strings are formatted in a dozen different ways.
> 
> I was thinking of using a regex to look for specific properties like "catalog=" or "password=" etc.

I'd take make a sample file with some random text in it, as well as one connection string in each of your possible formats. Then write (one or many) regexes to that match every connection string in your test file. Then run it on your 6GB of data and hope for the best.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1033258) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
