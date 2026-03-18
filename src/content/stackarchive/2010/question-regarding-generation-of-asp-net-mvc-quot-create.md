---
title: "Question regarding generation of ASP.NET MVC &quot;Create&quot; Views"
description: "A question I asked on Stack Overflow"
date: 2010-01-27
author:
  name: Nate Bross
tags:
  - .net
  - asp.net
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2150406"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2150406):*

Simplest case, I'm creating a "Create View" for a task list, and I want to allow the user to select a "Category" from a related table via a dropdownlist.

Should I

1.  Create a custom model that contains a Task and an IEnumerable?
2.  Instanciate the CategoryController from the "Create Task View" and bind the DDL via a method on the CategoryController?
3.  Another option I didn't think of?

Which approach best fits within the MVC design pattern? Which do you use, and more importantly why?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2150406) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
