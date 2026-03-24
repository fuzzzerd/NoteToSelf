---
title: "How to enumerate running processes managed by CLR?"
description: "My answer to \"How to enumerate running processes managed by CLR?\" on Stack Overflow"
date: 2011-04-22
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - process
  - appdomain
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5758364"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5758341):*

> How to enumerate running processes? What about app domains?
> 
> Would there be any security-related gotchas?
> 
> I would be comfortable with .NET 4.0 only, Windows 7/Windows Server 2008 R2-only solution.
> 
> P.S.: This is what I am trying to do... [ProcessExplorer.NET question](https://stackoverflow.com/questions/5720023/task-manager-processexplorer-or-similar-tool-monitoring-and-managing-clr-threa)

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

[System.Diagnostics.Process.GetProcesses()](http://msdn.microsoft.com/en-us/library/1f3ys1f9.aspx) will list all the running processes as [Process](http://msdn.microsoft.com/en-us/library/system.diagnostics.process.aspx) objects.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5758364) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
