---
title: "Take the space out of file names and or replace character with something else"
description: "My answer to \"Take the space out of file names and or replace character with something else\" on Stack Overflow"
date: 2012-08-31
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12218776"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/12218730):*

> Im trying to remove the spaces out of a bunch of file names(pdf's in a directory). I have tried the following. both input and output directories are folderbrowserdialog box's
> 
> ```
> DirectoryInfo di = new DirectoryInfo(folderBrowserDialog1.SelectedPath);
> foreach (var file in di.GetFiles())
> {
>      try
>      {
>         File.Copy(file.FullName, outputDir + @"\" + file.Replace(" ", "_"));        
>      }
> }
> 
> ```

Try this --

```
DirectoryInfo di = new DirectoryInfo(folderBrowserDialog1.SelectedPath);
foreach (var file in di.GetFiles())
{
    try
    {
        File.Copy(file.FullName, Path.Combine(outputDir, Path.GetFileName(file.FullName).Replace(" ", "_")));
    }
    catch { }
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12218776) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
