---
title: "ASP.NET MVC2 - passing a parameter to a controller"
description: "My answer to \"ASP.NET MVC2 - passing a parameter to a controller\" on Stack Overflow"
date: 2011-01-18
author:
  name: Nate Bross
tags:
  - asp.net-mvc-2
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4730092"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4730075):*

> This is for a project I'm doing in the university. We're using ASP.NET MVC2 to build a mini-prototype of a website just to show what we can do.
> 
> Now, I have a controller called `ItemController.cs`, a view `Item/Index.aspx`, a model `Item.cs` and a ViewModel `ViewItems.cs`. I use the ViewModel to pass information to the view from the controller. My question is - how do I call a controller method with parameters? Currently, I use
> 
> ```
> Html.ActionLink("View Event Items", "Index", "Item")
> 
> ```
> 
> which points to `ItemController`'s `Index()` method. Say I want it to take an `int` parameter (`Index(int eventId)`) How would I write the ActionLink to pass the parameter to it?
> 
> Also, if I have any errors in how I think this stuff works, please feel free to point them out.

I think that

```
Html.ActionLink("View Event Items", new { controller = "Item", action = "Index", id = 5 })

```

should get you in the vicinity of where you're looking to go.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4730092) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
