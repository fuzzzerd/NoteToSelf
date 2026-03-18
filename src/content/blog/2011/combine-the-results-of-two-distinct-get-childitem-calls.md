---
title: "Combine the results of two distinct Get-ChildItem calls into single variable to do the same processing on them"
description: "A question I asked on Stack Overflow"
date: 2011-01-20
author:
  name: Nate Bross
tags:
  - arrays
  - powershell
  - get-childitem
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/4749979"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/4749979):*

I'm trying to write a PowerShell script to build a list of files, from several directories. After all directories have been added to the main list, I'd like to do the same processing on all files.

This is what I have:

```
$items = New-Object Collections.Generic.List[IO.FileInfo]

$loc1 = @(Get-ChildItem -Path "\\server\C$\Program Files (x86)\Data1\" -Recurse)
$loc2 = @(Get-ChildItem -Path "\\server\C$\Web\DataStorage\" -Recurse)

$items.Add($loc1) # This line fails (the next also fails)
$items.Add($loc2)

# Processing code is here

```

which fails with this error:

> Cannot convert argument "0", with value: "System.Object\[\]", for "Add" to type "System.IO.FileInfo": "Cannot convert the "System.Object\[\]" va lue of type "System.Object\[\]" to type "System.IO.FileInfo"."

I am mostly interested in what is the correct approach for this type of situation. I realize that my code is a very [C](http://en.wikipedia.org/wiki/C_%28programming_language%29) way of doing it -- if there is a more PowerShell way to acomplish the same task, I'm all for it. The key, is that the number of `$loc#'s` may change over time, so adding and removing one or two should be easy in the resulting code.

---

> [Keith Hill answered](https://stackoverflow.com/a/4750093) (40 upvotes):
>
> Not sure you need a generic list here. You can just use a PowerShell array e.g.:
> 
> ```
> $items  = @(Get-ChildItem '\\server\C$\Program Files (x86)\Data1\' -r)
> $items += @(Get-ChildItem '\\server\C$\Web\DataStorage\' -r)
> 
> ```
> 
> PowerShell arrays can be concatenated using `+=`.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/4749979) — 25 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
