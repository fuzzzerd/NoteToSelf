---
title: "Create Silverlight DatePicker control programmatically"
description: "My answer to \"Create Silverlight DatePicker control programmatically\" on Stack Overflow"
date: 2009-07-13
author:
  name: Nate Bross
tags:
  - silverlight
  - datepicker
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1120208"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1120179):*

> I am trying to add a DatePicker control to my page programmatically, but intellisense is not picking up the DatePicker type as I would expect.
> 
> MSDN shows this control as being part of System.Windows.Controls
> 
> I have referenced this assembly in my project, and in my usings statement, but still VS cannot recognise the DatePicker type.
> 
> I would expect this to work:
> 
> ```
> using System.Windows.Controls;
> 
>     namespace MyNamespace
>     {
>         public partial class MyClass : UserControl
>         {
>             ...
> 
> 
>             public void MyMethod
>             {
>                 DatePicker datePicker = new DatePicker();
> 
>             }
> 
>             ...
>         }
>     }
> 
> ```
> 
> > Compiler Error: The type or namespace name 'DatePicker' could not be found (are you missing a using directive or an assembly reference?)
> 
> Any ideas?
> 
> Thanks, Mark

*I posted the following answer:*

I believe the Datepicker is not included in the silverlight runtime, (I could be worng).

There is an [opensource project at codeplex](http://silverlight.codeplex.com/.) that has a control that provides this functionallity.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1120208) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
