---
title: "Can IIS serve Most Frequently Used static files from RAM?"
description: "My answer to \"Can IIS serve Most Frequently Used static files from RAM?\" on Stack Overflow"
date: 2009-04-03
author:
  name: Nate Bross
tags:
  - apache
  - iis
  - caching
  - webserver
  - windows-server-2008
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/715152"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/715143):*

> Can I set up an IIS server so that it will cache the most frequently used static files (binary) from disk into RAM, and serve from RAM on request?
> 
> Update: [mod\_mem\_cache](http://httpd.apache.org/docs/2.2/mod/mod_mem_cache.html) in [Apache Caching Guide](http://httpd.apache.org/docs/2.2/caching.html#inmemory) seems to be what I'm looking for. Any equivalent thing in IIS?
> 
> Thanks.

You may be able to setup a ram drive, and then move your files there and setup IIS virtual directory there.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/715152) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
