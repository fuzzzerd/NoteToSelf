---
title: "How to reference internal delegate of a different assembly in C#"
description: "My answer to \"How to reference internal delegate of a different assembly in C#\" on Stack Overflow"
date: 2012-05-29
author:
  name: Nate Bross
tags:
  - c#
  - reflection
  - delegates
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10800821"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10800778):*

> I have following code
> 
> ```
> public class MyClass{
>      internal static Dictionary<string, ActivityManager.TagSerializer> TagHandlers = new Dictionary<string, ActivityManager.TagSerializer>(StringComparer.OrdinalIgnoreCase);
> }
> 
> ```
> 
> where TagSerializer is a delegate in ActivityManager like following
> 
> ```
> public class ActivityManager
> { internal delegate string TagSerializer(string tag, ActivityTemplateVariable atv, ContentType ct, CultureInfo ci);}
> 
> ```
> 
> Because myclass and ActivityManager are in different assembly, my code will return error
> 
> > Inconsistent accessibility: field type 'System.Collections.Generic.Dictionary <string,Microsoft.Office.Server.ActivityFeed.ActivityManager.TagSerializer>' is less accessible than field 'MyClass.TagHandlers'
> 
> ActivityManager class is in a third party assembly, and I can't change it.
> 
> How do I use reflection to solve this problem?

*I posted the following answer:*

You'll need to use the [InternalsVisibleToAttribute](http://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.internalsvisibletoattribute.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10800821) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
