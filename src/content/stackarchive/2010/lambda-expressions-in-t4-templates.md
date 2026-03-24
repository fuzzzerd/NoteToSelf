---
title: "Lambda Expressions in T4 Templates"
description: "My answer to \"Lambda Expressions in T4 Templates\" on Stack Overflow"
date: 2010-06-14
author:
  name: Nate Bross
tags:
  - c#
  - templates
  - lambda
  - t4
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3038473"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3038454):*

> Whilst putting together a T4 template I threw in a simple lambda expression:
> 
> ```
> <#=string.Join(",", updateFields.ConvertAll(field => field.Name).ToArray())#>
> 
> ```
> 
> This causes the template to fail to generate with the error:
> 
> ```
> Compiling transformation: Invalid expression term '>'   
> 
> ```
> 
> On the line with the lambda expression.
> 
> This has been checked outside of a template and works fine. Does T4 not support working with lambda expressions? If not, are there any other language features that are unsupported in the context of a T4 template?
> 
> Thanks!

*I posted the following answer:*

As a work around, you might put that code into an external class library, which you can then call from within the T4 template. I've had to do that a number of times. Its not ideal, but it works.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3038473) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
