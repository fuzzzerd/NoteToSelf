---
title: "Secure WCF Service so that only my &quot;clients&quot; can call it"
description: "A question I asked on Stack Overflow"
date: 2011-05-04
author:
  name: Nate Bross
tags:
  - .net
  - wcf
  - web-services
  - security
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/5887023"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/5887023):*

I'm about to write a WCF Service to run on IIS. The service will be called by a variety clients, including Android, iOS, Windows Phone, and Black Berry as well as possibly a Windows/Mac Desktop Client.

I understand that the client should always be treated as hostile. My design already incorporates several checks in the data to make sure that fake clients don't abuse it; however, I'm wondering what other techniques one can use to ensure that a service is only called by authorized clients?

---

> [Ben answered](https://stackoverflow.com/a/5887060) (2 upvotes):
>
> You could require transport-layer security (SSL) and distribute the appropriate keys out-of-band - I believe that's how it's usually done.
> 
> **EDIT**
> 
> How this is implemented server-side can vary based on the binding you're using. To configure this for the vanilla wsHttpBinding, follow the instructions [here](http://wcfsecurity.codeplex.com/wikipage?title=How%20To%20-%20Use%20Certificate%20Authentication%20and%20Message%20Security%20in%20WCF%20calling%20from%20Windows%20Forms).
> 
> The RESTful webHttpBinding also supports certificate authentication, but only with HTTPS - not just HTTP.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/5887023) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
