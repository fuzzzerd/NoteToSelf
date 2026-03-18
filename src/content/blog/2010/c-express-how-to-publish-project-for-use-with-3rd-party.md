---
title: "C# Express: How to publish project for use with 3rd party installer (msi)?"
description: "My answer to \"C# Express: How to publish project for use with 3rd party installer (msi)?\" on Stack Overflow"
date: 2010-01-19
author:
  name: Nate Bross
tags:
  - c#
  - deployment
  - publish
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2094818"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2094524):*

> I want to publish my c# project (c# 2008 express edition) and create an (msi) installer with Inno Setup Compiler. How can I do this?

Set build mode to "Release" and then take everything inside the `\bin` directory and toss it into you MSI.

The VS Express editions do NOT include a built-in method for creating an MSI like the VS Pro/Ultimate do.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2094818) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
