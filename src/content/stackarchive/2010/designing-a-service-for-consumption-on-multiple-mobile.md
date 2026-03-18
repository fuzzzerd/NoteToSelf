---
title: "Designing a service for consumption on multiple mobile platforms"
description: "A question I asked on Stack Overflow"
date: 2010-04-27
author:
  name: Nate Bross
tags:
  - .net
  - iphone
  - android
  - web-services
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2718664"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2718664):*

I am building and designing a (mostly) read-only interface to some data. I'll be uing ASP.NET MVC to build a psudo-restful API. I'm wondering if anyone can provide some resources for building full-client applications for various mobile platforms, iPhone, Android, Blackberry, Windows Mobile, etc.

I'm thinking that serving up XML data is going to be the most simple and universal, but parsing XML in objective-C for example doesn't sound like fun to me, but maybe there are some good libaries out there to help ease this task?

In other words, what formt will be the quickest to implement on the client side? Are there any JSON parsrs for iPhone or Android? I know there are .NET JSON parsers, but not sure about other platforms -- is ther another format that might better? Or should I stick with pure XML and deal with it on each platform differently?

---

> [I&#241;aki Elcoro answered](https://stackoverflow.com/a/2719559) (1 upvotes):
>
> You could create a WCF REST Service that exposes the results in both formats, json and xml, and depending on the device, you could select the format that better fits the device capabilities. Also this is way better than creating and ASP.MVC "pseudo-restful API".
> 
> The WCF Service would look like this:
> 
> ```
> [ServiceContract]
> public interface IService
> {
>     [OperationContract]
>     [WebInvoke(
>         Method = "GET",
>         ResponseFormat = WebMessageFormat.Xml,
>         BodyStyle = WebMessageBodyStyle.Wrapped,
>         UriTemplate = "DoWork/xml/{ID}/{Filter}")]
>     void DoWork(int ID, string Filter);
> 
>     [OperationContract]
>     [WebInvoke(
>         Method = "GET",
>         ResponseFormat = WebMessageFormat.Json,
>         BodyStyle = WebMessageBodyStyle.Wrapped,
>         UriTemplate = "DoWork/json/{ID}/{Filter}")]
>     void DoWorkJson(int ID, string Filter);
> }
> 
> ```
> 
> You can find a good example for creating a WCF Rest Service [here.](http://www.gtrifonov.com/blog/2009/02/05/Building_JSON,XML_REST_API_using_WCF_services.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2718664) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
