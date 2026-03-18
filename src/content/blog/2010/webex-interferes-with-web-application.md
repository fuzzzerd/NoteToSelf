---
title: "webex interferes with web application"
description: "My answer to \"webex interferes with web application\" on Stack Overflow"
date: 2010-06-10
author:
  name: Nate Bross
tags:
  - javascript
  - html
  - internet-explorer
  - webex
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3017562"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2413282):*

> I received a complaint about buttons disappearing and odd formatting of a web application that I support. Upon troubleshooting, it seemed that the only thing new about the environment (which was previously working fine) was the installation of webex on the client machine.
> 
> Uninstalling webex resolved the issue. Please mind that **webex was not being used during the issue**, but it was still causing odd displays and formatting of Internet Explorer pages.
> 
> I've always disliked webex because it required reboot to use and the client felt very invasive (gotomeeting can accomplish the same if not better features without being nearly as invasive).
> 
> OK, I guess the first few sentences were a frustrated rant. The question is, what does webex do to mangle Internet Explorer pages (even when webex is not actively being used).
> 
> Examples of the mangling are: non appearing buttons; completely overridden css; and javascript errors (when the app has no javascript errors).

Did you check Internet Explorer "add-ons"? I'll bet they've installed an add-on during the installation of their client, which is possibly embedding its own HTML into every page.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3017562) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
