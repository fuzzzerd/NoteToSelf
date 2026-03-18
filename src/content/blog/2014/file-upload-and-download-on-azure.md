---
title: "File upload and download on Azure"
description: "My answer to \"File upload and download on Azure\" on Stack Overflow"
date: 2014-05-27
author:
  name: Nate Bross
tags:
  - c#
  - azure
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23894989"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23894630):*

> I want have my azure . NET web application upload a file, manipulate it and then download the changed version.
> 
> Should I use blob storage? I don't actually need to store the data in the file.

> Should I use blob storage?

That depends on what your requirements are.

> I don't actually need to store the data in the file.

Given this fact, you probably don't need to use blog storage.

You could simply do something like this:

```
var postedFile = Request.Files[0] as HttpPostedFileBase;
var stream = new MemoryStream();
postedFile.InputStream.CopyTo(stream);
// work with MemoryStream
...
//return your file which could be different based on mvc, web forms or whatever

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23894989) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
