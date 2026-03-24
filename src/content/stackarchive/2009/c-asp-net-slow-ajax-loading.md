---
title: "C# ASP.NET Slow AJAX loading"
description: "My answer to \"C# ASP.NET Slow AJAX loading\" on Stack Overflow"
date: 2009-10-13
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - ajax
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1560545"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1560507):*

> When I call a page with AJAX, everything goes fast and well. But if I have a page (for testing purposes) with the following code:
> 
> ```
> for(int i = 0; i < int.MaxValue; i++)
> {}
> 
> ```
> 
> the page loading is longer, which is obvious. But then, when I load a page that only sets a text on a label, it takes longer (about 5 seconds), but this ain't the case if I call this page before calling the test page (with the for loop).
> 
> So, all the loading goes fast, except when I call the test page. From there on every page loads slow. How come?

*I posted the following answer:*

If that for...next loop is in the pageload of your page, ALL ajax queries will have to run that same loop; you should put any long-running processes inside a `this.IsPostPack == false` if statement, and then persist that data in viewstate if you need it during subsequent postbacks.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1560545) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
