---
title: "CNAME redirection record"
description: "My answer to \"CNAME redirection record\" on Server Fault"
date: 2010-09-21
author:
  name: Nate Bross
tags:
  - hosting
  - domain-name-system
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/183248"
---

*Someone [asked on Server Fault](https://serverfault.com/q/183246):*

> I just registered a domain name (say [http://www.abc.com](http://www.abc.com) ). I also have a website with content on it (say [http://www.freehost.com/mywebsite](http://www.freehost.com/mywebsite)).
> 
> I would like to redirect visitors that type [http://www.abc.com](http://www.abc.com) to [http://www.freehost.com/mywebsite](http://www.freehost.com/mywebsite). Can this be done with DNS records (and if so , how?)?
> 
> Thanks!!
> 
> Joel
> 
> * * *
> 
> Edit:
> 
> Thanks for all the answers! I understand that it works only for top level domains. What about subdomains? Can I use CNAME to redirect to [http://mydomain.freehost.com](http://mydomain.freehost.com) ?

*I posted the following answer:*

Two steps:

1.  You'll need to create a CNAME from www.abc.com to www.freehost.com.
2.  Create a redirect page (php, aspx, etc) at www.freehost.com to send anyone who hits it to www.freehost.com/mywebsite

You cannot fully implement your solution with DNS alone, but with the above steps you can achieve the result you are looking for.

---
*Originally posted on [Server Fault](https://serverfault.com/a/183248) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
