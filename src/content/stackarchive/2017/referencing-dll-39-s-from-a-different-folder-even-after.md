---
title: "Referencing dll&#39;s from a different folder even after deployment"
description: "My answer to \"Referencing dll&#39;s from a different folder even after deployment\" on Stack Overflow"
date: 2017-08-10
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - winforms
  - dll
  - .net-assembly
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/45619243"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/45618922):*

> How to reference a dll outside the application's folder and utilize its methods and interfaces with loading it dynamically? is there a way to do that?
> 
> **Note**: the reference must be made from that path even after the application gets deployed.

I would try using [`Assembly.LoadFrom(string)`](https://msdn.microsoft.com/en-us/library/1009fa28%28v=vs.110%29.aspx). This overload takes the path to the assembly and allows you to utilize it via reflection.

You can get the assembly like this:

```
var sampleAssembly = Assembly.LoadFrom("c:\\Sample.Assembly.dll");
var method = sampleAssembly.GetTypes()[0].GetMethod("Method1");

```

Then invoke that method using [`MethodInfo.Invoke()`](https://msdn.microsoft.com/en-us/library/a89hcwhh\(v=vs.110\).aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/45619243) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
