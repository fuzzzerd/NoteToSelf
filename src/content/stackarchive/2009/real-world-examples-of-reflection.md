---
title: "Real-World examples of Reflection"
description: "My answer to \"Real-World examples of Reflection\" on Stack Overflow"
date: 2009-05-15
author:
  name: Nate Bross
tags:
  - reflection
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/869972"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/869959):*

> What are your best examples of using Reflection in production code?

WPF Databinding:

1) Binding path "(TextBox.Text)" vs "Text"?

If you bind to a path called Text, WPF uses reflection to resolve the name. If you use the class-qualified name, binding avoids the reflection performance hit. Class-qualified names also allows binding to attached properties!

(via [http://dotnet.org.za/rudi/archive/2008/03/25/10-things-i-didn-t-know-about-wpf-data-binding.aspx](http://dotnet.org.za/rudi/archive/2008/03/25/10-things-i-didn-t-know-about-wpf-data-binding.aspx))

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/869972) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
