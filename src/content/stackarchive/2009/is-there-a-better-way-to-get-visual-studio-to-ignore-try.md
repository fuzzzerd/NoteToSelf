---
title: "Is there a better way to get visual studio to ignore try/catch in debug mode"
description: "My answer to \"Is there a better way to get visual studio to ignore try/catch in debug mode\" on Stack Overflow"
date: 2009-05-21
author:
  name: Nate Bross
tags:
  - vb.net
  - if-statement
  - debugging
  - try-catch
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/893291"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/893277):*

> I want the designer to catch the error when I am debugging and I want the user to see my friendly message if an error occurs for them. I know I can acomplish this with the following:
> 
> ```
> #If Debug=False Then
> 
> Try
> 
> #End If
> 
> 'some code here
> 
> #If Debug=False Then
> 
> Catch ex as exception
> 
>     Messagebox.Show("Errors suck")
> 
> End Try
> 
> #End If
> 
> ```
> 
> I do not want to have to write all the #statements and having them cluttering up my code. It seems like this should be a common need and there has to be a better way. Does anyone know a better way?

*I posted the following answer:*

In the catch section of your Try..Catch you should write the exception message, stacktrace, and anything else you may want to a log file -- additionally you could write that data to the Windows Event log as well.

At worst, you could just put break-points in the Catch section of your Try..Catch blocks, since you shouldn't normally hit them it should'nt be a big deal once setup.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/893291) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
