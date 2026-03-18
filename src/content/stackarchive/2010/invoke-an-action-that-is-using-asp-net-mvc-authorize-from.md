---
title: "Invoke an action that is using ASP.NET MVC [Authorize] from outside the application"
description: "A question I asked on Stack Overflow"
date: 2010-03-30
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc
  - security
  - authentication
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2547665"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2547665):*

Is this possible?

I'd like to expose a URL (action) such as [http://mysever/myapp/UpdateHeartbeat/](http://mysever/myapp/UpdateHeartbeat/).

In my MVC application it looks like

```
[Authorize]
[AcceptsVerbs(HttpVerbs.Post)]
public ActionResult UpdateHeartbeat()
{
    // update date in DB to DateTime.Now
}

```

Now, in my MVC application the user has logged in via FORMS authentication and they can execute that action to their hearts content.

What I want to do, is hit that URL from a Console application and be able to authenticate (as part of an API that I wouldl like to build) -- is there a way I can do that without removing the \[Authorize\] attribute and adding username/password as parameters to the POST?

---

> [Bradley Mountford answered](https://stackoverflow.com/a/2547870) (0 upvotes):
>
> The Authorize filter actually gets the IPrincipal for the user from the current context so this would not be possible. You will want an alternate form of auth for that method.
> 
> A quick google search provides a link to the following blog post that may be of use:
> 
> [http://davidhayden.com/blog/dave/archive/2009/04/09/CustomAuthorizationASPNETMVCFrameworkAuthorizeAttribute.aspx](http://davidhayden.com/blog/dave/archive/2009/04/09/CustomAuthorizationASPNETMVCFrameworkAuthorizeAttribute.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2547665) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
