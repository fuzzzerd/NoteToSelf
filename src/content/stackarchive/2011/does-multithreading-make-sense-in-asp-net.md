---
title: "Does multithreading make sense in asp.net?"
description: "My answer to \"Does multithreading make sense in asp.net?\" on Stack Overflow"
date: 2011-06-03
author:
  name: Nate Bross
tags:
  - asp.net
  - multithreading
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6232064"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6232023):*

> In winforms development you may create a `BackgroundWorker` to avoid locking the UI on a long running process. In ASP.NET a POST/GET basically freezes until completion. I don't see how adding a `Thread` would be of any benefit to this process. Maybe if the `Thread` would speed completion (say on a multi-core server) it could help speed things up.
> 
> In the general sense I could use AJAX to make long calls without causing a "freeze" of the web page. In this sense AJAX can be thought of as a substitute for threading.
> 
> Is that it? Is threading pretty much useless on ASP.NET?

*I posted the following answer, which received 1 upvote:*

It depends on the workload and the use case. Request/Response systems are best served by executing them asynchrounously on the client side.

If the workload on the server warrents threading, the work can be done in parallel but each thread should be joined at the end to return a single response.

The bottom line is that if the data you are getting can be loaded faster in parallel, do it, otherwise use async (ajax) calls from the client to prevent the user interface from blocking

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6232064) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
