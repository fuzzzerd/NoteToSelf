---
title: "Building an ASP.NET MVC Master Page Menu Dynamically, Based on the current User&#39;s &quot;Role&quot;"
description: "A question I asked on Stack Overflow"
date: 2010-02-04
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net
  - asp.net-mvc
  - security
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2203320"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2203320):*

I've seen some similar questions, but none that look like what I'm trying to do.

This is my current implementation w/out any security:

```
<div id="menucontainer">
    <ul id="menu">              
        <li><%= Html.ActionLink("Main List", "Index", "AController")%></li>
        <li><%= Html.ActionLink("Product List", "Index", "BController")%></li>
        <li><%= Html.ActionLink("Company List", "Index", "CController")%></li>
        <li><%= Html.ActionLink("User List", "Index", "DController")%></li>
    </ul>
</div>

```

This is fine, and the above works. I have \[Authorize\] Attributes setup on the Actions for CController and DController to prevent unauthorized access -- but I'd like to remove those items from the menu for users who don't have the correct Role, because when they see it and click on it and it tells them they don't have permission, they'll want it. If they don't know it's there, that's just better for everyone involved...

Something like this is ultimately the goal I'm trying to get at, but I'm looking for the more MVC Flavored aproach, where the "view" is "dumb":

```
<div id="menucontainer">
    <ul id="menu">              
        <li><%= Html.ActionLink("Main List", "Index", "AController")%></li>
        <li><%= Html.ActionLink("Product List", "Index", "BController")%></li>
        <% If(Role = Roles.Admin) { %>
        <li><%= Html.ActionLink("Company List", "Index", "CController")%></li>
        <li><%= Html.ActionLink("User List", "Index", "DController")%></li>
        <% } %>
    </ul>
</div>

```

---

> [jeroenh answered](https://stackoverflow.com/a/2203410) (15 upvotes):
>
> I have done something like this:
> 
> *   use a common base class for my controllers ('layer supertype')
> *   in the BaseController, override OnActionExecuted (you could also define an ActionFilter attribute for this)
> 
> Something like this:
> 
> ```
>     protected override void OnActionExecuted(ActionExecutedContext filterContext)
>     {
>         // build list of menu items based on user's permissions, and add it to ViewData
>         IEnumerable<MenuItem> menu = BuildMenu(); 
>         ViewData["Menu"] = menu;
>     }
> 
> ```
> 
> In the master page:
> 
> ```
>     <% var model = ViewData["Menu"] as IEnumerable<MenuItem>; %>
>     <% Html.RenderPartial("Menu", model); %>
> 
> ```
> 
> (Note: in reality, I have a MasterViewModel that contains among others the menu model)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I am... I think. There are two levels of user, Normal and Admin. Only admin can see Company and User lists, the \[Authorize\] attributes on the controller prevent unauthorized access, but I want to hide the view from non-Admin's so they don't even get the idea that its there in their head.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2203320) — 15 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
