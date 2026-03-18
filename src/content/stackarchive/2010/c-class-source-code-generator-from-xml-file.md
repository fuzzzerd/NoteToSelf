---
title: "C# Class (source code) Generator from XML file"
description: "A question I asked on Stack Overflow"
date: 2010-06-04
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - xml
  - code-generation
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2977924"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2977924):*

What tools have you used to create class source code from xml files? Is this an edge case that I need to roll my own? I have need to create DTOs from some XML files, but the XML files are subject to change (add/remove attributes) so I need to be able to quickly update them.

I'm reallly not impressed with the `.xml -> .xsd -> bloated .cs` approach, and was looking for something to hopefully generate simple POCOs for me. Are there any tools you've used or seen that do this?

---

> [blowdart answered](https://stackoverflow.com/a/2977939) (6 upvotes):
>
> There is a built-in way to do this in VS2008 and later, T4. Hanselman has a bunch of [great links](http://www.hanselman.com/blog/T4TextTemplateTransformationToolkitCodeGenerationBestKeptVisualStudioSecret.aspx) in one place.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2977924) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
