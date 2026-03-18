---
title: "How to check a thread is done, then fill progress bar in C# / WPF"
description: "My answer to \"How to check a thread is done, then fill progress bar in C# / WPF\" on Stack Overflow"
date: 2010-02-18
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - multithreading
  - progress-bar
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2290190"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2290155):*

> I am just working on my first GUI application on Windows.
> 
> I have a WPF GUI to a small C# utility which copies files. When the button is clicked to copy, I obviously don't want the GUI to hang. So, I fire off a new thread to run the method which copies the files. I assume I'm on track so far and there's no "better" way of doing it in C#?
> 
> Now, I have a `ProgressBar` which I want to appear filled when the thread is done. (It's fine running as indeterminate for now). How do I check when the copying is done?
> 
> So, so far I have:
> 
> ```
> Thread t = new Thread(delegate() 
> { 
>     po.Organise(inputPath, outputPath, recursive); 
> });
> 
> t.Start();
> 
> PBar.IsIndeterminate = true;
> 
> ```
> 
> And I want something after that that works like:
> 
> ```
> if (t.Done)
> {
>     PBar.Value = 100;
> }
> 
> ```

You need a callback method. [This](http://www.java2s.com/Code/CSharp/Thread/MyMainClassAsyncCallback.htm) should get you started. It uses an AsyncCallback, which is the best way to tackle this type of issue.

I just looked up an example I've been using for a project and stripped out the code specific to my app:

```
System.Windows.Forms.MethodInvoker mi = new System.Windows.Forms.MethodInvoker(delegate()
{
    // Do your file copy here
});

AsyncCallback ascb = new AsyncCallback(delegate(IAsyncResult ar)
{
    this.Dispatcher.Invoke(new ThreadStart(delegate (){
    // set progressbar value to 100 here
    }), null);
});

mi.BeginInvoke(ascb, null);

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2290190) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
