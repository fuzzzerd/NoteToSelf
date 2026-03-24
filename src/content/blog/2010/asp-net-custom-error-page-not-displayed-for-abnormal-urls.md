---
title: "ASP.NET Custom Error Page Not Displayed for Abnormal URLs"
description: "My answer to \"ASP.NET Custom Error Page Not Displayed for Abnormal URLs\" on Stack Overflow"
date: 2010-07-06
author:
  name: Nate Bross
tags:
  - asp.net
  - iis-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3187442"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3187406):*

> A vulnerability scanning service regularly tests our site for PCI scan compliance. It has just started trying to access URLs with abnormal formatting, such as:
> 
> [http://www.mydomain.com/ShoppingCart.aspx//ErrorPage.aspx%3fid%3d2](http://www.mydomain.com/ShoppingCart.aspx//ErrorPage.aspx%3fid%3d2)?
> 
> We have a Custom Error Page set which works for everything except this. Is there any way to force IIS to display it for this type of URL?
> 
> **The Error:** Runtime Error - An application error occurred on the server....
> 
> **We're using:**
> 
> *   ASP.NET 2.0 (Framework 3.5)
> *   IIS 7.0 (Windows Server Web 2008)
> 
> I've tried to debug this, but I can't reproduce this on IIS 6.0.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

There might be a more simple solution, but if you're on IIS7 you can use [URL Rewrite](http://www.iis.net/download/URLRewrite) to match those type of URLs and map them back to your error page.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3187442) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
