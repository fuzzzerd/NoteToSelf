---
title: "IIS Server Name Change"
description: "My answer to \"IIS Server Name Change\" on Stack Overflow"
date: 2009-05-12
author:
  name: Nate Bross
tags:
  - iis
  - iis-5
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/853940"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/853910):*

> I have a certificate for that is valid for \*.MyCompany.**com**. That is fine for my dev and test servers because the first part of the URLs for those computers ends like that.
> 
> I want to test this on my computer and the certificate is incorrect because my computer defaults to the url MyComputer.MyCompany.**net**.
> 
> Is there a way to fake out IIS in to thinking that my computer is .MyCompany.**com** or am I out of luck when it comes to testing this?
> 
> Thanks, Vaccano

You should be able to edit the host header values for the IIS website to accept \*.Mycompany.com. To get the DNS to resolve and work correctly, you may need to add an entry to your windows hosts file -- mycomputer.mycompany.com 127.0.0.1. that will let you test locally.

Another option would be to use a self-signed cert for local development.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/853940) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
