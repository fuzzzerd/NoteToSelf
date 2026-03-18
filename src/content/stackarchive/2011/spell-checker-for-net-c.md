---
title: "Spell checker for .NET / C#"
description: "My answer to \"Spell checker for .NET / C#\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - spell-checking
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5196178"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5195460):*

> Does somebody know a good multilanguage spell checker for C# - .NET?
> 
> I mean, I have [googled](http://www.google.es/#hl=es&sa=X&ei=agBxTYKYKsaYhQfr68E_&ved=0CBoQBSgA&q=spell+checker+C%23&spell=1&fp=30ac618ed16d8cea) it and I found some alternatives, but does someone have a good success story with one?
> 
> I need to add a spell checker to my application. I would like a library that integrates with `System.Windows.Forms.TexBox`, for example.
> 
> Also, my application is portable to Linux, Mac, (`using Mono`), so it should be 100% managed code.
> 
> * * *
> 
> **EDIT:** I'm looking for something that underlines with a red line a wrong word in the textbox and also proposes corrections in a contextmenu: ![enter image description here](https://i.sstatic.net/c18RI.png)

WPF has a built-in [SpellCheck](http://msdn.microsoft.com/en-us/library/system.windows.controls.spellcheck.isenabled.aspx); however, I don't believe its fully portable to Mono since its WPF and not WinForms.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5196178) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
