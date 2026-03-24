---
title: "Assembly Versioning in .NET"
description: "My answer to \"Assembly Versioning in .NET\" on Stack Overflow"
date: 2010-05-14
author:
  name: Nate Bross
tags:
  - visual-studio-2008
  - versioning
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2835539"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2835415):*

> In the Visual Studio 2008 IDE, the properties page allows you to access the version. However, for executables, there appears to be two versions:
> 
> Under the Publish tab, there is a publish version with a flag to auto increment.
> 
> Under the Applications Tab (Assembly Info...) there is an assembly and file version - this appears to change the AssemblyInfo.cs file.
> 
> My question is, what is the difference between the two versions and what are the implications of setting each?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

The version(s) specified in AssemblyInfo.cs are compiled into the file and are consitered to be the version of the assembly (file and product are versioned independently).

On the publish tab in the project, this is used for ClickOnce deployment so that the .NET ClickOnce engine can determine what version of the project a user has installed and it can do the appropriate update route.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2835539) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
