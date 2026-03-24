---
title: "Mobile Web app with JQuery Mobile and C sharp"
description: "My answer to \"Mobile Web app with JQuery Mobile and C sharp\" on Stack Overflow"
date: 2012-02-14
author:
  name: Nate Bross
tags:
  - c#
  - jquery
  - mobile
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9283904"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9283564):*

> I'm thinking of developing a mobile web app. I was wondering if it is possible to create the front-end of the application using jQuery Mobile and create the Back-end using C Sharp that will connect to an SQL Server. This app will be based on a 3 Tier Structure meaning Presentation Layer, Business Logic Layer and Data Access Layer. All database operations will be done using LINQ.

*I posted the following answer, which was chosen as the accepted answer:*

This is possible. In fact, it is common and a good practice to break up your different layers. I recommend that you look at the following: [http://www.asp.net/mvc/](http://www.asp.net/mvc/) -- you can get all the tools you need.

ASP.NET MVC will help break up your Presentation (Views) from your Business Logic (Controllers) and your Data Access Layer becomes your Model.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9283904) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
