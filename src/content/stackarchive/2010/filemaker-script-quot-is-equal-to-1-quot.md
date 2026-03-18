---
title: "Filemaker: Script &quot;is equal to 1&quot;"
description: "My answer to \"Filemaker: Script &quot;is equal to 1&quot;\" on Stack Overflow"
date: 2010-05-25
author:
  name: Nate Bross
tags:
  - filemaker
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2906348"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2906338):*

> I want to write a script in filemaker which returns true if `table::field = 1` for a certain entry, and false otherwise. How do I do this?

You can use the `Set Variable` script step to set a `$$variable` using the calculation engine to return true or false.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2906348) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
