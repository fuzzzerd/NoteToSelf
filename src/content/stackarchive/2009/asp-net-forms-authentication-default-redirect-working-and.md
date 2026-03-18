---
title: "ASP.NET Forms Authentication Default Redirect [Working] and Redirect to Requested Page w/QueryString [Not Working]"
description: "A question I asked on Stack Overflow"
date: 2009-11-11
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net
  - forms-authentication
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1718743"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1718743):*

I have a website, with basic Forms Authentication working alright. Users have emails that contain links to my site, with a querystring variable. Users are prompted to login correctly, but using

`FormsAuthentication.RedirectFromLoginPage(userName, false);`

Does not work when the original url contains a querystring.

I've tried these requests, without being logged:

```
http://localhost/default.aspx          -- redirect to login, then back to default OK
    This is the loaded URL before login:
    http://localhost/login.aspx

http://localhost/TaskDetail.aspx       -- redirect to login, then back to default FAIL
    This is the loaded URL before login:
    http://localhost/login.aspx?ReturnUrl=%2ftaskdetail.aspx

http://localhost/TaskDetail.aspx?id=5  -- redirect to login, then back to default FAIL
    This is the loaded URL before login:
    http://localhost/login.aspx?ReturnUrl=%2fTaskDetail.aspx%3fTaskID%3d2464&TaskID=2464

```

Any help is really appreciated.

---

> [Russ Bradberry answered](https://stackoverflow.com/a/1718906) (1 upvotes):
>
> unfortunately, this is by design but here is a great article on this very issue that describes it, plus a workaround:
> 
> [http://blogs.msdn.com/vijaysk/archive/2008/01/24/anatomy-of-forms-authentication-return-url.aspx](http://blogs.msdn.com/vijaysk/archive/2008/01/24/anatomy-of-forms-authentication-return-url.aspx)
> 
> **EDIT:** My apologies, I thought there was a workaround in that blog the first time I read it. Try doing this a `Response.Redirect` to `FormsAuthentication.GetRedirectURL()` and adding in the correct querystring.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1718743) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
