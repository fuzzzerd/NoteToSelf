---
title: "Delete and return in a single verb?"
description: "My answer to \"Delete and return in a single verb?\" on Stack Overflow"
date: 2010-09-28
author:
  name: Nate Bross
tags:
  - language-agnostic
  - naming
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3814160"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3814109):*

> Imagine a function that deletes a cookie and returns its value.
> 
> What would you call it if you have to use a single verb?
> 
> I called it `clear` but I'm not very fond of the name.

*I posted the following answer, which received 2 upvotes:*

I'd do something like this:

```
public String GetAndDeleteCookie(String cookieName); // C#
function getAndDeleteCookie(cookieName); // JavaScript
get_and_delete_cookie(cookieName); // php (forget exact syntax)

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3814160) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
