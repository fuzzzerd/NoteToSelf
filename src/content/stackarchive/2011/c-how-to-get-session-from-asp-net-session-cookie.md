---
title: "c# How to get session from asp.net session cookie"
description: "My answer to \"c# How to get session from asp.net session cookie\" on Stack Overflow"
date: 2011-06-06
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - session-state
  - session-cookies
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6254007"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6253964):*

> I'm pretty basic with .net
> 
> But basically I've been told that to have session stickiness for my website in the environment it is to be deployed means I have to get session from the cookie `ASP.NET_SessionId`
> 
> But what does this mean/how do I use this?
> 
> And where I am using my existing session code e.g. `Session.Add("Something", something)` do I now need to change this?

*I posted the following answer:*

Typically the way that I use session variables in ASP.NET is like this

```
// set
Session["SessionVariableName"] = localVariable;

// get
localVariable = Session["SessionVariableName"] as LocalType; // then check nulls

```

The issue with any sessions is that if you don't go out of your way to change it, the default stores sessions in-proc so every time IIS recycles a worker process your session is lost. This can be easily fixed by using the built-in ASP.NET State Service. A quick search turned up [this](http://faisalsikder.wordpress.com/2010/05/08/using-the-asp-dot-net-state-service-for-state-management-in-asp-net-among-several-server/) article on using it.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @thekip In a webfarm, a state server is required, and its much easier to setup an ASP.NET State Server than to have everything pushed in to an SQL Server.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6254007) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
