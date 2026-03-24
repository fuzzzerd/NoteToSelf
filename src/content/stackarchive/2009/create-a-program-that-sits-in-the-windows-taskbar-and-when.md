---
title: "Create a Program that Sits in The Windows Taskbar and, When Activated, Stops the Screensaver From Starting"
description: "My answer to \"Create a Program that Sits in The Windows Taskbar and, When Activated, Stops the Screensaver From Starting\" on Stack Overflow"
date: 2009-05-21
author:
  name: Nate Bross
tags:
  - windows
  - winapi
  - input
  - taskbar
  - screensaver
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/895436"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/895389):*

> I don't really know where to begin. Let's start with the stupid questions:
> 
> What language should I use for this? What is suited for the task at hand?
> 
> Next, the real ones:
> 
> Is there a way to stop the screensaver from starting, short of changing the cursor position? If not, will changing the cursor position even work?

*I posted the following answer:*

.NET will easily allow you to put an application in the system tray (checkout the NotifyIcon object in System.Windows.Forms.Controls).

I believe you can use the SetCursorPos ([http://msdn.microsoft.com/en-us/library/ms648394(VS.85).aspx](http://msdn.microsoft.com/en-us/library/ms648394\(VS.85\).aspx)) API call to prevent the screen saver, just make sure you set them to the current location so you don't actually move the mouse.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/895436) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
