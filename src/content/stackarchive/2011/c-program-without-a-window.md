---
title: "C# - Program without a Window"
description: "My answer to \"C# - Program without a Window\" on Stack Overflow"
date: 2011-08-26
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - command-line
  - mainwindow
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7210881"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7210831):*

> I'm wondering whether it is possible to 'turn off' my main Window from loading automatically when my program starts with a command-line argument (i.e. when a file name is passed). The problem I have is that my program loads when a file associated with it is clicked, but does so by opening another main window and using that. The problem I have is that the program still launches the MainWindow afterwards, thus opening two Windows, one with the file contents and one that is empty.
> 
> How do I prevent the blank Window? As I see it, I either stop it from opening the main Window, close the main Window or make the program pass the file to the main Window. My problem is that I don't know which of these would be the best or how to to do it.
> 
> This is the code:
> 
> ```
>     protected override void OnStartup(StartupEventArgs e)
>     {
>         if (e.Args != null && e.Args.Count() > 0)
>         {
>             this.Properties["ArbitraryArgName"] = e.Args[0];
>         }
>         base.OnStartup(e);
> 
>         if (Application.Current.Properties["ArbitraryArgName"] != null)
>         {
> 
>             string fname = Application.Current.Properties["ArbitraryArgName"].ToString();
>             MainWindow mw = new MainWindow();
>             mw.Show();
>             mw.readVcard(fname);
>             Application.Current.Windows.
>         }
>     }
> 
> ```
> 
> EDIT:
> 
> My solution is at the bottom.

I'd rewrite your code as follows:

```
protected override void OnStartup(StartupEventArgs e) 
{ 
    // start application window
    MainWindow mw = new MainWindow(); 
    mw.Show(); 
    // store argument and read card info
    if (e.Args != null && e.Args.Count() > 0) 
    { 
        this.Properties["ArbitraryArgName"] = e.Args[0]; 
        string fname = Application.Current.Properties["ArbitraryArgName"].ToString(); 
        mw.readVcard(fname); 
    } 
} 

```

This assumes that the method `MainWindow.readVcard(string)` simply loads data into the current instance.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7210881) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
