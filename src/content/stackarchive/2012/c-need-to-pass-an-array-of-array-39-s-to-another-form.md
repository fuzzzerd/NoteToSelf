---
title: "C# Need to pass an array of array&#39;s to another form"
description: "My answer to \"C# Need to pass an array of array&#39;s to another form\" on Stack Overflow"
date: 2012-02-15
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - winforms
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9299126"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9299058):*

> I want to pass an array of arrays to another Form
> 
> ```
> String[] arrayOfStrings = new String[4];
> arrayOfStrings[0] = td1stcolumn[];
> arrayOfStrings[1] = td2ndcolumn[];
> arrayOfStrings[2] = td3rdcolumn[];
> arrayOfStrings[3] = td4thcolumn[];
> string resultDialogString = ResultDialog.ShowBox(arrayOfStrings, "Result Page");
> 
> ```
> 
> td1stcolumn, td2ndcolumn, td3rdcolumn and td4thcolumn are all String arrays
> 
> C# is expecting values in the \[\] for td...column
> 
> Signature of ResultDialog.ShowBox is
> 
> ```
> public static string ShowBox(string[] arrayOfMessages, string txtTitle)
> 
> ```
> 
> but I can modify the signature. I just need to transfer the data from the
> 
> td1stcolumn, td2ndcolumn, td3rdcolumn and td4thcolumn
> 
> to the ResultDialog.Show method

Seems like you might be better suited to a multidimension array...

```
// declare
String[,] multiArray = new String[4,4];

// use
string s = multiArray[2,2];

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9299126) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
