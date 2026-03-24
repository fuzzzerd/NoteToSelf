---
title: "Is there a way to retrieve a device&#39;s DPI without using GDI+/WinForms &quot;Graphics&quot; class?"
description: "My answer to \"Is there a way to retrieve a device&#39;s DPI without using GDI+/WinForms &quot;Graphics&quot; class?\" on Stack Overflow"
date: 2013-06-26
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - windows
  - winapi
  - graphics
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/17326478"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/17326324):*

> Is it possible to get my devices DPI from c# using a native win api call?
> 
> I know how to get the dpi from a windows forms application and the current code I have is:
> 
> ```
>   Graphics g = Graphics.FromImage(new Bitmap(10, 10));
> 
>   var scaleX = g.DpiX / 96.0f;
>   var scaleY = g.DpiY / 96.0f;
> 
> ```
> 
> I was wondering if the is a win api call that can make things easier.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

What about [a WMI Query to the Win32\_DesktopMonitor class](http://msdn.microsoft.com/en-us/library/windows/desktop/aa394122%28v=vs.85%29.aspx)?

> PixelsPerXLogicalInch
> 
> ```
> Data type: uint32
> Access type: Read-only
> Qualifiers: Units (Pixels per Logical Inch) 
> 
> ```
> 
> Resolution along the x-axis (horizontal direction) of the monitor.
> 
> PixelsPerYLogicalInch
> 
> ```
> Data type: uint32
> Access type: Read-only
> Qualifiers: Units (Pixels per Logical Inch) 
> 
> ```
> 
> Resolution along the y-axis (vertical direction) of the monitor.

You might use it similar [to this question](https://stackoverflow.com/questions/1422065/wmi-get-all-monitors-not-returning-all-monitors):

```
ManagementObjectSearcher monitorObjectSearch = new ManagementObjectSearcher("SELECT * FROM Win32_DesktopMonitor");

foreach (ManagementObject monitor in monitorObjectSearch.Get())
{
      Debug.WriteLine(monitor["PixelsPerXLogicalInch");
      Debug.WriteLine(monitor["PixelsPerYLogicalInch");
}

```

There is also the [Windows API Route with GetDeviceCaps](http://msdn.microsoft.com/en-us/library/windows/desktop/dd144877%28v=vs.85%29.aspx), but I've read that there are [some issues with it on Windows 7](https://stackoverflow.com/a/11644415/86860) so your mileage may be different.

There is also the [Direct2D GetDesktopDpi](http://msdn.microsoft.com/en-us/library/windows/desktop/dd371316%28v=vs.85%29.aspx) ([mentioned by Alex](https://stackoverflow.com/a/17326543/86860)), which looks like it would require doing some COM Interop calls, and may or may not be as clean and will only work Windows versions where Direct2D is available. Some [additional](http://social.msdn.microsoft.com/Forums/windowsapps/en-US/b7028fab-85f5-4788-b45f-843cd4f5f3e4/direct2d-in-c) [information](http://msdn.microsoft.com/en-us/library/windows/desktop/ff684173%28v=vs.85%29.aspx) on Direct2D and .NET.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/17326478) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
