---
title: "What is the difference between UseHttpsRedirection and UseHsts"
description: "My answer to \"What is the difference between UseHttpsRedirection and UseHsts\" on Stack Overflow"
date: 2018-09-28
author:
  name: Nate Bross
tags:
  - asp.net
  - .net
  - .net-core
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/52557701"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/52556364):*

> I don't quite get the difference between `UseHsts` and `UseHttpsRedirection` in the configure section of the startup file in .net core. Could anyone explain?

*I posted the following answer, which was chosen as the accepted answer and received 49 upvotes:*

According to the documentation you should use both together:

> We recommend all production ASP.NET Core web apps call:
> 
> *   The HTTPS Redirection Middleware (UseHttpsRedirection) to redirect all HTTP requests to HTTPS.
> *   UseHsts, HTTP Strict Transport Security Protocol (HSTS).

[ASP.NET Core Enforce HTTPS](https://learn.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-2.1&tabs=visual-studio)

The `.UseHttpsRedirection()` will issue HTTP response codes redirecting from http to https. The `.UseHsts()` will add the HSTS response [header which the client is supposed to obey.](https://learn.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-2.1&tabs=visual-studio#http-strict-transport-security-protocol-hsts)

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): They do not block incoming requests. `UseHttpsRedirection` should issue a redirect from http to https. `UseHsts` is a header to remind the browser that when they come back to this site, skip the initial http request, and go directly to https. If you want to _block_ http completely, you'd need to do that on your host (iis, apache, etc).

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/52557701) — 49 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
