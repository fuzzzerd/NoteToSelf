---
title: "Silverlight 4 Clipboard Security Exception &quot;access is not allowed&quot;?"
description: "My answer to \"Silverlight 4 Clipboard Security Exception &quot;access is not allowed&quot;?\" on Stack Overflow"
date: 2010-03-26
author:
  name: Nate Bross
tags:
  - c#
  - silverlight
  - security
  - exception
  - clipboard
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2525836"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2525770):*

> I'm new in Silverlight and i am doing some tests. With my current test I try to display in real time the current Clipboard content. But there is a weird behaviors with this code :
> 
> ```
> namespace SilverlightTest
> {
> public partial class MainPage : UserControl
> {
>     private Timer _timer;
> 
>     public MainPage()
>     {
>         InitializeComponent();
>         var dispatcher_timer = new DispatcherTimer {Interval = new TimeSpan(0, 0, 0, 5)};
>         dispatcher_timer.Tick += new EventHandler(timer_Callback);
>         dispatcher_timer.Start();
>     }
> 
>     private void timer_Callback(object state, EventArgs eventArgs)
>     {
>         current_clip_board.Content = Clipboard.GetText();
>     }
> 
>     private void button1_Click(object sender, RoutedEventArgs e)
>     {
>         current_clip_board.Content = Clipboard.GetText();
>     }
> }
> }
> 
> ```
> 
> The button Event and the timer Event are suppose to do exactly the same action. But it doesn't ! The Button works fine and set the clipboard text into the label but the timer throw an exception :
> 
> > Clipboard access is not allowed
> 
> The question is : why ? :)
> 
> Thanks.
> 
> PS : I would bet on a thread problem :p

Have you tried this:

```
private void timer_Callback(object state, EventArgs eventArgs) 
{
    Dispatcher.Invoke(new System.Threading.ThreadStart(delegate()
    {
        current_clip_board.Content = Clipboard.GetText(); 
    }
} 

```

**edit**

After a quick search, it appears that `Clipboard` is only available in response to a user action see [here](http://mtaulty.com/CommunityServer/blogs/mike_taultys_blog/archive/2009/11/18/silverlight-4-rough-notes-clipboard-access.aspx) and [here](http://msdn.microsoft.com/en-us/library/system.windows.clipboard%28VS.96%29.aspx).

> In partial trust (the default mode for browser-hosted Silverlight-based applications), Silverlight also restricts clipboard access to its two key APIs GetText and SetText. These APIs can only be invoked from within a context that is determined by the Silverlight runtime to be in response to a user-initiated action. For example, clipboard access is valid from within a handler for a Click or KeyDown event. In contrast, clipboard access is not valid from a handler for Loaded or from a constructor, and access attempts throw exceptions.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2525836) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
