---
title: "How to get a subdomain to point a different server than the main domain"
description: "My answer to \"How to get a subdomain to point a different server than the main domain\" on Server Fault"
date: 2010-04-16
author:
  name: Nate Bross
tags:
  - domain-name-system
  - hosting
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/133211"
---

*Someone [asked on Server Fault](https://serverfault.com/q/133209):*

> I have a site at say:
> 
> foo.com and I would like the subdomain blog.foo.com to point to fooblog.com
> 
> blog.foo.com -> fooblog.com
> 
> However, our DNS provider says that if we do an alias such as that, since the provider at fooblog.com does not recognize the name blog.foo.com. We asked if we could just point blog.foo.com at the IP address of fooblog.com and they say the same problem will occur.
> 
> Any advice? Due to our configuration we can't really put the blog on foo.com. We are willing to move our hosting and even our domain name hosting if necessary.
> 
> \--
> 
> Yes, I am a n00b when it comes to DNS.

*I posted the following answer, which received 1 upvote:*

You should be able to create an alias from `blog.foo.com` and point it at `fooblog.com` -- I don't see why that would not work, unless the web server on the target is filtering by host-header values. And if that's the case, changing DNS providers would not fix it.

---
*Originally posted on [Server Fault](https://serverfault.com/a/133211) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
