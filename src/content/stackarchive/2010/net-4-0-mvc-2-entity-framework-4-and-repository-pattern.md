---
title: ".NET 4.0, MVC 2, Entity Framework 4, and Repository Pattern"
description: "My answer to \".NET 4.0, MVC 2, Entity Framework 4, and Repository Pattern\" on Stack Overflow"
date: 2010-09-15
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
  - entity-framework
  - entity-framework-4
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3719261"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3719226):*

> I am new to both MVC as well as Entity Framework, but I want to do my next project using those technologies. I went through the NerdDinner tutorial at [http://nerddinnerbook.s3.amazonaws.com/Part1.htm](http://nerddinnerbook.s3.amazonaws.com/Part1.htm). NerdDinner uses Linq to Sql and uses the Repository pattern to manage data access. NerdDinner is written so well that I wanted to use it as my guide when working on my new project. Unfortunately, since it's using Linq to Sql, and the recommendation now is to use Entity Framework 4, I got thrown off a little. Since I am also new to MVC, I sort of need a good example like NerdDinner to start off with, and I'm unable to find something similar except that uses the EntityFramework 4.0.
> 
> If I start off using Linq to Sql with the repository pattern like NerDinner does, it should be pretty easy to switch to EntityFramework later right?
> 
> Are there any good tutorials using MVC 2 and EF 4?

*I posted the following answer, which received 1 upvote:*

Yes, switching from Linq-To-SQL to Entity-Framework is mostly painless. I have built two very successfull web applications of sufficently higher complexity than NerdDinner using the NerdDinner tutorial as a guideline and have not found any issues with the design.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3719261) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
