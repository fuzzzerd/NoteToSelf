---
title: "Best storage approach for small amount of 99% static data needed at startup?"
description: "A question I asked on Stack Overflow"
date: 2009-05-15
author:
  name: Nate Bross
tags:
  - c#
  - xml
  - database
  - serialization
  - binary
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/871121"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/871121):*

I have some (small amount) of data that I'll need quick access to on inital load, but not after that.

Right now, I have serialized the data (Generic List) to an Xml file and I'm deserializing it on load as needed.

My question is should I use the XmlSerializer or the BinaryFormatter? I'm not worried about file size, but serialization speed.

---

> [Mehrdad Afshari answered](https://stackoverflow.com/a/871126) (2 upvotes):
>
> `BinaryFormatter` is faster than `XmlSerializer`. It has to deal with much less bloated format without string parsing issues.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/871121) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
