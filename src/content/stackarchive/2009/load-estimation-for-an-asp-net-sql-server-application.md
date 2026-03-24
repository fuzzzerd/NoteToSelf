---
title: "Load estimation for an ASP.Net / SQL Server application"
description: "My answer to \"Load estimation for an ASP.Net / SQL Server application\" on Server Fault"
date: 2009-05-06
author:
  name: Nate Bross
tags:
  - sql-server
  - asp.net
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/5380"
---

*Someone [asked on Server Fault](https://serverfault.com/q/3568):*

> Are there any heuristics to define server requirements for typical applications? Coming from internal development to a handful of users, this is our first deployment of a internet application. Internally, we just deploy, monitor and act if needed, but being on a tight budget and having to deploy remotely, I have to do a estimate with a greater degree of accuracy.
> 
> I have the following sources of input to a parametric estimate:
> 
> Out of testing I get: - the trafic volume - the number of SQL requests
> 
> And from the project management I get the number of expected total and simultaneously connected users.
> 
> Is there a rule of thumb that I can apply on these parameters?

*I posted the following answer, which received 1 upvote:*

There is no silver bullet; and depending on the nature of your application you may see more load with fewer users. For example alot of Ajax on a site can drastically increase the load on Web and DB servers.

I have heard that ~75 concurrent users per 1GB RAM and single Core CPU on the web server is a safe estimate. So your typical 8GB / Quad Core Server should handle alot of users. If you get to that point, bandwidth may also start to play a role in your load.

I don't have much experiacne with SQL Server but I would imagine that similar numbers apply.

---
*Originally posted on [Server Fault](https://serverfault.com/a/5380) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
