---
title: "Explaing MVVM, MVC, MVP for a Database Developer"
description: "My answer to \"Explaing MVVM, MVC, MVP for a Database Developer\" on Stack Overflow"
date: 2011-08-31
author:
  name: Nate Bross
tags:
  - model-view-controller
  - mvvm
  - mvp
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7258522"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7258379):*

> I am from Database Development / QA background. I have not exhaustively worked on UI projects, Althought I coded DB part of it. I would like to know some basic examples for differences between MVC, MVP, MVVM patters.
> 
> On a very high level know after few reads I know
> 
> *   P - Presentation layer
> *   M - Model
> *   C - Controller - Interprets presentation layer and sends action to model on what to be presented
> 
> This is on a very high level note. I have not tried creating a basic simple example using MVVM, MVC, MVP.
> 
> Would appreciate if you can provide some more clarity on how this is different from typical 3 layered architecture
> 
> *   UI Layer - ASP / WPF
> *   Business Layer - Web Services (.NET 2.0/WCF..)
> *   DB Access Layer - EF, ADO.NET, Stored procedures
> 
> Thanks in Advance for your help

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

I think you're confusing Design Patterns with Software Architecture, they are related but different.

A 3-layer architecture consists of UI, Logic, and Persitance code. Using something like MVC or MVVM simply provide a nice way to seperate these bits out.

In a 3-layer environment, you might have an MVVM App where the

*   Model comes from a WCF
*   The views are all WPF
*   the View-Models are C# classes which translate UI Actions into calls to the WCF Service

Those three things are simply the UI layer.

The WCF Service is your business logic layer, it exposes the Models that the UI will use, and it performs business logic on the data that it receives from the UI, then if appropriate, it invokes the persistance layer to save the changes into a database.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7258522) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
