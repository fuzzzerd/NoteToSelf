---
title: "Returning xml from asmx webmethod call?"
description: "My answer to \"Returning xml from asmx webmethod call?\" on Stack Overflow"
date: 2011-05-03
author:
  name: Nate Bross
tags:
  - asp.net
  - web-services
  - soap
  - asmx
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5876574"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5876510):*

> Is it possible to return plain old xml using an asmx file? Without the SOAP stuff?

I would recommend you look into a generic handler if your goal is to avoid SOAP. Start [here](http://www.brainbell.com/tutorials/ASP/Generic_Handlers_%28ASHX_Files%29.html) to for some info on using generic handlers, also called ASHX handlers.

From a generic handler, you can return whatever data you like. Using an asmx file for such purposes would be confusing for future developers and it adds complexity that you likely don't need.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5876574) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
