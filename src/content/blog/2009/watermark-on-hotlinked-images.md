---
title: "Watermark on hotlinked images?"
description: "My answer to \"Watermark on hotlinked images?\" on Stack Overflow"
date: 2009-10-15
author:
  name: Nate Bross
tags:
  - jquery
  - watermark
  - hotlinking
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1570372"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1570298):*

> I wonder if its possible to have a watermark on hotlinked images on an external site, but not on the original site? I'm using jQuery, can I do something about this?
> 
> Thanks heaps!

This is not possible through a client-side technology. You will need to go server based.

If you have access to a server side technology, such as ASP.NET; you could expose all of your images through an ashx handler. This would let you display a water mark on some images, or not display images at all depending on the source.

Here's a great article on writing ashx handlers for images -- [http://dotnetperls.com/ashx-handler/](http://dotnetperls.com/ashx-handler) [https://web.archive.org/web/20160311222240/http://www.dotnetperls.com/ashx-handler](https://web.archive.org/web/20160311222240/http://www.dotnetperls.com/ashx-handler)

If you are using a \*nix based server, @Jojo has some links for using php to similar effect.

After writing such a handler in ASP.NET or php, you'll need to check the HTTP Referer to see if it is a page on your site, or a third party site and then do the necessary image processing to produce your watermakr effect.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1570372) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
