---
title: "C# Beginner: Where has my IList.Where() method gone?"
description: "My answer to \"C# Beginner: Where has my IList.Where() method gone?\" on Stack Overflow"
date: 2009-11-19
author:
  name: Nate Bross
tags:
  - c#
  - class
  - where-clause
  - ilist
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1760733"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1760719):*

> I've got another simple one (I think) that's stumping me. I have written a method in one of my controls that gets the latest version of a file in a CMS given it's filename (i.e. regardless of what folder the file resides in). I found it useful enough that I thought I'd chuck it in my CMSToolbox class, but when I do this I can no longer use the `Where()` method of a FileManager class provided by the CMS (which returns a list).
> 
> Here's a simplified example of my class:
> 
> ```
> using System;
> using System.Collections.Generic;
> using CMS.CMS;
> using CMS.Core;
> using CMS.Web;
> 
> namespace CoA.CMS {
>     public class ToolBox
>     {
>         public CMS.CMS.File getLatestFileVersionByFilename(string filename, int GroupID)
>         {
>             IList<CMS.CMS.File> fileWithName = FileManager.GetGroupAll(false, GroupID).Where(file => currentFileVersionIsNamed(file, filename)).ToList<CMS.CMS.File>();
>             return getLatestFileFromListOfFiles(fileWithName);
> 
>         }
>         protected bool currentFileVersionIsNamed(CMS.CMS.File file, string name)
>         {
>         }
>         protected CMS.CMS.File  getLatestFileFromListOfFiles(CMS.CMS.File file)
>         {
>         }
>     }
> }
> 
> ```
> 
> When I do exactly the same thing in the context of a Control (really a class provided by the CMS which extends `Control`) I have access to the `Where()` method, but in my ToolBox class I don't. What gives? I figured that an `IList` would always allow access to the same methods from wherever you use it.
> 
> I'm a wrong again, haha :)
> 
> * * *
> 
> Edit: `Filemanager.GetGroupAll()` returns a `CMSList` which extends `IList`

IIRC, that .Where method is part of LINQ, and you need to add those using statements in your class to get the extension methods for the IEumerable interface.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1760733) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
