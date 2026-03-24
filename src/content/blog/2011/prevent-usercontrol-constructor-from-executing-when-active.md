---
title: "Prevent UserControl Constructor from executing when Active Tab is changed"
description: "My answer to \"Prevent UserControl Constructor from executing when Active Tab is changed\" on Stack Overflow"
date: 2011-03-14
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - user-interface
  - visualstatemanager
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5300695"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5276290):*

> I have Tab Control, with two tabs, and each tab contains a UserControl, the UserControls have Visual States defined along with Transitions.
> 
> The issue, that I'd like to get around, is that every time I change active tabs, the Visual State Transition storyboard runs, even when the control _should_ already be in a state, and not need to be changed.
> 
> I've tracked this to the fact that changing tabs, causes the Constructor for all child UserControls in the newly visible tab to run. Is there a way to avoid this?

*I posted the following answer, which was chosen as the accepted answer:*

Turns out that because I binding the `Content` of the Tab it was unloading and reloading. Changing over to `StaticResources` and using `DataContext` fixed the issue in my case.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5300695) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
