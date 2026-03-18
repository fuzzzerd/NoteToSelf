---
title: "not able to close the jquery iframe thickbox when the page is https"
description: "My answer to \"not able to close the jquery iframe thickbox when the page is https\" on Stack Overflow"
date: 2010-04-15
author:
  name: Nate Bross
tags:
  - javascript
  - jquery
  - thickbox
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2646432"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2628643):*

> I have jQuery `thickbox(TB_iframe=true)` which shows an https page in an iframe based overlay.
> 
> the parent page is http & overlay page is https. if i use
> 
> ```
> self.parent.tb_remove() 
> 
> ```
> 
> This does not work and gives me
> 
> Permission denied for `<https://www.abc.com>` to get property `Window.tb_remove` from `<http://www.abc.com>`.
> 
> Any solution. I want to be able to close the thikbox irrespective to whether its is https or http page that it is displaying in an iframe.

As Daniel said, you should use a relative url. The reason it fails is because you you must only read javascript content at the same "trust" (ssl) level that you are currently on.

You wouldn't want your bank's HTTPS site doing an ajax query to a non-https web service would you?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2646432) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
