---
title: "How to support leagcy urls(Web forms type) in asp.net mvc routing"
description: "My answer to \"How to support leagcy urls(Web forms type) in asp.net mvc routing\" on Stack Overflow"
date: 2010-06-14
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - asp.net-mvc-2
  - asp.net-mvc-routing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3040231"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3040205):*

> We have recently shifted to asp.net mvc, but we still need to support some legacy urls. What is the best way to handle this situation. Is it Application\_PreRequestHandlerExecute() event in global.asax, that I need to use or is there any better way?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

You can use the URL [Rewrite module for IIS7](http://www.iis.net/download/URLRewrite). Scott Hanselman has a good post on using URL rewrite to to handle legacy URLs [here](http://www.hanselman.com/blog/ASPNETMVCAndTheNewIIS7RewriteModule.aspx).

Another option, I believe you can simply add a route that matches your old url syntax.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3040231) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
