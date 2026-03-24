---
title: "How can I get the name of a windows .bat script from within the script itself?"
description: "My answer to \"How can I get the name of a windows .bat script from within the script itself?\" on Server Fault"
date: 2009-09-15
author:
  name: Nate Bross
tags:
  - windows
  - batch-file
  - vbscript
  - nant
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/65679"
---

*Someone [asked on Server Fault](https://serverfault.com/q/65675):*

> I have a .bat file. I want to programmatically get the name of the .bat file. How can I do this?
> 
> _This is my end goal_
> 
> ```
> "..\lib\nant\nant.exe" -buildfile:nant.build {{pass in name of this file here}}
> pause
> 
> ```

*I posted the following answer, which received 1 upvote:*

The %0% variable will give you the fully qualified path to the batch file, including its name. There may be a better way to get just the name.

---
*Originally posted on [Server Fault](https://serverfault.com/a/65679) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
