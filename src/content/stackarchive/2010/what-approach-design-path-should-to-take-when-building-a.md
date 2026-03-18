---
title: "What approach/design path should to take when building a totally new system?"
description: "A question I asked on Stack Overflow"
date: 2010-01-12
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - sql-server
  - database
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2051414"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2051414):*

This application I'm tasked with is basically a CRUD system for what will likely amount to about a dozen tables.

The technology is likely ASP.NET WebForms + Ajax Ctrl Toolkit + jQuery on the front side, and SQL Server on the backside.

This app will likely never be used by more than 10-20 users at a time as its a single-tenant system; however, at some point we may want to make it a multi-tenant system and would like to keep impact minimal for doing that.

My question to you bright folks, is this: Should I

1.  Build this as a simple 2-tier web application, where the ASP.NET WebForms talk directly to the business objects/layer which deal with data persistance in SQL Server through stored procedures (and maybe some Linq2SQL)?
    
2.  Build an n-tier application, in which the ASP.NET WebApp talks to a WCF service, that handles minipulating the business objects/layer which deal with data persistance in SQL Server through stored procedures (and maybe some Linq2SQL)??
    
3.  Some additional option, which I haven't thought of?
    

A more simple way to ask my question, is should I build a 2-tier app, or a 3-tier app? I am leaning toward a 2-tier since its simple, but maybe since the long term goal is to be multi-tenant, that a 3-tier WCF approach might be wise?

**update**

I appreciate the recommendations for ASP.NET MVC and I will investigate that path; however, any links to using MVC and WCF specifically would be helpful in choosing a final answer.

---

> [Eduardo Molteni answered](https://stackoverflow.com/a/2051618) (1 upvotes):
>
> **Please!! Go 2-tier (MVC or not).**
> 
> Why add the complexity just in case? It will add time and effort to the project with no benefits.
> 
> Later, if the app is super-successful (it must be really, really, super duper successful) you will have the money and resources to re-architect it.
> 
> **Edit: added explanation asked in comments:**  
> N-tier refers to the possibility to run the app in different servers (or in the same server, but each on their own process):
> 
> *   One (or multiple) web servers running IIS
> *   One (or multiple) servers running WCF
> *   DB server
> 
> With 2-tier you have all the app running in the same server (and process), you can have the DB in a separate server.
> 
> You can easily have a 2-tier approach, but with separations of concerns having:
> 
> *   One assembly (VS project) with the DB access (if you use Linq2SQL it will typically have the DataContext)
> *   One assembly with the business logic. This ones talks to the DB access and return `List( of T)` or `IQueryable` objects
> *   The front-end (could be anything) that talk to the business logic.
> 
> If you later decide to change the front-end, you change only this project, and retain the DB access layer and business logic.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2051414) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
