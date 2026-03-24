---
title: "Should I use jQuery controls instead of HTML/asp.net controls in most situations?"
description: "My answer to \"Should I use jQuery controls instead of HTML/asp.net controls in most situations?\" on Stack Overflow"
date: 2012-02-20
author:
  name: Nate Bross
tags:
  - jquery
  - asp.net
  - html
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9366459"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9366323):*

> I'm relatively new to jQuery. To me, there's three sets of controls (html controls, asp.net controls, and jQuery controls). To build an asp.net web page, how should I choose which one to choose from if these three all have the same control (e.g., button). In other words, in what situation should I pick one over the others?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

My approach is to always use basic html in as many situations as possible. ASP.NET and jQuery controls end up generating standard html controls in the end, they just abstract away some aspects. Without a more specific question, it is very hard to say what you should use. It is probably not what you want to hear, but you need to better understand the differences between these three types and make pick the best option for the situation at hand.

That said, I find myself using standard html input controls as much as possible, and using jQuery for client-side interactions. With ASP.NET MVC this is much easier than WebForms; though it's possible in both. If you're in WebForms you may wish to use the built-in ASP.NET controls.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @lwconquer, yes. In general jQuery is much more popular with MVC; there is no technical reason. WebForms has the built-in controls so the other controls are not always needed. That said, jQuery can be used in conjunction with WebForms controls.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9366459) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
