---
title: "Call a method when specific key combination is pressed anywhere in the app, as long as application is currently focused window"
description: "A question I asked on Stack Overflow"
date: 2010-09-29
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3826222"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3826222):*

My objective is to allow users of my app to bringup what I'm calling my debug console by pressing CTRL + F11 on their keyboard.

Simply put, I need to call a `ToggleDebug();` method, which will enable my debug tracing code and display the window. I'd like for my application to do this at any point when CTRL + F11 is pressed, regardless of where the user currently has focus the cursor as long as my application is the currently focused window.

My app is deployed through Click Once -- so its a partial trust type environment.

In an old VB6 app, I had been using a `wend` loop with call to `DoEvents()` and a windows API call... needless to say, I'm hoping there is a better way now.

---

> [ASanch answered](https://stackoverflow.com/a/3826253) (3 upvotes):
>
> You can handle the PreviewKeyDown event of your window.
> 
> ```
> public MainWindow()
> {
>     InitializeComponent();
>     this.PreviewKeyDown += new KeyEventHandler(MainWindow_PreviewKeyDown);
> }
> 
> void MainWindow_PreviewKeyDown(object sender, KeyEventArgs e)
> {
>     if ((e.Key == Key.F11) && (Keyboard.Modifiers == ModifierKeys.Control))
>     { 
> 
>     }
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3826222) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
