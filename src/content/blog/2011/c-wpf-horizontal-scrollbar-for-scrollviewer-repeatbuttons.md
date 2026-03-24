---
title: "C# WPF horizontal scrollbar for ScrollViewer RepeatButtons only on either side of contents"
description: "My answer to \"C# WPF horizontal scrollbar for ScrollViewer RepeatButtons only on either side of contents\" on Stack Overflow"
date: 2011-08-01
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - scrollview
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6900421"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6900289):*

> Is there a way to get a scroll viewer with the RepeatButtons only and to force the buttons to the edge of the contents?
> 
> I want it to look like this:
> 
> ```
>   +---+-------------------------------------------------------------+---+
>   |   |                                                             |   |
>   | < | Contents here...............................................| > |
>   |   |                                                             |   |
>   +---+-------------------------------------------------------------+---+
> 
> ```
> 
> Where the middle is the content of the ScrollViewer, and the left and right are RepeatButtons which will scroll the contents.
> 
> I was thinking I could either use a custom ScrollBar (but I don't know much about this or how to make the buttons go outside the content), or I could just use RepeatButtons and connect their click to the ScrollViewer. Which way (if either) would be better/easier?

*I posted the following answer, which was chosen as the accepted answer:*

I see no reason you cannot use a [ScrollViewer](http://msdn.microsoft.com/en-us/library/system.windows.controls.scrollviewer.aspx). Configure the event handlers of your two arrows (left/right) to minipulate [ScrollToHorizontalOffset()](http://msdn.microsoft.com/en-us/library/system.windows.controls.scrollviewer.scrolltohorizontaloffset.aspx) and [ScrollToVerticalOffset](http://msdn.microsoft.com/en-us/library/system.windows.controls.scrollviewer.scrolltoverticaloffset.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6900421) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
