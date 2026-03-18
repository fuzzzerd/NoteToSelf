---
title: "Copy Folder/File without modifying attributes?"
description: "My answer to \"Copy Folder/File without modifying attributes?\" on Stack Overflow"
date: 2009-06-26
author:
  name: Nate Bross
tags:
  - c#
  - powershell
  - copy
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1050838"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1050813):*

> Is it possible to copy a file or a folder from one location to another without modifying its attribute data? For example if I have a folder on a network drive and it was created on 2/3/2007 and I want to copy it to my c: drive .. but leave the date/time stamp as 2/3/2007...is that possible?

I'm not sure if it is possible; however you can use the methods within [System.IO.File](http://msdn.microsoft.com/en-us/library/system.io.file_methods\(loband\).aspx) and [System.IO.Directory](http://msdn.microsoft.com/en-us/library/system.io.directory_methods\(loband\).aspx) to reset these attributes back to what they were originally.

Specifically the SetCreationTime and SetModificationTime methods will be of most value to you in this case.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1050838) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
