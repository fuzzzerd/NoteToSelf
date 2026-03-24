---
title: "Asked on Windows Azure deployment"
description: "My answer to \"Asked on Windows Azure deployment\" on Stack Overflow"
date: 2013-04-12
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - node.js
  - azure
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/15975773"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/15975180):*

> I'm developing an application that I want to deploy to Windows Azure. Before doing so, I try to calculate the price of this deployment and I have not very clear. The deployment consists of one side of an ASP.NET MVC 4 application with a SQL DB which will have a high number of reads (for that use asynchronous methods) and return the results to a web client in json format.
> 
> Furthermore, for users who do searches, I'll have a chat server in Node.js in which users can communicate application.
> 
> I know that in terms of outbound traffic and storage in my DB depends entirely on the number of users, but what kind of service I choose Windows Azure application to ASP.NET and server chat? Websites?? Cloud services?? In how web roles and worker roles results? What if I want scalability of any of the two services? thanks

*I posted the following answer:*

You can deploy an asp.net mvc application _directly_ to Azure Websites; in order to use a web role you need to have additional project setup. Also, websites allows you do deploy directly from source control. Since they are free to try, start with a website and see where it takes you. If it works, keep using it, if it limits you, try switching to a web role.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/15975773) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
