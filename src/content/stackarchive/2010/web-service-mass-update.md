---
title: "Web service mass update"
description: "My answer to \"Web service mass update\" on Stack Overflow"
date: 2010-08-09
author:
  name: Nate Bross
tags:
  - asynchronous-wcf-call
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3441695"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3441678):*

> Is there a compelling reason to offer "batch update" version of update methods in a .NET web service?
> 
> Is there a considerable advantage over making multiple calls, asynchronous or synchronous, over HTTP?
> 
> My first impulse is to offer asynchronous calls and include a record ID in the input composite, and to push-back on the requirement to offer batch operation as a micro-optimization. Alternatively, I would request the consumer to use an iterative loop and make multiple calls.
> 
> I don't wish to make a poor suggestion.

I believe the reason for offering "Batch Updates" is to reduce transaction load on your Database Server. That said, if this isn't a concern, I wouldn't bother offering one.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3441695) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
