---
title: "How do I programmatically check the date of a file in a Zip archive?"
description: "My answer to \"How do I programmatically check the date of a file in a Zip archive?\" on Stack Overflow"
date: 2010-07-15
author:
  name: Nate Bross
tags:
  - .net
  - zip
  - winzip
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3259538"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3259518):*

> Given that I have a zip file called `archive.zip` that contains a file called `customerData`, how can I programmatically check the date of the file inside `archive.zip`? I'm using the command-line Winzip utility wzunzip, but I wouldn't object to possibly using something else.
> 
> I'm writing a .net application that will periodically read data from `customerData`. The file is very big and I want to abort the operation _without_ extracting `customerData` if the date stamp has not been updated, indicating that there is new data to read.

Via [http://dotnetzip.codeplex.com/](http://dotnetzip.codeplex.com/). There is no native way (that I know) to do that.

Example Code:

```
ZipFile z = ZipFile.Read(@"C:\archive.zip");
foreach (ZipEntry zEntry in z)
{
    Console.WriteLine(zEntry.LastModified.ToString());
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3259538) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
