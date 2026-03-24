---
title: "REST api pagination: make page-size a parameter (configurable from outside)"
description: "My answer to \"REST api pagination: make page-size a parameter (configurable from outside)\" on Stack Overflow"
date: 2010-01-06
author:
  name: Nate Bross
tags:
  - rest
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2015944"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2015925):*

> we are having a search/list-resource:
> 
> `[http://xxxx/users/?page=1](http://xxxx/users/?page=1)`
> 
> Internally the page-size is static and returns 20 items. The user can move forward by increasing the page number. But to be more flexible we are now thinking also to expose the size of a page:
> 
> `[http://xxxx/users/?page=1&size=20](http://xxxx/users/?page=1&size=20)`
> 
> As such this is flexible as the client can now decide network-calls vs. size of response, when searching. Of course this has the drawback that the server could be hit hard either by accident or maliciosly on purpose: `[http://xxxx/users/?page=1&size=1000000](http://xxxx/users/?page=1&size=1000000)`
> 
> For robustness the solution could be to configure an upper limit of page size (e.g. 100) and when it is exceeded either represent an error response or a HTTP redirect to the URL with highest possible page-size parameter.
> 
> What do you think?

*I posted the following answer, which was chosen as the accepted answer and received 17 upvotes:*

Personally, I would simply document a maximum page size, and anything larger than that is simply treated as the maximum.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2015944) — 17 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
