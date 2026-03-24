---
title: "how to copy all *.bak files from Directory A to Directory B?"
description: "My answer to \"how to copy all *.bak files from Directory A to Directory B?\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - winforms
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5198871"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5198802):*

> How to copy all `*.bak` files from `Directory A` to `Directory B`?

*I posted the following answer, which received 2 upvotes:*

There's two ways, the pure C# way:

```
var items = System.IO.Directory.GetFiles("Directory A", "*.bak", System.IO.SearchOption.TopDirectoryOnly);
foreach(String filePath in items)
{
    var newFile = System.IO.Path.Combine("Directory B", System.IO.Path.GetFileName(filePath));
    System.IO.File.Copy(filePath, newFile);
}

```

The `robocopy` way:

```
var psi = new System.Diagnostics.ProcessStartInfo();
psi.FileName = @"C:\windows\system32\robocopy.exe";
psi.Arguments = "Directory A Directory B *.bak";
System.Diagnostics.Process.Start(psi);

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5198871) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
