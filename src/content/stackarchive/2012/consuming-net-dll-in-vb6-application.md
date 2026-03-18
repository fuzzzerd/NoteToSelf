---
title: "Consuming .NET dll in VB6 application"
description: "My answer to \"Consuming .NET dll in VB6 application\" on Stack Overflow"
date: 2012-09-17
author:
  name: Nate Bross
tags:
  - c#
  - vb6
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12465333"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/12465306):*

> I wrote a dll in c#.net that calls another third party .NET dll within the application. This works fine when I tested it with a console application written in c#.NET as well using the code below:
> 
> ```
>  Assembly u = Assembly.LoadFrom(dllLocation);
>  Type t = u.GetType("MyLIB.CLass");
>  MethodInfo m = t.GetMethod("Method");
>  object[] myparam = new object[1];
>  myparam[0] = fileLocation;
>  result = (string)m.Invoke(null, myparam);
> 
> ```
> 
> Please note that some files are loaded within the location where the dll was initially loaded as well using:
> 
> ```
>   string path = Assembly.GetExecutingAssembly().Location;
>   path = Path.GetDirectoryName(path);
> 
> ```
> 
> But the issue is that when I tried to call it using VB6, I get an error that it cannot load the third party dll. Please help as I seem not to know what's going on.

You need to specify the [ComVisibleAttribute](http://msdn.microsoft.com/en-us/library/system.runtime.interopservices.comvisibleattribute%28v=vs.71%29.aspx) on the assembly in order to call it from VB6.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12465333) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
