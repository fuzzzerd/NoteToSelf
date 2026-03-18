---
title: "Web page monitoring question"
description: "My answer to \"Web page monitoring question\" on Stack Overflow"
date: 2011-06-13
author:
  name: Nate Bross
tags:
  - asp.net
  - html
  - monitoring
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6334983"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6334957):*

> There are a number of different websites that let you monitor specifi web pages for any changes, such as watchthatpage.com or page2rss.com
> 
> I'm interested in the way how those sites are working, meaning how do they determine whether some web page is updated. Do they just copy all the text from the page, store it in memory and compare it later to the content of a site's page? Or maybe they look for some specific html elements and compare theirs values?
> 
> Please help me to find the answer.

I suspect that they store the entire contents, and every time they check, they compare. If different, send alert, otherwise don't.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6334983) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
