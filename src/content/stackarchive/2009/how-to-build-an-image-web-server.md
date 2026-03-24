---
title: "How to build an image web server?"
description: "My answer to \"How to build an image web server?\" on Stack Overflow"
date: 2009-06-09
author:
  name: Nate Bross
tags:
  - image
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/972688"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/972675):*

> I am trying to build an web image server. It serves images to lots of clients(10 thousands+) simultaneously. (It will be a easier problem if there is fewer clients.) What is a good way to do so, with time delay as small as possible.
> 
> I am new to this field. Any suggestion will be welcomed.

*I posted the following answer, which received 1 upvote:*

How are the images to be served? Are the images generated on the fly? or are they static and stored as .jpg or other format on the file system?

Either way, I'd use ASP.NET .ashx (generic handlers) and use the System.Drawing classes.

You'll also want to setup TCP/IP Network Load Balancing per [http://support.microsoft.com/kb/323431](http://support.microsoft.com/kb/323431)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/972688) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
