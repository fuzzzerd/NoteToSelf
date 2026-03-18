---
title: "How does one get the method name from a WCF Request in Application_BeginRequest?"
description: "My answer to \"How does one get the method name from a WCF Request in Application_BeginRequest?\" on Stack Overflow"
date: 2016-08-26
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - iis
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/39174787"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/39174128):*

> I'm hosting WCF in an IIS, in my HttpApplication I'd like to get the WCF operation contract name (method being called) in the `Application_BeginRequest` method:
> 
> ```
> protected void Application_BeginRequest(object sender, EventArgs e)
> {
>     var request = Context.Request;
> }
> 
> ```
> 
> I get the request from the context but I'm unable to understand how to find the name of the WCF method that was called.

Check out the incoming HTTP Headers:

`Console.WriteLine(HttpContext.Current.Request.Headers["SOAPAction"]);`

This will spit out the full value, in my sample that was:

> "[http://tempuri.org/IService1/DoWork](http://tempuri.org/IService1/DoWork)"

It is probably worth noting, but [`OperationContext.Current.IncomingMessageHeaders.Action`](https://msdn.microsoft.com/en-us/library/system.servicemodel.channels.messageheaders.action\(v=vs.110\).aspx) won't work in `Application_BeginRequest` because the operation hasn't started yet, so `OperationContext.Current` is null.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/39174787) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
