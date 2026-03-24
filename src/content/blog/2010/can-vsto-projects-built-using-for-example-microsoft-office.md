---
title: "Can VSTO projects built using, for example, Microsoft.Office.Interop.Excel be run on machines without Office installed?"
description: "My answer to \"Can VSTO projects built using, for example, Microsoft.Office.Interop.Excel be run on machines without Office installed?\" on Stack Overflow"
date: 2010-01-12
author:
  name: Nate Bross
tags:
  - .net
  - excel
  - vsto
  - office-interop
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2052595"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2052560):*

> We're currently using a thing from SoftArtisans to generate Excel spreadsheets from data the mainframe FTPs down to our document server.
> 
> The doc server has the .Net frameworks through 3.5 on it, as does my development box. The difference is my machine has Office 2007 as well.
> 
> So, I built a service this morning with a filewatcher using Interop.Excel to make the spreadsheets without the need for the SoftArtisans piece.
> 
> When I install and run on the document server, the app chokes when I drop a file in for conversion, saying "Could not load file or assembly 'Microsoft.Office.Interop.Excel, Version=12.0.0.0"
> 
> Is there no redistributable package or something I can use? Management doesn't want Office installed on the server.

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

As far as I know, the only way to use the Office Interop assemblies, is to have full office client installed on the server.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2052595) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
