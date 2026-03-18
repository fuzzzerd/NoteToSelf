---
title: "C# and Storing Data in Memory"
description: "My answer to \"C# and Storing Data in Memory\" on Stack Overflow"
date: 2010-01-29
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - winforms
  - scope
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2164998"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2164961):*

> I'm using Visual C#.NET, and am making an app that uses winforms. I essentially need to open multiple files as strings, and manipulate the data in various places without saving the information back to the file. How do I go about storing this data so that I may use it in various parts of my code?

I'd probably use a static class, unless there are other requirements you didn't mention.

```
public static class MyFilesAsStrings
{
    public static String FirstFile {get;set;}

    public static LoadData() 
    {
        FirstFile = System.IO.File.ReadAllText(@"C:\Temp\MyFile.dat");
        // and so on
    }
}

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I fail to see how, call LoadData() and then make assertions based on the properties of the static class. It will be as testable as any other option that doesn't involve creating a seperate DataModel class, which would be the best solution, but doesn't answer the OP's question, it simply provides a different aproach.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2164998) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
