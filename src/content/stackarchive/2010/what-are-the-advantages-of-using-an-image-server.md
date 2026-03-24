---
title: "What are the advantages of using an image server?"
description: "My answer to \"What are the advantages of using an image server?\" on Server Fault"
date: 2010-08-20
author:
  name: Nate Bross
tags:
  - iis
  - images
  - static-files
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/172928"
---

*Someone [asked on Server Fault](https://serverfault.com/q/172913):*

> An image server for static images and possibly other static files (css, js, etc). Are they only used for large/popular websites? Secondly, are they only really beneficial when the images undergo some sort of processing (e.g. resizing)? I'm not a server guy, so this is unfamiliar territory for me. I'm working with IIS. Are there major differences if it's done on a subdomain (images.mywebsite.com) on the same server or on another separate machine.

*I posted the following answer, which received 2 upvotes:*

If your site isn't very large, and one server can handle all the traffic you anticipate. Simply adding something like static.yourdomain.com via DNS, and linking all your static content off that can provide some benifits because browsers will only do two downloads per DNS name at the same time.

So having

*   css.yourdomain.com
*   img.yourdomain.com
*   www.yourdomain.com

can yeild 6 concurrent downloads over HTTP. This can induce extra DNS lookups, but ideally those will be very quick.

This setup can be done all on the same server, simply with different DNS entries, and when your site is big enough to require separate servers, you can change the DNS and only host the related content under each subdomain.

---
*Originally posted on [Server Fault](https://serverfault.com/a/172928) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
