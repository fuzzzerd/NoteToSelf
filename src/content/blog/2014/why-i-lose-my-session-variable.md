---
title: "Why I lose my session variable?"
description: "My answer to \"Why I lose my session variable?\" on Stack Overflow"
date: 2014-07-02
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - asp.net-mvc-4
  - knockout.js
  - session-variables
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/24534434"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/24534343):*

> I´m on MVC and using KnockoputJS. I select the value from 2 select. In the first select i choose IDCompany, and the second select i choose IDSubsidiary.
> 
> I send the model in Json to JsonResult in the controller and I create a variable session and a cookie and save IDCompany in the Session variable and in the cookie with the same name.
> 
> I do the same with IDSubsidiary. Finally, I return to the ajax function (which call "Save" at first)
> 
> ```
> [HttpPost]
> public JsonResult Save(ViewModel viewModel)
> {
>   Session["IDCompany"] = viewModel.IDCompany.ToString();
>   Response.Cookies["IDCompany"].Value = viewModel.IDCompany.ToString();
>   Response.Cookies["IDCompany"].Expires = DateTime.Now.AddDays(1);
> 
>   Session["IDSubsidiary"] = viewModel.IDSubsidiary.ToString();
>   Response.Cookies["IDSubsidiary"].Value = viewModel.IDSubsidiary.ToString();
>   Response.Cookies["IDSubsidiary"].Expires = DateTime.Now.AddDays(1);
> 
>   return Json(true);
> }
> 
> ```
> 
> The problem is that after a while (30 mins approximately), i lose `Session["IDCompany"]` and `Session["IDSubsidiary"]` (becomes null). The problem can be that, for example, Session\["IDSubsidiary"\] and `Response.Cookies["IDSubsidiary"]` has the same name?

There are two reasons this could be happening. 1) The session is timing out, or 2) you are using "In Process" session state.

If the user sits on a page for thirty minutes, and then the value is gone the next time they refresh or go to another page, its likely a timeout problem. You could try increasing the sessionState timeout; however, you'll probably start running into the issue described below. If you are determined to use Session variables, you should probably switch to a different state mode than "in process" which is the default.

If it is not timing out, the reason your value is lost is because "In Process" session state, goes away when the App Pool recycles. This can happen for a variety of reasons. You probably want to change your session state mode to State Server or SQL Server. This will keep your session data around between app pool recycles, but you will need to enable the "ASP.NET Session State Service" on the web server if you go the State Server route.

There are several state modes, each with different behaviors. You can read about them [here on MSDN.](http://msdn.microsoft.com/en-us/library/ms178586.aspx)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @JohnSaunders That's a fair point; I was assuming it was going away even with user activity (which should reset the timeout count down). I'll update to include that too.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/24534434) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
