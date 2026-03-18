---
title: "Silverlight WCF Authentication (Help going from WPF to Silverlight)"
description: "A question I asked on Stack Overflow"
date: 2009-05-19
author:
  name: Nate Bross
tags:
  - wcf
  - silverlight
  - ssl
  - silverlight-2.0
  - wcf-security
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/885326"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/885326):*

I have an existing working WPF Application in which I have implemented my own custom authentication to a backend WCF service. When I access this service from WPF, setup the ServiceProxy as follows:

```
proxy.ClientCredentials.UserName.UserName = "test";
proxy.ClientCredentials.UserName.Password = "pass";

```

and because I'm using HTTPS the uid/pwd is secure.

In Silverlight 2 there is no .ClientCredentials object on the proxy. The only option I've found is to add two string parameters to EVERY WCF Exposed method for Uid/Pwd. That sounds like insanity to me, there MUST be a better way, no?

---

> [Andy Britcliffe answered](https://stackoverflow.com/a/886874) (4 upvotes):
>
> Unfortunately Silverlight 2 only supports basicHttpBinding which means it doesn't support ClientCredentials.
> 
> The 2 options you have are: 1. As you mentioned passing the username and pass with each request. 2. using asp.net authentication and enable asp.net compatability mode in your services.
> 
> **_\-- N.B TransportSecurityWithMessageCredentials I mention below didn't seem to make the cut for SL3 so only options are the 2 above for both SL2 and SL3_**
> 
> Silverlight 3 improves on this story with TransportSecurityWithMessageCredentials and you can find out more about this on the Silverlight Web Services Team blog (Would link to it but apparently as I'm a new user I'm not allowed0
> 
> HTH

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/885326) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
