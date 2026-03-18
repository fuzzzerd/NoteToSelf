---
title: "Does Boostrap reduce image kb size for smaller devices? Or simply make them “look” smaller?"
description: "My answer to \"Does Boostrap reduce image kb size for smaller devices? Or simply make them “look” smaller?\" on Stack Overflow"
date: 2016-02-05
author:
  name: Nate Bross
tags:
  - twitter-bootstrap
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/35216034"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/35215967):*

> I'm using drupal 7 with Bootstrap, and images use the "img-responsive" class.
> 
> Now the images scale down on small devices.
> 
> But does the KB stay the same?
> 
> This question is related to something I asked over here:
> 
> [https://webmasters.stackexchange.com/questions/89597/what-is-the-best-size-for-massive-header-images-on-front-page/89600?noredirect=1#comment110039\_89600](https://webmasters.stackexchange.com/questions/89597/what-is-the-best-size-for-massive-header-images-on-front-page/89600?noredirect=1#comment110039_89600)

No. Bootstrap consists of client side technologies: CSS and javascript. There's no way it can optimize your images for the device. There maybe some techniques that allow multiple images on the server to exist, and the client side javascript to know what type of device its on and request the appropriate one. I'm saying that is possible, but I don't know if bootstrap does this or not.

If you need to optimize your images for their target size, you will need a server side component to resize the images on the fly. I'm more of a .NET guy myself, so I couldn't make a drupal compatible recommendation there.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/35216034) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
