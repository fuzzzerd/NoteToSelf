---
title: "How to avoid using membership provider?"
description: "My answer to \"How to avoid using membership provider?\" on Stack Overflow"
date: 2011-07-28
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - security
  - asp.net-mvc-3
  - membership-provider
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6862343"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6862222):*

> We are currently building architecture for thin-client bookkeeping application. It should follow two main requirements:
> 
> 1.  Application should have module design. Each module can have (and they actually do have) own Role system.
> 2.  Later application should be adapted for running using different databases on different machines.
> 
> We think Asp.NET MVC 3 is appropriate platform for this task. For managing application data we chosen latest version of Entity Framework - its batch of Data Providers and Code First feature can save us much time.
> 
> The part we are tangled with is user/role management system. We should have some kind of Global Administration section for adding users and giving them access to modules (only global admins can add user to the system, no "guy from street" registration supported) and each module has its own administration section with its own admins and roles. We already have data model to store everything we need in appropriate way but have no idea how to access this data correctly from application.
> 
> Currently we see two possible ways to resolve this problem:
> 
> 1.  To write custom Membership and Role providers based on our DAL. Nobody from our team have done this before so we are not sure if this way worth the trouble. Membership provider cant offer as much flexibility as application needs so some crunches would be needed.
> 2.  To dig through some obsolete books to find out how web sites administration system was organized before Membership providers where created.
> 
> Both this ways are not elegant and not obvious for us and its not an easy question which way to choose. Also we do believe that it can be other solution (of cause architecture can be affected). So, we would be glad to see any suggestion connected to this problem.

*I posted the following answer, which received 3 upvotes:*

> 1.  To write custom Membership and Role providers based on our DAL. Nobody from our team have done this before so we are not sure if this way worth the trouble. Membership provider cant offer as much flexibility as application needs so some crunches would be needed.

It is very much worth the trouble, if the default ones do not provide the functionality you need. If you already have a complex user system in your database, a custom membership provider is probably a good idea.

It will add valuable experience to your team, and you should be able to reuse much of the code in your next project. As @Randolf mentioned, there are loads of good resources for building a customer Membership provider, and I speak from some experience when I say that it is not really all that difficult. Everything is there, you just need to implement some methods.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6862343) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
