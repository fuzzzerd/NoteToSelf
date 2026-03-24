---
title: "Copy multiple folders to a single destination with robocopy"
description: "My answer to \"Copy multiple folders to a single destination with robocopy\" on Server Fault"
date: 2011-05-23
author:
  name: Nate Bross
tags:
  - powershell
  - scp
  - regex
  - robocopy
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/272930"
---

*Someone [asked on Server Fault](https://serverfault.com/q/272919):*

> I'm looking for a solution to use robocopy to copy several folders from a directory onto a distant network share. I want to choose several folders out of a directory that contains hundreds of folders I'm not interested in. I want to do something similar to scp in linux using regex, but this doesn't work in robocopy:
> 
> ```
> c:\robocopy "c:\results\1319_TC1.*" "\\datastore\somefolder\"
> 
> ```

*I posted the following answer:*

A quick powershell like this:

```
$Dir = get-childitem "c:\results\"  -recurse
$List = $Dir | where {$_.FullName -match "1319_TC1."}
$List | split-path FullName -parent | get-unique

```

Will give you a list of all files that are in a folder that matches "1319\_TC1." Then all you need to do `robocopy` each of those folders.

---
*Originally posted on [Server Fault](https://serverfault.com/a/272930) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
