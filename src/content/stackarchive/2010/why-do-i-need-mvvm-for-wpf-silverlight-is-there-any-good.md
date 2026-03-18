---
title: "Why do I need MVVM for WPF/Silverlight, is there any good reason one cant use MVC?"
description: "A question I asked on Stack Overflow"
date: 2010-07-19
author:
  name: Nate Bross
tags:
  - .net
  - model-view-controller
  - mvvm
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3284626"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3284626):*

Maybe I'm crazy, but I _get_ MVC. It makes sense. MVVM seems like a way to make MVC harder, am I wrong (if so, why?)?

---

> [Ryan from Denver answered](https://stackoverflow.com/a/3285873) (2 upvotes):
>
> I think that if you get MVC, then MVVM is really the same - with 1 additional part (the ViewModel). The reason that MVVM is more useful in my opinion has to do with the new DataBinding processes. The ViewModel provides useful abstraction and clarity about what is being databound, and how that binding is presented or converted. That's all it does in my mind.
> 
> The missing part from MVC is actually in the MVVM pattern, it's just the hidden part of MVVM in my opinion. If you look at most MVVM frameworks, most provide some sort of messaging or notification system, which really provides the missing Controller aspect of MVC.
> 
> Think of the ViewModel as the code-behind for your View, the View as the Designer of your View, the Model as the Model, and the Notification / Messaging system as the Controller, and we have a truely equivalent pattern.
> 
> This was a struggle for me to understand as well (I came from the MVC pattern as well, but now love the MVVM pattern).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3284626) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
