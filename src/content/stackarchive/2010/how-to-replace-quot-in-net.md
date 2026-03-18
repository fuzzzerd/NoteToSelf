---
title: "How to replace &quot; in .NET"
description: "My answer to \"How to replace &quot; in .NET\" on Stack Overflow"
date: 2010-09-16
author:
  name: Nate Bross
tags:
  - .net
  - visual-studio
  - replace
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3729356"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3729338):*

> Simple! How to replace " in .NET with something...?

Something like this:

```
var st = "String with \" in it.";
st.Replace('\"', 'c'); // replacement char

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3729356) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
