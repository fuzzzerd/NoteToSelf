---
title: "Style attribute vs setting ID and external Css"
description: "A question I asked on Stack Overflow"
date: 2009-09-10
author:
  name: Nate Bross
tags:
  - css
  - markup
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1403349"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1403349):*

I understand the concept of keeping all presentational elements outside of the markup and putting them into an external .css file.

I want to get a feel for what types of situations you'd justify use of the style attribute vs setting IDs and external Css.

To this point, I've used the style attribute a lot, I usually use it to specify presentation items specific to that element and anything that is for all elements I pull into an external css file but I'd like to reevaluate my position and make the best choice going forward.

---

> [Warren Young answered](https://stackoverflow.com/a/1403391) (2 upvotes):
>
> Use external CSS for static definitions. Use element ID lookups and the style attribute for things that change at run-time or where you need Javascript to set things up because CSS isn't capable of what you want.
> 
> A good example of the latter was zebra-striping in jQuery prior to widespread support for [CSS 3 selectors](http://caniuse.com/#feat=css-sel3):
> 
> ```
> $(document).ready = function() {
>     $("table tr:nth-child(even)").addClass("striped");
> });
> 
> ```
> 
> Today, you can do that in the static CSS, but once upon a time, doing in in Javascript was the best option.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1403349) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
