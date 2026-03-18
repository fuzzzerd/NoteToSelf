---
title: "Is it possible to use Azure Mobile Services with WP7"
description: "A question I asked on Stack Overflow"
date: 2012-12-18
author:
  name: Nate Bross
tags:
  - c#
  - azure
  - windows-phone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/13938523"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/13938523):*

I realize there will be additional work (as the SDK only works on Windows 8 and WP8) as the SDK provides controls to provide a login sequence (via Microsoft Account, Facebook, etc).

I am wondering if it is possible to achieve the same result with a Windows Phone 7 app? I've been searching for a while, and there is not much on Mobile Services at all, let alone for WP7. Is there some (technical?) reason (besides the fact that WP7 is not the latest and greatest) that Microsoft has left WP7 out in the cold with Azure Services?

I realize that just accessing the data via REST in WP7 is trivial, but I'm really getting at is the entire process of using deferred authentication restricting access to users own data only, is this doable without their SDK without a monumental effort?

---

> [JLaanstra answered](https://stackoverflow.com/a/15416543) (1 upvotes):
>
> A preview of the new C# client which supports Windows Phone 7.5 is now [available](http://nuget.org/packages/WindowsAzure.MobileServices/) to try out. Remember it is pre-release and therefore not supported. [http://www.johanlaanstra.nl/?p=217](http://www.johanlaanstra.nl/?p=217)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/13938523) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
