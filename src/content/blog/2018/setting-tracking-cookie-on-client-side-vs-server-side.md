---
title: "Setting tracking cookie on client side vs server side?"
description: "My answer to \"Setting tracking cookie on client side vs server side?\" on Stack Overflow"
date: 2018-02-13
author:
  name: Nate Bross
tags:
  - javascript
  - c#
  - asp.net
  - asp.net-mvc
  - cookies
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48776998"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48774879):*

> We want to set tracking cookie to check how many users we are getting through various marketing campaigns. On each campaign URL of our website, we add following query string parameters:- utm\_source, utm\_medium and utm\_campaign.
> 
> Sample URL:- [https://example.com/?utm\_source=facebook&utm\_medium=cpc&utm\_campaign=jan](https://example.com/?utm_source=facebook&utm_medium=cpc&utm_campaign=jan)
> 
> Anytime, we get request from any URL on our server, we check:
> 
> 1.  If url has utm\_\* parameters, we save those in the cookie.
> 2.  If there's no such utm\_\* parameters in the url and If referer host is our website i.e. [https://example.com/](https://example.com/), we save that in cookie for 6 months.
> 3.  If there's no such utm\_\* parameters in the url and referer is one of search engine, we save search engine name in cookie.
> 
> and we have few more similar conditions.
> 
> Should we write this logic on server side (C#) OR Client side(javascript)?

Technically you can do it on either end; but in reality, you might have slightly better luck with a server side approach as it will be harder for browsers to get around (either they accept cookies or not). Things like noscript and adblockers could interfere with a client side implementation.

Additionally, if you do things server side, you could store that information along with a thumb print of the browser in a database and compare against that for future visits. That would work even if cookies are being blocked/cleared.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48776998) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
