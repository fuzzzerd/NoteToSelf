---
title: "WPF TextBox DoubleClick Event Fires when using Scrollbars rapidly"
description: "A question I asked on Stack Overflow"
date: 2009-08-10
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - textbox
  - scroll
  - event-handling
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1255776"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1255776):*

I have a WPF TextBox, defined like this:

```
<TextBox Text="{Binding Path=/Comments}" 
    Margin="351,193.91,10,36" 
    x:Name="txtComments" 
    IsReadOnly="True" 
    VerticalScrollBarVisibility="Auto" 
    LostFocus="txtComments_LostFocus" 
    MouseDoubleClick="txtComments_MouseDoubleClick" 
    AcceptsReturn="True" />

```

This works exactly as I would like; however, when the VerticalScrollBars are visible, if you rapidly click the ScrollBar the txtComments\_MouseDoubleClick event is fired. Is there any way I can change this behavior or detect that the event was fired by clicking the ScrollBar instead of the body of the textbox?

The main reason I want to do this, is that if you try to scroll down by double clicking the scroll bars the event is fired which causes the application to go down that path, which is very annoying if that is not the users intended action.

---

> [Charlie answered](https://stackoverflow.com/a/1256029) (13 upvotes):
>
> In your double-click handler, check the **OriginalSource** property on the _MouseButtonEventArgs_. That source will tell you whether it was the actual scrollbar (the repeat button), or the textbox. Something like:
> 
> ```
> if (e.OriginalSource is TextBox)
> { 
>     // Do your stuff.
> }
> else
> {
>     // From the scroll-bar.
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1255776) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
