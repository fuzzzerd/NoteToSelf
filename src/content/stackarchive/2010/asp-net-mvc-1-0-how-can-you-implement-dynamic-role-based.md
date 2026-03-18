---
title: "asp.net mvc 1.0: How can you implement dynamic, role-based navigation?"
description: "My answer to \"asp.net mvc 1.0: How can you implement dynamic, role-based navigation?\" on Stack Overflow"
date: 2010-02-16
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - security
  - navigation
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2275683"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2275671):*

> Building an application, and there will be different levels of access.
> 
> What is the recommended way to restrict the display of navigation elements to those appropriate to the current user? Are there any built-in helper for this?

I asked a similar question [here](https://stackoverflow.com/questions/2203320/building-an-asp-net-mvc-master-page-menu-dynamically-based-on-the-current-users). There are a few options, depending on your needs something as simple as checking User.Identity.IsInRole("xyz") in the view may suffice (not ideal, but it gets the job done).

If you have a complex navigation structure, the answers provided in my question maybe of use to you.

I should point out that as @casperOne has mentioned, the `[Authorize]` attribute will prevent unauthorized access to the actions in question, but will not help with the display of menu navigation to them.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2275683) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
