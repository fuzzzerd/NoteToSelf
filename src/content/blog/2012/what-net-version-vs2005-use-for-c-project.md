---
title: "what .net version VS2005 use for C# project"
description: "My answer to \"what .net version VS2005 use for C# project\" on Stack Overflow"
date: 2012-07-26
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - visual-studio
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11677115"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11677076):*

> I am porting a project built on VS2008 to VS2005 since the minor .NET version for us have to 2.0 instead of 3.5 and rest of our code is building on VS2005. So I modified the visual studio version from 2008 to 2005 at the .sln file
> 
> ```
> Microsoft Visual Studio Solution File, Format Version 9.00
> # Visual Studio 2005
> 
> ```
> 
> So I am able to load the .sln into the VS2005. I have some building problem, mainly the "var" and after I modified those lines with real data type, the code compiles and runs.
> 
> However at the project assembly reference. I found out that my code is still reference Linq which is from .NET 3.5:
> 
> ```
> C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\v3.5\System.Xml.Linq.dll
> 
> ```
> 
> When I open up the dialog to add new reference, I could see that the .NET version 2.0, 3.5 and even 4.0 (although the CLR runtime version is 2.0.50727 in most of cases. sometimes 1.x and sometimes 4.0, Linq's runtime version is 2.0.50727).
> 
> I thought that VS2005 only supports .NET 2.0 which seems not that case here. So I guess how can I make sure that my application would only require .NET 2.0 framework. Is it enough to make sure that I only reference .NET 2.0 and below reference?

As long as the target framework is .NET 2.0 **and** you don't reference any libraries that _do_ target higher .NET framework versions, your app should run just fine on .NET 2.0.

That said, I believe Visual Studio 2008 supports multi-targeting, so you should be able to use VS2008 but still target .NET 2.0 as your output type. Additionally, VS2010 and VS2012RC also support .NET 2.0 only projects.

To answer the exact question in the title (for the benifit of those who find this page by its title) the .NET version used by default in Visual Studio 2005 is .NET v2.0.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): As far as I know, there is no reason a .NET 2 app couldn't (or shouldn't) reference a .NET 3.5 or 4.0 class library. Doing so ovsiously changes your deployment requirements, but it will save you from converting your project from .NET 2 to .NET 3.5 just to make a reference. It just so happens that you already converted your project.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11677115) — 5 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
