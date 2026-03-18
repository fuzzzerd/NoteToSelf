---
title: "If I only sanitize GET and POST data, will I be safe from injection?"
description: "My answer to \"If I only sanitize GET and POST data, will I be safe from injection?\" on Stack Overflow"
date: 2009-10-15
author:
  name: Nate Bross
tags:
  - language-agnostic
  - code-injection
  - sanitization
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1570467"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1570458):*

> I'm just thinking about the best way to go about sanitizing my data to prevent injection attacks. Some people like to sanitize immediately before output, or immediately before insertion to the database... but the problem I see with this is twofold: (1) what if you miss a paramater/variable? (2) what if you're over-sanitizing? Not that it would hurt the output, but there's not much sense sanitizing stuff you already know is safe.
> 
> For example, in PHP instead of using `$_GET` and `$_POST` couldn't I wrap those with something like:
> 
> ```
> function get($var) {
>     return my_sanitizer($_GET[$var]);
> }
> 
> ```
> 
> Or would that not be enough? Where else could malicious code sneak in?
> 
> * * *
> 
> After reading the answers below I realize this question was a bit foolish. It depends on if you're inserting to the database, or outputting HTML. In that case, perhaps it _is_ better to do just before usage. That's okay though, it's easy enough to wrap output methods too...

Personally, I'd always sanitize right before you insert into your database; that said, if you have a SQL based database parameterized SQL and sprocs are the way to go to ensure you aren't injecting anything that will cause harm.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1570467) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
