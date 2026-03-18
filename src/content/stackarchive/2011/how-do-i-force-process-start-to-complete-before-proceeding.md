---
title: "How do I force Process.Start() to complete before proceeding?"
description: "My answer to \"How do I force Process.Start() to complete before proceeding?\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - .net-4.0
  - console
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5199754"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5199732):*

> I'm creating a console app to process a file and then move it to a 'processed' folder. The main console app calls another app using Process.Start(). This secondary app actually does the work of bulk inserting data into a database. Once the bulk insert is complete, the main app will move the file to another folder and then move on to additional tasks.
> 
> In the main app, how do I prevent the code from continuing until the secondary app finishes? I really need to have the first process finish before moving on to the next step.
> 
> Thanks!

You might try:

```
Process.Start(...).WaitForExit();

```

Presuming you are using ProcessStartInfo, you might write it more like this:

```
var psi = new ProcessStartInfo();
psi.FileName = "SecondProcess.exe";
psi.Arguments = "arg1 arg2";
var process = Process.Start(psi);
if(process != null) process.WaitForExit();

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5199754) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
