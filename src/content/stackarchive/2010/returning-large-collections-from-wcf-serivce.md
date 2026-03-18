---
title: "Returning large collections from WCF Serivce"
description: "A question I asked on Stack Overflow"
date: 2010-05-07
author:
  name: Nate Bross
tags:
  - .net
  - wcf
  - service
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2789938"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2789938):*

I'm trying to determine the best approach for building a WCF Service, and the area I'm struggling with most is returning lists of objects.

The built-in maxMessageSize of 64k seems pretty high, and I really don't want to bump it up (quick googling finds 100s of places bumping the maxMessageSize up to multi-gigabyte range which seems foolish). But, when I'm returning a collection of objects (~150 items) I am exceeding the default 64k.

I'm almost to the point of returning my own class which inherits IEnumerable and has properties for hasNext, hasPrevious and PageSize so that I can implement paging on the client side -- this seems like alot of code. The other option is to jackup the maxMessageSize and hope for the best, but that feels wrong.

All other aspects of my service are working great, its just returning large collectiosn where I'm having issues.

For background, there are two types of consumers of this service, UI applications which will be primarly web and/or wpf applications, and data processing applications, .NET console apps, and maybe some other non-UI apps. For the UI applications, I would like to keep them responsive and keep the messageSize low, on the console apps it doesn't matter as much as they are just pulling data down to do processing and push it back up to the service.

---

> [to StackOverflow answered](https://stackoverflow.com/a/2790469) (3 upvotes):
>
> I believe the reason the default value for maxMessageSize is so low is to reduce the risk of DoS attacks.
> 
> If response messages are large, it's the _client_ configuration that needs an increased maxMessageSize. For a client, DoS is unlikely to be a risk, so it's safe to increase it to a very large value.
> 
> But this isn't "jacking up maxMessageSize and hoping for the best" - you should decide what the expected maximum size is for your application, taking into account whether or not you decide to use paging, and configure it appropriately.
> 
> On a server, maxMessageSize needs to be big enough for the maximum allowed _request_ message. Here DoS is potentially an issue, though in some environments (e.g. Intranet) it is probably safe to use a very large value.
> 
> If your service is exposing an operation that allows a client to query a potentially large data set, an alternative approach to paging is to define a maximum number of items that a client can request in one call.
> 
> For example, you might have an operation that allows a client to request exchange rates for a list of currencies and a range of dates:
> 
> ```
> public IList<ExchangeRate> GetExchangeRates(string baseCurrency, IList<string> currencies, DateTime startDate, DateTime endDate);
> 
> ```
> 
> You could then set a limit on the number of results your service will return, and expose this to the client:
> 
> ```
> public int GetMaximumResultCount();
> 
> ```
> 
> The client would then be expected to query `GetMaximumResultCount`, and to ensure that:
> 
> ```
> (endDate - startDate).TotalDays * currencies.Count < maximumResultCount
> 
> ```
> 
> If the client fails to respect this, the server throws a suitable `FaultException`

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): What would be a reasonable size then, because 64k seems like it should be more than enough for the relativly modest data size Im dealing with, but I continually run into that limit being an issue.

**Nate** (0 upvotes): I guess foolish is a bad word choice, but I mean that the default is there for a reason, I always try to take a step back when I need to change defaults, especially when I don't fully understand why the default is what it is.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2789938) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
