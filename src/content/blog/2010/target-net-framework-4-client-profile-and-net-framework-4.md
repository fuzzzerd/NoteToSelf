---
title: "Target .NET Framework 4 Client Profile and .NET Framework 4 (full) in the same solution"
description: "My answer to \"Target .NET Framework 4 Client Profile and .NET Framework 4 (full) in the same solution\" on Stack Overflow"
date: 2010-12-28
author:
  name: Nate Bross
tags:
  - asp.net
  - .net-4.0
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4548285"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4548270):*

> I have a Solution which contains an ASP.NET Web Application project. Web Application project types can only target the _full_ .NET Framework 4, and Visual Studio won't let you select the _Client Profile_.
> 
> However, my Class Library projects in that same solution allow me to target the .NET Framework 4 Client Profile.
> 
> **So, should I mix targeting the _Client Profile_ and the _full_ framework in the same solution? Or just target the _full_ framework for every project type in a Solution containing a Web Application project? Or does it not matter either way?**

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

If you plan to reuse the Class Library in a WPF or WinForms app, then Client Profile is a good choice, since you are likely going to be able to set your WPF or WinForms app to use Client Profile as well. Even if your WPF or WinForms app ends up requiring the full framework, Client Profile is a subset of the full framework so it will still work just fine.

If your reuse plans on the Class Library are WebApp only or your only using a Class Library to help segment code, then the target framework is really not important.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4548285) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
