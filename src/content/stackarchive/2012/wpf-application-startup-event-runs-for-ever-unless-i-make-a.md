---
title: "WPF Application_Startup event runs for ever unless I make a window and show it"
description: "A question I asked on Stack Overflow"
date: 2012-02-07
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
  - startup
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/9185166"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/9185166):*

WPF Application Shuts Down if I open a window and close it, but if I open no windows it stays running until I explicitly close it. Here is a quick sample application:

```
public partial class App : Application
{
    private void Application_Startup(object sender, StartupEventArgs e)
    {
        if (e.Args.Count() != 0)
        {
            var mw = new MainWindow();
            mw.ShowDialog();
        }
    }
}

```

If you supply this app a command-line argument it will open a window and close down as soon as you close the window; if you don't supply an argument it will not close and must be killed via task manager.

---

> [devdigital answered](https://stackoverflow.com/a/9185223) (2 upvotes):
>
> Check [http://msdn.microsoft.com/en-us/library/system.windows.application.shutdownmode.aspx](http://msdn.microsoft.com/en-us/library/system.windows.application.shutdownmode.aspx).
> 
> The default shutdown mode is OnLastWindowClose.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/9185166) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
