---
title: "Organization of simple project"
description: "My answer to \"Organization of simple project\" on Stack Overflow"
date: 2010-05-28
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2932686"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2932589):*

> I want to create a simple mvc application. It's typical task and very simular with phpmyadmin. I have a table and a few operations delete, edit, create new row.
> 
> ```
>                 Name  Gender Age   
> [delete] [edit] Alex  Male   20 
> [delete] [edit] Elza  Female 23 
>                          [New person] 
> 
> ```
> 
> When edit or New person clicked by user application show the following page
> 
> ```
> Name   [........]
> Gender [........]
> Age    [........]
>             [Save]
> 
> ```
> 
> I'm very new in asp.net and mvc, can anyone suggest a right project organization or give links to simular applications?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

A few guide lines I like to stick with:

1.  Entities should map to database tables
    1.  You may want to create ViewModels to show denormalized data.
2.  Actions should be verbs that you perform on your entities
3.  Always use Strongly Typed views, _always_
4.  Try to keep your controllers lean, less controller code = better
    1.  If you need, move code into a "service" class that your controller consumes

Depending on your database choice, I'd probably use Linq-To-SQL to quickly generate my entities and I'd probably wrap them up in a simple repository class. If you using something besides SQL Server, I'd try Entity Framework.

If your scope starts getting bigger, you may want to swap out your generated entities and insert your own DTOs inbetween your MVC app and the database layer.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2932686) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
