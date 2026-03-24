---
title: "How might I force our developers to enter notes when committing via TortoiseSVN?"
description: "My answer to \"How might I force our developers to enter notes when committing via TortoiseSVN?\" on Stack Overflow"
date: 2009-12-18
author:
  name: Nate Bross
tags:
  - svn
  - version-control
  - tortoisesvn
  - commit-message
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1930359"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1930319):*

> I often see a slew of commits, but no notes referencing the tickets... And so I end up going back and reviewing the diff manually. Not necessarily bad, but it would be nice to have notes. Any ideas?

*I posted the following answer, which received 3 upvotes:*

You need to use a pre-commit hook which is a server setting, I have written one for VisualSVN which is basically a batch file -- similar scripts are available for non-windows based SVN Servers.

```
@echo off
::
:: Stops commits that have empty log messages.
::
@echo off
setlocal

rem Subversion sends through the path to the repository and transaction id
set REPOS=%1
set TXN=%2

rem check for an empty log message
call "C:\program files\visualsvn server\bin\svnlook" log %REPOS% -t %TXN% | findstr . > nul
if %errorlevel% gtr 0 (goto err) else exit 0

:err
echo. 1>&2
echo Your commit has been blocked because you didn't give any log message 1>&2
echo Please write a log message describing the purpose of your changes and 1>&2
echo then try committing again. -- Thank you 1>&2
exit 1

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1930359) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
