---
title: "Lock Down ASP.NET MVC App Administration Site to LocalHost only"
description: "A question I asked on Stack Overflow"
date: 2013-02-13
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - asp.net-mvc
  - security
  - authentication
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/14858787"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/14858787):*

I have an ASP.NET MVC website that I would like to add a small administration page to. The issue I have is that I will be deploying this all over and I will not have SSL available. I am OK with requiring the administrator to remote desktop and use the local browser to perform the administration.

Can this be done? I would basically like to get the same behavior as `<customeErrors mode="RemoteOnly" />` except for my administration pages. Can I do this via web.config some how?

---

> [KingCronus answered](https://stackoverflow.com/a/14858810) (13 upvotes):
>
> `Request.IsLocal` is your friend.
> 
> [http://msdn.microsoft.com/en-us/library/system.web.httprequest.islocal.aspx](http://msdn.microsoft.com/en-us/library/system.web.httprequest.islocal.aspx)
> 
> You can use that to check that a request is coming from the local machine.
> 
> **Custom Attribute**
> 
> You could then extend this to be a custom attribute, but that might be overkill. If that is the route you choose this is a good example that does something similar:
> 
> [Custom Attributes on ActionResult](https://stackoverflow.com/questions/1535535/custom-attributes-on-actionresult)
> 
> MVC3 onwards allows you to set an attribute at Controller level, rather than Method too, so you could lock access to the entire controller responsible for the admin pages.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/14858787) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
