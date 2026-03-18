---
title: "Access WCF Authentication information from the Service Side"
description: "A question I asked on Stack Overflow"
date: 2009-07-30
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - service
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1209789"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1209789):*

I use this code to authenticate to my WCF Service:

```
proxy.ClientCredentials.UserName.UserName = "test";
proxy.ClientCredentials.UserName.Password = "pass";

```

Is there any way to access this information from within a method of my WCF Service code? (I'm not interested in the password used, more the username for audit purposes.)

I'm trying to determine the identity of the user calling the method without changing the method signiture to include another parameter.

---

> [tomasr answered](https://stackoverflow.com/a/1209851) (3 upvotes):
>
> Have you tried looking into the [ServiceSecurityContext](http://msdn.microsoft.com/en-us/library/system.servicemodel.servicesecuritycontext\(VS.85\).aspx)?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1209789) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
