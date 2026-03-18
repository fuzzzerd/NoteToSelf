---
title: "capture text when Ctrl + C in c#"
description: "My answer to \"capture text when Ctrl + C in c#\" on Stack Overflow"
date: 2011-07-27
author:
  name: Nate Bross
tags:
  - c#
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6851089"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6851054):*

> Is it possible to while running an .Net application in the system tray that when a person presses control + c in a text outside, the application capture it from Clipboard?

The easiest way is to monitor the contents of the clipboard, this [MSDN Article](http://msdn.microsoft.com/en-us/library/system.windows.forms.clipboard.getdata.aspx) should get you started.

Something as simple as a [Timer](http://msdn.microsoft.com/en-us/library/system.threading.timer.aspx) object which checks if the contents has changed should be more than sufficient.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6851089) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
