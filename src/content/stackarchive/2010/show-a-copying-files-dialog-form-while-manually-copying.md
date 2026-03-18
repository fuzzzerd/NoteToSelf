---
title: "Show a Copying-files dialog/form while manually copying files in C#?"
description: "My answer to \"Show a Copying-files dialog/form while manually copying files in C#?\" on Stack Overflow"
date: 2010-06-14
author:
  name: Nate Bross
tags:
  - c#
  - file
  - user-interface
  - dialog
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3041229"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3041211):*

> I am manually copying some folders and files through C#, and I want to show the user that something is actually going on. Currently, the program _looks_ as if its frozen, but it is actually copying files.
> 
> I would think there is already a built-in dialog or form that shows the process, similar to copying/moving files in windows explorer. Is there anything like that available, or will I have to create everything from scratch?
> 
> Also, would this be the best method to show the user that something is actively going on?
> 
> Thanks for the help!

This depends on the user experience you'd like to provide. You can use Windows APIs to show the standard copy dialog; however, I believe that your application will still seem unresponsive.

I'd recommend something like this:

```
// WPF
System.Threading.Thread t = new System.Threading.Thread(() =>
{
   foreach(String file in filesToCopy)
    {
        // copy file here

        // WPF UI Update
        Dispatcher.BeginInvoke(() =>
        {
            // progressBar Update
        }); 
    }                    
});

// WinForms
System.Threading.Thread t = new System.Threading.Thread(() =>
{
    foreach(String file in filesToCopy)
    {
        // copy file here

        // WinForms UI Update
        Form1.BeginInvoke(() =>
        {
            // progressBar Update
        }); 
    }               
});

// in either case call
t.Start();

```

This allows you to use your existing file copy logic, and still provide a nice responsive user interface.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3041229) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
