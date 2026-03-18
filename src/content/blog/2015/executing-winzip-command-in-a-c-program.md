---
title: "Executing WinZip Command in a C# Program"
description: "My answer to \"Executing WinZip Command in a C# Program\" on Stack Overflow"
date: 2015-03-13
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
  - zip
  - winzip
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/29036145"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/29001850):*

> How to execute `winzip` command from MVC controller Action?
> 
> Command:
> 
> ```
> C:\Program Files (x86)\WinZip>WZZIP.EXE -ys2048000 Location Location
> 
> ```

What you are asking, directly is possible with the [`System.Diagnostics.Process.Start(string, string)`](https://msdn.microsoft.com/en-us/library/h6ak8zt5\(v=vs.110\).aspx) method. It would look something like this:

```
System.Diagnostics.Process.Start(
    @"C:\Program Files (x86)\WinZip\WZZIP.EXE", 
    "-ys2048000 Location Location");

```

I've gone down this path and for simple things it is probably good enough. I've often found that there are usually more cool, useful things you can do interacting directly with the zip files. In that case, something like [DotNetZip](http://dotnetzip.codeplex.com/) or [SharpZip](https://github.com/icsharpcode/SharpZipLib) are probably good alternatives. I've used DotNetZip before, its very robust and highly performant.

Here's a quick example from DotNetZip home page:

> Here's some C# code that creates a zip file.
> 
> ```
> using (ZipFile zip = new ZipFile())
> {
>     // add this map file into the "images" directory in the zip archive
>     zip.AddFile("c:\\images\\personal\\7440-N49th.png", "images");
>     // add the report into a different directory in the archive
>     zip.AddFile("c:\\Reports\\2008-Regional-Sales-Report.pdf", "files");
>     zip.AddFile("ReadMe.txt");
>     zip.Save("MyZipFile.zip");
> }
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @SahilGupta I'm not sure what you mean, only licensed version. DotNetZip is Microsoft Public License (Ms-PL).

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/29036145) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
