---
title: "Setting the owner of a dialog box in WinForms and C#?"
description: "My answer to \"Setting the owner of a dialog box in WinForms and C#?\" on Stack Overflow"
date: 2009-06-11
author:
  name: Nate Bross
tags:
  - winforms
  - dialog
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/983479"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/983457):*

> I have an EXE (app.exe) that calls a COM exposed method in a C# DLL (lib.dll). Lib.dll shows a dialog box.
> 
> How do I make the dialog box (not a windows message box) recognize the app.exe as the owner, so that when app.exe is minimized, so is the dialog from lib.dll?
> 
> The dialog cannot be modal.
> 
> Is this a problem that can be solved with Winforms? I prefer a Winforms solution, but will be satisfied with a XAML solution if necessary.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

I assume your C# Dll is just creating an instance of a form and calling the .Show() method. If that is the case, in your COM exposed method should take an hWnd parameter and set the forms owner to that hWnd.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/983479) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
