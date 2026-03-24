---
title: "Proper case text as it is being entered in WPF"
description: "My answer to \"Proper case text as it is being entered in WPF\" on Stack Overflow"
date: 2009-11-19
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - visual-studio-2008
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1765008"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1764801):*

> How do I proper case text as the user enters it in a WPF form. I'm using the following code to do the proper casing which works fine, but I can't figure out how to do it on user entry.
> 
> ```
> Microsoft.VisualBasic.Strings.StrConv(txt.Text,VbStrConv.ProperCase,0);
> 
> ```

*I posted the following answer:*

You'll want to use code like you have, or Jobi posted, in the Key\_Down (or Up) event of the text control.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1765008) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
