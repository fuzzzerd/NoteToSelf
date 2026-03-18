---
title: "Is there a way to have my app push its icon to other apps?"
description: "A question I asked on Stack Overflow"
date: 2012-02-08
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - winapi
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/9199523"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/9199523):*

I have a WPF app that starts another application, I'd like for my application to change the Icon of this second app. I am able to use `GetWindowText` and `SetWindowText` to change the title. Is it possible to do this for the Icon as well?

update

I have no control of the second app.

---

> [Sergey Vyacheslavovich Brunov answered](https://stackoverflow.com/a/9199696) (7 upvotes):
>
> To change the window title of another application:
> 
> Definitions of Win32 API functions and constants:
> 
> ```
> [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
> public static extern bool SetWindowText(IntPtr hwnd, String lpString);
> 
> [DllImport("user32.dll")]
> public static extern int SendMessage(IntPtr hwnd, int message, int wParam, IntPtr lParam);
> 
> private const int WM_SETICON = 0x80;
> private const int ICON_SMALL = 0;
> private const int ICON_BIG = 1;
> 
> ```
> 
> Usage:
> 
> ```
> Process process = Process.Start("notepad");
> // If you have just started a process and want to use its main window handle,
> // consider using the WaitForInputIdle method to allow the process to finish starting,
> // ensuring that the main window handle has been created.
> // Otherwise, an exception will be thrown.
> process.WaitForInputIdle();
> SetWindowText(process.MainWindowHandle, "Hello!");
> Icon icon = new Icon(@"C:\Icon\File\Path.ico");
> SendMessage(process.MainWindowHandle, WM_SETICON, ICON_BIG, icon.Handle);
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/9199523) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
