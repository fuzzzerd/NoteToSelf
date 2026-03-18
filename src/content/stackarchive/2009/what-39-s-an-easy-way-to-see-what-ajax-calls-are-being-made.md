---
title: "What&#39;s an easy way to see what AJAX calls are being made?"
description: "My answer to \"What&#39;s an easy way to see what AJAX calls are being made?\" on Stack Overflow"
date: 2009-05-26
author:
  name: Nate Bross
tags:
  - javascript
  - ajax
  - debugging
  - xmlhttprequest
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/911218"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/911209):*

> I'm looking for something (preferably a Firefox extension) which will allow me to see all AJAX subrequests. Basically, anytime an XMLHTTPRequest() is made, I want to know what URL was being requested and what (if any) GET and POST vars were passed along with it.
> 
> Unless I'm missing it, I don't see anything quite like this in Firebug or Web Developer Toolbar.
> 
> _(In case you're curious, the main reason for wanting this is that I want to scrape a local copy of a site that is using JS to load all its contents, and I don't want to spend hours digging through their JS code when I could just see the subrequests being made.)_

[Fiddler 2](http://www.fiddler2.com/fiddler2/) is a great tool for watching HTTP traffic.

**\* 2014 Update \***

Since my original post, both Internet Explorer and Chrome have added built-in developer tools that are quite useful. While I still support and use Fiddler for non-web related http monitoring or when I need to really dig in deep and modify requests in transit, these days I find myself pretty much using IE or Chrome's built in tools as they are sufficient for 99% of my needs. They both have a networking tab, where you can monitor http requests, plus other nifty features for debugging webpages.

*   [Internet Explorer F12 Tools Introduction](http://msdn.microsoft.com/en-us/library/ie/gg589512\(v=vs.85\).aspx)
*   [Documentation for Chrome's F12 Tools](https://developer.chrome.com/devtools)
*   [FireBug, which is mentioned above](https://stackoverflow.com/a/911214/86860) is also a good tool if you're using FireFox.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/911218) — 10 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
