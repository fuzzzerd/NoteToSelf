---
title: "C# console get key stroke"
description: "My answer to \"C# console get key stroke\" on Stack Overflow"
date: 2012-03-23
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - console
  - keystroke
  - keylogger
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9841686"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9841580):*

> Is there anyway for a C# console application to capture keystroke, including those that are pressed outside of the program, similar to a key logger? The one I found and tried is Console.ReadKey() but it can only read the keystroke sent to the console.

*I posted the following answer:*

You will need to use the Windows API, I'd [check GetAsyncKeyState](http://www.pinvoke.net/default.aspx/user32/GetAsyncKeyState.html).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9841686) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
