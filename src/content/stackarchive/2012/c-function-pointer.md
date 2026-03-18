---
title: "C# Function Pointer"
description: "My answer to \"C# Function Pointer\" on Stack Overflow"
date: 2012-12-20
author:
  name: Nate Bross
tags:
  - c#
  - user-controls
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/13976078"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/13976038):*

> I am creating a User Control, and I want it to know nothing about my Database Class.
> 
> However, I need certain features from that Database Class (I need to get the Employee's name given their Employee Number).
> 
> What I would like to do is to create something in my User Control that I can wire up in my applications that use it, much like I would wire up a Click Event or something like that.
> 
> I've never actually created something like this before in a C# project, so I don't know what to call it. I would imagine it has to exist.
> 
> The function I want to call in my Database Class has this signature:
> 
> ```
> public string GetEmployeeName(int employeeNumber);
> 
> ```
> 
> Could someone tell me what it is I am trying to do?
> 
> If it is something difficult, an example would be nice as well.

I think what you want to do is use a [delegate](http://msdn.microsoft.com/en-us/library/900fyy8e%28v=vs.110%29.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/13976078) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
