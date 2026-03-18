---
title: "Determine which ASP.NET MVC View to return when not using return View(model) but return View(&quot;viewName&quot;, model)"
description: "A question I asked on Stack Overflow"
date: 2012-12-04
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - asp.net-mvc
  - mobile
  - view
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/13711874"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/13711874):*

I have my mvc site working well with mobile and non-mobile browsers; the issue I'm having is this. I have a couple Actions that (for logging reasons) I don't want to do a `return RedirectToAction(...);` on so instead I had been using `return View("OtherView", model);` this worked until I tried it on mobile, and it doesn't find OtherView.Mobile.cshtml. Is there a way to make this work?

Thise are the views

```
Views/Account/Create.cshtml
Views/Account/Create.Mobile.cshtml
Views/Account/CreateSuccess.cshtml
Views/Account/CreateSuccess.Mobile.cshtml

```

This is the Action

```
public ActionResult Create(FormCollection form)
{
    TryUpdateModel(model);

    if(!ModelState.IsValid) { return View(); }  // this works correctly

    var model = new Account();

    var results = database.CreateAccount(model);

    if(results) return View("CreateSuccess", model); // trying to make this dynamic

    return View(model); // this works correctly
}

```

Normally I would just do `return RedirectToAction(...);` to the account detail page, but this will generate an additional log entry (for this user being read) as well as the detail page does not have access to the password. Since `ActionResult Create` had the password originally, it can show it to the user for confirmation, before its never seen again.

To be clear, I do not want to do `if (Request.Browser.IsMobileDevice) mobile else full` because I may end up adding another set of mobile views for for iPad or whatever:

```
Views/Account/Create.cshtml
Views/Account/Create.Mobile.cshtml
Views/Account/Create.iPad.cshtml
Views/Account/CreateSuccess.cshtml
Views/Account/CreateSuccess.Mobile.cshtml
Views/Account/CreateSuccess.iPad.cshtml

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/13711874) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
