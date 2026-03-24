---
title: "duplicate assemblies in a clickonce deployment"
description: "My answer to \"duplicate assemblies in a clickonce deployment\" on Stack Overflow"
date: 2009-06-22
author:
  name: Nate Bross
tags:
  - .net
  - clickonce
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1029222"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1029171):*

> I'm investiguating clickonce deployment for a .NET application. This application contains a duplicated sets a assemblies (in different folders). The reason is that this application embed an asp.net web site that is used in-process. The winform app and the web site a sharing a set of dll for business logic and core plumbing.
> 
> When i generate the app manifest using MageUI.exe, i get warnings about duplicated assemblies, but the manifest is created anyway.
> 
> When i try to install this application, it seems the manifest is declared malformed by clickonce.
> 
> Is it possible that duplicated assemblies are the cause of this ? Is there a way to support that with clickonce ?
> 
> thanks a lot.

*I posted the following answer:*

You may want to look into the GAC. I'm not sure if that will fix the issue or not. You could also try a common assembly folder. In other words, removing the duplicates, but trying to have the same end result.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1029222) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
