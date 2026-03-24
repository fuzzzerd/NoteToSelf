---
title: "What are the advantages of the WPF ToolBar?"
description: "My answer to \"What are the advantages of the WPF ToolBar?\" on Stack Overflow"
date: 2009-06-29
author:
  name: Nate Bross
tags:
  - wpf
  - wpf-controls
  - toolbar
  - compare-contrast
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1058844"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1058824):*

> I'm trying to decide whether I should create a simple StackPanel with Buttons on it, or whether I should use the WPF ToolBar class to contain these buttons (I am creating a simple toolbar).
> 
> What are the pros and cons to using WPF's built-in ToolBar control?
> 
> So far, these are the only advantages I have seen:
> 
> *   The ToolBars can collapse when necessary; additional items are available from a context drop down.
> *   If the ToolBar is contained within a ToolBarTray, multiple ToolBars can be repositioned relative to each other.
> 
> Are the any other benefits to the WPF ToolBar? Neither of these apply to my simple toolbar.

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

I would say use the Toolbar, because you never know when the next project will come along and need it. You also never know when this project may need it. I don't think there is any real drawback to using it over a StackPanel and the advantage you didn't mention is you'll have more experiance with a built in control for the next project.

On the other hand, I don't see any harm in doing it with the StackPanel, only that if you need to extend functionallity in the future, you'll have to do some rework.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1058844) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
