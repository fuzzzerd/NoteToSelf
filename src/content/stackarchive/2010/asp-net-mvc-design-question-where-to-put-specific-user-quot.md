---
title: "ASP.NET MVC Design Question Where to put specific user / &quot;access level&quot; code"
description: "A question I asked on Stack Overflow"
date: 2010-01-25
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
  - authentication
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2135557"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2135557):*

So, I've successfully implemented my own MembershipProvider and that's working exactly as I intended it to.

I've decorated my controller actions with the \[Authorize\] attribute, and this is also work exactly as I want.

My question is, where should I put code that determines "how much" access a use has?

\[Authorize\] simply means that the current user is a valid user of the system. The current user may have UserAccess = 1, or 2, or 4, or 8 or whatever. Would I perform this check in the Controller method? or should I pass the user into my Repository class, and have the respository class return only those records which the current user has access to?

In other words, what's the best way to seperate this concern? since its related to authentication. I'm thinking that I should pass the user into the Repository.GetData() method, and have it perform the necessary lookups.

The second part of this queston, is how do I limit access on a specific View, based on the user? For example if the current user has UserAccess = 2, I want to omit some fields, but if its UserAccess = 4 I want to show all fields.

**Update**

After a little bit more research, it looks like I could potentially kill two birds with one stone, if I implement my own RoleProvider -- I see how I can do this to restrict data access on the controller `[Authorize(Roles = "Admin)]`, and it looks like the best option for me. How can I use this to render my View differently based on Role? Would I make seperate Views and return the correct view from the Controller? Or make one View with in-line C#?

---

> [Jacobs Data Solutions answered](https://stackoverflow.com/a/2135694) (1 upvotes):
>
> First part of your question: keep the controller thin and put the access level code in your repository class/model. Second part of your question: you can create different views for each access level. Or you can put logic in the view itself to check the access level of the user, but that's fairly hackish and not secure. I would just have the view not render any fields that come back null/empty from the model.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2135557) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
