---
title: "Silverlight 4 - elevated permission *inside* the browser"
description: "My answer to \"Silverlight 4 - elevated permission *inside* the browser\" on Stack Overflow"
date: 2010-05-12
author:
  name: Nate Bross
tags:
  - browser
  - silverlight-4.0
  - security
  - full-trust
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2821979"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2821954):*

> I know Silverlight 4 can handle elevated permissions outside the browser. Is there a way to accomplish this **inside** the browser?
> 
> I need to make a folder/file upload manager that gives a better user experience than the standard , and I'd like to implement it in Silverlight.
> 
> I know Java has an option to gain elevated permissions, but you have to attach a signed certificate to your app. Does Silverlight 4 have a similar option - to gain elevated permissions by attaching a signed certificate (after warning the user, of course)?
> 
> \-Doug

I believe that the full-trust option is only available as an OOB application -- ref: [http://timheuer.com/blog/archive/2009/11/18/whats-new-in-silverlight-4-complete-guide-new-features.aspx#elevated](http://timheuer.com/blog/archive/2009/11/18/whats-new-in-silverlight-4-complete-guide-new-features.aspx#elevated)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2821979) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
