---
title: "Where is the Microsoft.VisualBasic.Logging temp path exactly"
description: "My answer to \"Where is the Microsoft.VisualBasic.Logging temp path exactly\" on Stack Overflow"
date: 2010-09-01
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - logging
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3619447"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3619424):*

> I am making a small change to an existing application so that users can email us the log file when things go wrong. Even though it is c# the app is using Microsoft.VisualBasic.Logging.FileLogTraceListener.
> 
> This gets setup like this:
> 
> ```
> FileLogTraceListener fileLogTraceListener = listener as FileLogTraceListener;
> fileLogTraceListener.Location = LogFileLocation.TempDirectory;
> 
> ```
> 
> My question is: Where do the log files go?
> 
> Is it the same place as [Path.GetTempPath()](http://msdn.microsoft.com/en-us/library/system.io.path.gettemppath.aspx) ?
> 
> I have seen a bunch of other posts asking similar questions but I need to be sure that whatever computer / operating system this app runs on it is able to pick up the logs. I take it there is no way to look inside the FileLogTraceListener class to see what it does when working with temp?

Failing documentation, you could:

*   Use [Reflector](http://www.red-gate.com/products/reflector/) to look at the source
*   Use [Process Monitor](http://technet.microsoft.com/en-us/sysinternals/bb896645.aspx) from SysInternals to see what IO your process is doing.
*   Write a test app that makes two files, one with `Path.GetTempPath()` and one with VB Logger.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): @Pondidum it looks like its an Enum, so I don't think it will have a real path at runtime, at least that's expossed publicly from the class.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3619447) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
