---
title: "Is it possible to optimize/shrink images before uploading?"
description: "My answer to \"Is it possible to optimize/shrink images before uploading?\" on Stack Overflow"
date: 2009-06-11
author:
  name: Nate Bross
tags:
  - javascript
  - image
  - upload
  - compression
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/984011"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/983953):*

> I am working on a web application that will deal with many image uploads. Its quite likely that the users will be in areas with slow internet connections and I'm hoping to save them upload time by compressing the images before uploading.
> 
> I have seen that Aurigma Image Uploader achieves this using a java applet or active x but it's expensive and I'd rather something open source or at least a little cheaper. Ideally I'd like to roll my own if its at all possible.
> 
> I'm developing on Ruby on Rails if that makes any difference..
> 
> Thanks!
> 
> Edit just to clarify: I don't mind if the solution uses activeX or an applet (although js is ideal) - I'm just looking for something a little cheaper than Aurigma at this stage of development.
> 
> Also, it may not be feasible for users to shrink the image themselves as in many instances they will uploading directly from an internet cafe or other public internet spot.

Only if you use Flash or Silverlight (only way to be cross-platform)

[http://www.jeff.wilcox.name/2008/07/fjcore-source/](http://www.jeff.wilcox.name/2008/07/fjcore-source/) may be worth a read.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Flash currently has a greater install base; but in my experiance Silverlight development is drastically more intuitive. If the browser does not have Silverlight, you can always show the standard upload control and do the processing server side.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/984011) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
