---
title: "Maintain URL when going from ASP.NET WebForms to ASP.NET MVC"
description: "A question I asked on Stack Overflow"
date: 2013-01-17
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
  - url-rewriting
  - asp.net-mvc-routing
  - url-routing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/14389771"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/14389771):*

I am converting an old ASP.NET WebForms app to ASP.NET MVC 4. Everything is fine, except that I have a need to maintain backward compatibility with a specific URL. I found [this great post on using UrlRewrite](http://weblogs.asp.net/jgalloway/archive/2010/02/05/using-iis-rewriting-with-mvc-routes-to-keep-your-routes-simple.aspx), but sadly that isn't something I can count on (this app gets deployed to lots of servers). At the bottom, he mentions using routing if you only have a small set of URLs to deal with, but doesn't provide any example.

Since I only have one url to deal with, I think routing would be the simple approach, but I've never dealt with anything except the default route `/Controller/Action/{id}` so I am looking for a solution that

1.  Has no external dependencies
2.  Will work on old crappy browsers
3.  Doesn't matter if my app knows about this old url or not

The Old URI

[https://www.mysite.com/default.aspx?parm1=p1&parm2=p2&etc=soforth](https://www.mysite.com/default.aspx?parm1=p1&parm2=p2&etc=soforth)

The New URI

[https://www.mysite.com/Home/Index/?parm1=p1&parm2=p2&etc=soforth](https://www.mysite.com/Home/Index/?parm1=p1&parm2=p2&etc=soforth)

Background: this app gets deployed to lots of servers at different locations. There are other apps (that I cannot update) that display the "Old URI" in a web-browser control, so I need them to continue to work after the app is updated to asp.net mvc.

---

> [Alexei Levenkov answered](https://stackoverflow.com/a/14389926) (4 upvotes):
>
> Something like following should work (untested, may need to make this route to be one of the first):
> 
> ```
> routes.MapRoute(
>    "legacyDefaultPage",
>    "default.aspx",
>    new {Controller = "Legacy", Action="Default"});
> 
> class LegacyController {
>   ActionResult Default (string param1,...){}
> }
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @cheesemacfly I cannot count on the url rewrite module being active on all servers I will be deploying to.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/14389771) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
