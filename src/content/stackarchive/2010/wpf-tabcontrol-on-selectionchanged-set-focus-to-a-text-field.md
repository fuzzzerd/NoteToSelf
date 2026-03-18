---
title: "WPF TabControl On SelectionChanged, set focus to a text field"
description: "A question I asked on Stack Overflow"
date: 2010-10-19
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - focus
  - tabs
  - selectionchanged
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3971179"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3971179):*

I have a tab control, and a few tab items. I am successfully listening to the `SelectionChanged` event, and checking if the tab I'm interested in is the currently selected one.

I'm using this code (below), and stepping through the debugger, I can see that my branching logic works as designed; however, the issue I'm having is that something is overriding this call to `txt.Focus()` because after the correct tab item is displayed, the focus is not on the text box.

```
private void tabMain_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    // exact same behavior with and without this line
    e.Handled = true;

    if (e.AddedItems.Contains(usrTab))
    {
        txtusr.Focus();
    }
    else if (e.AddedItems.Contains(svcTab))
    {
        txtsvc.Focus();
    }
}

```

If I just put `txtusr.Focus()` in a button event handler, it focuses exactly as I'd expect.

I suspect that this has to do with the tabitem content not being loaded at the time the `.Focus()` method is called, but I'm not sure how to go about fixing it.

---

> [mdm20 answered](https://stackoverflow.com/a/3971538) (12 upvotes):
>
> Try putting the .Focus() calls inside a dispatcher.BeginInvoke.
> 
> ```
> Dispatcher.BeginInvoke(new Action(() => { txtsvc.Focus(); }));
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I was able to inconsistantly reproduce this in a stub-program.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3971179) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
