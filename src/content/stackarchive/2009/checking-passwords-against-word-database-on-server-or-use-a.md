---
title: "Checking passwords against word database on server or use a web service?"
description: "My answer to \"Checking passwords against word database on server or use a web service?\" on Stack Overflow"
date: 2009-06-14
author:
  name: Nate Bross
tags:
  - ruby-on-rails
  - authentication
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/991862"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/991860):*

> If I want to check passwords in my application for the inclusion of English words, should I store a database of English words locally (is there a free database?) or is there a (free) web service I can use to check them remotely?
> 
> Ideally I would check the words using an Ajax call but I don't want to pass the entire English dictionary by XML. I have a feeling network traffic could become a problem.
> 
> Any suggestions?
> 
> (Also, any Rails-specific suggestions?)

*I posted the following answer:*

I would store them in a database/xml file on your web server, then use an Ajax Javascript call to a web service running on that same server. In ASP.NET this is easy to do; I'm not sure how involved this is when using rails...

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/991862) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
