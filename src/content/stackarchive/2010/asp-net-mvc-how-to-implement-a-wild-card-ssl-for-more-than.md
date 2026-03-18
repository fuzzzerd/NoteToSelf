---
title: "ASP.NET MVC: How to implement a wild card SSL for more than one static domain on a single IP?"
description: "My answer to \"ASP.NET MVC: How to implement a wild card SSL for more than one static domain on a single IP?\" on Stack Overflow"
date: 2010-05-12
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - ssl
  - wildcard-subdomain
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2819984"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2819946):*

> A wild card SSL allows any domain prefix:
> 
> ```
> *.mydomain.com accepts
> ssl.mydomain.com
> secure.mydomain.com
> anything.mydomain.com
> 
> ```
> 
> Given that MVC can route the request to the correct view based on the URL, is it as simple as loading the wildcard SSL cert on an IP, then use DNS to map the various names to the IP?

Presuming you have each of the above setup as a separate site in IIS, you simply need to apply the certificate to each site through the IIS6 wizard or the IIS7 Bindings Menu.

In terms of SSL, the IP address does not matter, because the SSL Certificate is based on a DNS name, not an IP.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I believe that is possible, you just have to add an additional binding.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2819984) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
