---
title: "Developing a new RESTful web service in .NET -- where should I begin? ASP.NET-MVC, WCF?"
description: "A question I asked on Stack Overflow"
date: 2010-02-15
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
  - wcf
  - rest
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2268793"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2268793):*

The objective is to build a service that I will then consume via jQuery and a standards based web front-end, mobile device "fat-clients," and very likely a WPF desktop application.

It seems like WCF would be a good option, but I've never built a RESTful service with WCF, so I'm not sure where to even begin on that approach.

The other option I'm thinking about is using ASP.NET MVC, adding some custom routes, add a few controller actions and using different views to push out JSON, xml, and other return types.

This project is mostly a learning exercise for myself, and I'd like to spend some extra time and do it "right" so I have a better undertanding of how the pieces fit together.

So my question is this, which approach should I use to build this RESTful service, and what are some advantages of doing it that way?

---

> [casperOne answered](https://stackoverflow.com/a/2268807) (8 upvotes):
>
> Normally, I would say WCF for any kind of hosted serice, but in the specific case for RESTful services using JSON as a serialization mechanism, I prefer ASP.NET MVC (which I will refer to as ASP.NET for the remainder of this answer).
> 
> One of the first reasons is because of the routing mechanism. In WCF, you have to define it on the contract, which is all well and good, but if you have to make quick changes to your routing, from my point of view, it's much easier to do them using the routing mechanism in ASP.NET.
> 
> Also, to the point above, if you have multiple services exposed over multiple interfaces in WCF, it's hard to get a complete image of your URL structure (which is important), whereas in ASP.NET you (typically) have all of the route assignments in one place.
> 
> The second thing about ASP.NET is that you are going to have access to all of the intrinsic objects that ASP.NET is known for (Request, Response, Server, etc, etc), which is essential when exposing an HTTP-specific endpoint (which is what you are creating). Granted, you can use many of these same things in WCF, but you have to specifically tell WCF that you are doing so, and then design your services with that in mind.
> 
> Finally, through personal experience, I've found that the [`DataContractJsonSerializer`](http://msdn.microsoft.com/en-us/library/system.runtime.serialization.json.datacontractjsonserializer.aspx) doesn't handle `DateTimeOffset` values too well, and it is the type that you should use over `DateTime` when working with a service (over any endpoint) which can be called by people over multiple timezones. In ASP.NET, there is a different serializer that you can use, or if you want, you can create your own `ActionResult` which uses a custom serializer for you. I personally prefer the [JSON.Net serializer](http://james.newtonking.com/pages/json-net.aspx).
> 
> One of the nice things about the JSON.Net serializer and ASP.NET that I like is that you can use anonymous types with it, if you are smart. If you create a static generic method on a non-generic type which then delegates to an internal generic type, you can use type inference to easily utilize anonymous types for your serialized return values (assuming they are one-offs, of course, if you have a structure that is returned consistently, you should define it and use that).
> 
> It should also be mentioned that you don't have to completely discount WCF if developing a RESTful service. If you are pushing an ATOM or RSS feed out from your service then the classes in the [`System.ServiceModel.Syndication`](http://msdn.microsoft.com/en-us/library/system.servicemodel.syndication.aspx) namespace of **massive** help in the construction and serialization of those feeds. Creating a simple subclass of the `ActionResult` class to take an instance of [`SyndicationFeed`](http://msdn.microsoft.com/en-us/library/system.servicemodel.syndication.syndicationfeed.aspx) and then serialize it to the output stream when the `ActionResult` is executed is quite simple.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2268793) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
