---
title: "Embed ASP.NET application in VB6"
description: "My answer to \"Embed ASP.NET application in VB6\" on Stack Overflow"
date: 2009-04-30
author:
  name: Nate Bross
tags:
  - asp.net
  - vb6
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/808293"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/808214):*

> Does anybody have a clue how I might embed an ASP.NET 3.5 app inside a Visual Basic 6 application?
> 
> My other option is to provide a hyperlink inside the VB6 application that will open the ASP.NET app.....BUT I would prefer to embed the ASP.NET app within a tab control in VB6 if at all possible.
> 
> thanks in advance

Realistically, your best option is probably to use the Web Browser control on a new tab, and point that at your ASP.NET application.

For auto-login, you SHOULD be able to have users login once. You'll probably need to enable a "remember me" feature in your ASP.NET application.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/808293) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
