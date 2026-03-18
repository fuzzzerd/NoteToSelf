---
title: "Script possibly in C# for controlling a program"
description: "My answer to \"Script possibly in C# for controlling a program\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5197853"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5197720):*

> This is pretty much new to me and the web didn't help much. Goal: To make a script which would control screen video capture then send it to server.
> 
> How to make the script ? is it possible to make it in C#? any guides that you guys can recommend ?
> 
> Edit: More Details:
> 
> Need a Script-> When launched it would run a screen capture program(camtasia probably)->Then it would automatically send the saved file to a server. My problem is I do not know where to start or what to look at ... hope this helps

You would need to write a batch file or a powershell script; the main issue you're going to have is finding a video capture program which allows itself to be controlled from the command line.

Assuming you find one, something like this would work:

```
C:\Program Files\Capture\Capture.exe /length: 5 /output: C:\Videos\Video1.avi

```

Then you'd need to FTP the output file over to a server.

As for doing this in C#, that would work just as well as batch file or powershell; but either way, the program you are using to do the video capture would need to provide a mechanism for controlling it through an API or command-line arguments.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5197853) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
