---
title: "Large MVC controller for a web-based &quot;Wizard&quot; - what are some ways I could reduce size and redundancy?"
description: "My answer to \"Large MVC controller for a web-based &quot;Wizard&quot; - what are some ways I could reduce size and redundancy?\" on Stack Overflow"
date: 2012-07-23
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11622268"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11622223):*

> I have a very large (77 actions) controller that I am using to make a site with wizard-like functionality. The site is like a "job application manager" with multiple components such as an admin component and an end-user component. The component I'm working with is the part where the user would actually fill out a job application. The way things are structured with the other components, it makes the most sense to put all of the job application stuff in the same controller. All of these actions perform similar things but on different models, like so:
> 
> ```
> public class ExampleController : Controller
> {
>     public ActionResult Action1() 
>     {
>         Guid appId = new Guid(Session["AppId"].ToString());
>         ... // logic to pull up correct model
>         return View(model)
>     }
> 
>     [HttpPost]
>     public ActionResult Action1(FormCollection formValues)
>     {
>         Guid appId = new Guid(Session["AppId"].ToString());
>         ... // logic to update the model
>         return RedirectToAction("Action2");
>     }
> 
>     public ActionResult Action2()
>     {
>         Guid appId = new Guid(Session["AppId"].ToString());
>         ... // logic to pull up the correct model
>         return View(model)
>     }
> 
>     ... // on and on and on for 74 more actions
> }
> 
> ```
> 
> Is there any way to reduce some of the constant redundancy that's in every one of the actions? Here is what I am thinking:
> 
> *   Creating a member variable Guid to store the appId and then overriding OnActionExecuting to populate this variable. Is this a good idea?
> *   Implementing some kind of paging to cut down on the number of actions. Any suggestions on how to do that?

I would say yes to your first point and "it depends" to your second. Don't change your design just because you have a lot of methods, if all 77 `ActionResult` methods make sense to have, then keep them around.

Using a member variable and overriding `OnActionExecuting` seems like a great way to refactor that appID Guid code into a single place, so you can **quickly** and **easily** modify it in the future.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11622268) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
