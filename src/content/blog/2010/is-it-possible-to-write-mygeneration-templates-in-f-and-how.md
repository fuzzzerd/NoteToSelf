---
title: "Is it possible to write MyGeneration Templates in F# and how?"
description: "My answer to \"Is it possible to write MyGeneration Templates in F# and how?\" on Stack Overflow"
date: 2010-06-22
author:
  name: Nate Bross
tags:
  - c#
  - f#
  - mygeneration
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3095539"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2820458):*

> I want to write a MyGeneration Template File in F#. I know you can target various languages etc VB.NET and C# however for my own selfish benefit I would like to write it in F#.
> 
> Anyone one if and how this is possible?

In visual studio you can use T4 templating to generate any type of output using a psudo "asp classic" style syntax, where you intermix your code (F#) and the "output."

Heres a good place to get started: [http://www.hanselman.com/blog/T4TextTemplateTransformationToolkitCodeGenerationBestKeptVisualStudioSecret.aspx](http://www.hanselman.com/blog/T4TextTemplateTransformationToolkitCodeGenerationBestKeptVisualStudioSecret.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3095539) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
