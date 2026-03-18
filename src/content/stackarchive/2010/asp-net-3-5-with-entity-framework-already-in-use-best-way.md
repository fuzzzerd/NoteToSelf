---
title: "ASP.NET 3.5 with Entity Framework already in use. Best way to call a sproc?"
description: "My answer to \"ASP.NET 3.5 with Entity Framework already in use. Best way to call a sproc?\" on Stack Overflow"
date: 2010-11-09
author:
  name: Nate Bross
tags:
  - linq-to-sql
  - entity-framework
  - stored-procedures
  - ado.net
  - entity-framework-4
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4137487"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4137423):*

> I have a small application that uses Entity Framework to expose information to an oData service. I need to allow my web server to call a SQL sproc for auditing purposes.
> 
> What technology should I use to keep the app "clean"?  
> 
> *   Should I follow [these](http://thedatafarm.com/blog/data-access/implement-select-stored-procedures-that-return-miscellaneous-data-in-ctp2-of-ef-designer/) directions for EF3.5?  
>     
> *   Should I use ADO.NET?  
>     
> *   Linq2SQL?  
>     
> *   Should I upgrade to .NET 4 so I can take advantage of the better EF?
> 
> What makes the most sense from a supportability perspective?

This is subjective, but I'd go for EF4.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4137487) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
