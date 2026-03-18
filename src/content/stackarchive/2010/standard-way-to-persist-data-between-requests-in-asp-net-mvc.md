---
title: "Standard way to persist data between requests in ASP.NET-MVC"
description: "A question I asked on Stack Overflow"
date: 2010-03-18
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc
  - session
  - cookies
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2471815"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2471815):*

What is the most standard or best way to persist data between requests?

Should I use cookies or session variables? I'm interested in keeping data like sort order, sort column, and page number (for paginiation).

I'm coming from a webforms background so normally this type of thing was automatically handled for me in the viewstate of the controls I was using.

**update**

I like the querystring idea, for searching and more meaningful URLs; however, I'm working on an "index/list" view, which consists of a View with header, and "control" options, like DDLs for filtering and a partial view that renders the table of data.

The DDLs use a `$.load()` to call an ActionResult on the controller, which returns the partial view, passing parameters there in the querystring, but since these are ajax requests the main page url of the user's browser does not get updated.

Is there a best-practice for taking querystrings off the main-page URL and using them in ajax requests to other ActionResults?

---

> [Chad Ruppert answered](https://stackoverflow.com/a/2471866) (6 upvotes):
>
> If you want it to survive only through one request/redirect TempData is your friend.
> 
> However, for things like your pagination, URL is the best method, for the ability to share links alone.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2471815) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
