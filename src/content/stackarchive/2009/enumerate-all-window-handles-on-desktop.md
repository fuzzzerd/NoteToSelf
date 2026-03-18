---
title: "Enumerate all window handles on desktop"
description: "My answer to \"Enumerate all window handles on desktop\" on Stack Overflow"
date: 2009-06-23
author:
  name: Nate Bross
tags:
  - c
  - windows
  - winapi
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1032977"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1032933):*

> Is there a Win32 API way to get an enumeration of all the open windows? Seems like there must be just not sure where to start looking.

You'll want to use the EnumDesktopWindows function in user32.dll.

Here's some C# code to get you pointed to the correct API Calls. I'm not sure how this would look in C but you get the idea.

```
[DllImport("user32.dll")]
private static extern int EnumDesktopWindows(IntPtr hDesktop, EnumWindowsProc ewp, int lParam);

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1032977) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
