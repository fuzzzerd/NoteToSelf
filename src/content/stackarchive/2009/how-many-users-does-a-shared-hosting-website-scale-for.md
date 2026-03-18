---
title: "How many users does a shared hosting website scale for?"
description: "My answer to \"How many users does a shared hosting website scale for?\" on Stack Overflow"
date: 2009-05-15
author:
  name: Nate Bross
tags:
  - shared-hosting
  - shared
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/870758"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/870741):*

> I'm planning on hosting 3 or 4 WCF/.NET 3.5 REST webservices to be used by a new iPhone application.
> 
> I've heard good reviews about DiscountASP.NET ([http://www.discountasp.net/index.aspx](http://www.discountasp.net/index.aspx)), but I'm pretty ignorant about shared hosting performance. At the same time, I think it's still early to pay $90 a month for a scalable Amazon EC2 server instance.
> 
> So, any idea how many hits/month would a shared hosting website handle?

They are all different. It depends on how much bandwidth they are giving you. (GB/Month is a typical metric).

I would say that hits per month could range in the low hundred thousands without causing major issues on many managed hosting. It all depends how intenst your WCF services are. The advantage is that many managed hosting facilities will allow you to dynamically add more hosting power to your site. (For more $ obviously).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/870758) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
