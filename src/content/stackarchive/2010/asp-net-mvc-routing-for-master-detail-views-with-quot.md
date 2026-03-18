---
title: "ASP.NET MVC Routing for Master / Detail Views with &quot;Detail Children&quot;"
description: "A question I asked on Stack Overflow"
date: 2010-07-27
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - .net
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3347451"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3347451):*

I have the basic Master / Detail Views working great with the default ASP.NET MVC Route; however I would like to build some URLs like this:

```
/Class/Details/5 -- General Detail view [Working]

```

What I'm not sure about (and I'm not tied to this URL format, just something roughly equalivent.)

```
/Class/5/Details/Logs -- Detail View with Logs
/Class/5/Details/Status -- Detail View with current Status

```

Another way to put this, is like this:

```
/{controller}/{id}/{controllerSpecificMaster}/{action}/

```

What I'm trying to avoid, is cluttering up my Views\\Class directory with a bunch of Views, which are all basically derivatives of the Details view.

I'm on ASP.NET MVC 1 and .NET 3.5 SP1.

---

> [Byron Sommardahl answered](https://stackoverflow.com/a/3347934) (1 upvotes):
>
> The first thing you need to get down are your routes. You may have already done this, but in case you haven't, here's a route entry that will handle your custom route needs:
> 
> ```
> routes.MapRoute("Master_Detail",
>                 "{controller}/{id}/{controllerSpecificMaster}/{action}",
>                 new { controller = "Class", 
>                       action = "Index", 
>                       id = UrlParameter.Optional,
>                       controllerSpecificMaster = "Details"
>                 });
> 
> ```
> 
> Then, in your action methods where you want to use the route-specified master page, just include the route key in your method arguments, and then pass it to the view:
> 
> ```
> public ActionResult Logs(int id, string controllerSpecificMaster)
> {
>     //do something
> 
>     //return view with master name as argument
>     return View("Logs", controllerSpecificMaster);
> }
> 
> ```
> 
> If you have to do this a lot, I would suggest creating a custom view engine and override the FindView() method.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I was thinking it might be a "child" master page. i.e. a master page for the details of my "Class" object. Which would have on it special data specific to the details of a class, while allowing me to include additional "pages" for differet sections of the details, one being "logs" one being "status", etc.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3347451) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
