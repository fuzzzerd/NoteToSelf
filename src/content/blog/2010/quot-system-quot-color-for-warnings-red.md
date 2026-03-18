---
title: "&quot;System&quot; color for warnings (red)"
description: "My answer to \"&quot;System&quot; color for warnings (red)\" on Stack Overflow"
date: 2010-12-04
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - windows
  - user-interface
  - colors
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4355986"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4350407):*

> I want to use system colors when it's possible. How to choose colors which aren't included in system colors?
> 
> Both [`SystemColors`](http://msdn.microsoft.com/en-us/library/system.windows.systemcolors.aspx) class of WPF, [`SystemColors`](http://msdn.microsoft.com/en-us/library/system.drawing.systemcolors.aspx) class of WinForms and `COLOR_*` constants for [`GetSysColor`](http://msdn.microsoft.com/en-us/library/ms724371\(VS.85\).aspx) API function contain no colors which can be used for warnings. Warnings are usually red, but there's no guarantee it won't be close to the system colors the user uses.
> 
> I want to display items in a ListBox using standard system colors (usually black text on white background for unselected items, white on navy for selected, white on light gray for selected unfocused). When an item is problematic (for example, operation it relates to has failed), I want to make its text red to draw attention. Using single color for all three cases (selected, selected unfocused, unselected) is already problematic, because I find it hard to read red text on light gray background.
> 
> Using only custom colors and thus avoiding the problem is unacceptable behavior. Users expect programs to respect their settings.
> 
> How to choose correct color for warnings?

Possibly a new approach is worth consideration. Using colored icons such as the windows event log. Keep all text consistent and use colored icons to visually distinguish different types of data.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4355986) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
