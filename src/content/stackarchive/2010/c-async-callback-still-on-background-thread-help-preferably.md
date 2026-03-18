---
title: "C# async callback still on background thread...help! (preferably without InvokeRequired)"
description: "My answer to \"C# async callback still on background thread...help! (preferably without InvokeRequired)\" on Stack Overflow"
date: 2010-09-04
author:
  name: Nate Bross
tags:
  - c#
  - events
  - generics
  - delegates
  - asynchronous
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3643100"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3643096):*

> I am writing a very simple asynchronous helper class to go along with my project. The purpose of the class is that it allows a method to be run on a background thread. Here is the code;
> 
> ```
> 
>     internal class AsyncHelper
>     {
>         private readonly Stopwatch timer = new Stopwatch();
>         internal event DownloadCompleteHandler OnOperationComplete;
> 
>         internal void Start(Func func, T arg)
>         {
>             timer.Start();
>             func.BeginInvoke(Done, func);
>         }
> 
>         private void Done(IAsyncResult cookie)
>         {
>             timer.Stop();
>             var target = (Func) cookie.AsyncState;
>             InvokeCompleteEventArgs(target.EndInvoke(cookie));
>         }
> 
>         private void InvokeCompleteEventArgs(T result)
>         {
>             var args = new EventArgs(result, null, AsyncMethod.GetEventByClass, timer.Elapsed);
>             if (OnOperationComplete != null) OnOperationComplete(null, args);
>         }
> 
>         #region Nested type: DownloadCompleteHandler
> 
>         internal delegate void DownloadCompleteHandler(object sender, EventArgs e);
> 
>         #endregion
>     }
> 
> ```
> 
> The result of the task is then returned through the `OnOperationComplete` event. The problem is that when the event is raised, its still on the background thread. I.e. if I try to run this code (below) I get a cross threading error;
> 
> ```
> txtOutput.AppendText(e.Result + Environment.NewLine);
> ```
> 
> Please advise any thoughts.

You need to invoke your event on the UI thread,

WinForms

`Form1.BeginInvoke(...);`

WPF

`Dispatcher.BeginInvoke(...);`

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3643100) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
