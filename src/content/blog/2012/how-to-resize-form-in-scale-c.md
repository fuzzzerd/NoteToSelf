---
title: "How to resize form in scale? C#"
description: "My answer to \"How to resize form in scale? C#\" on Stack Overflow"
date: 2012-04-19
author:
  name: Nate Bross
tags:
  - c#
  - winforms
  - resize
  - scale
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10231021"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10230920):*

> i need that in my form the width is twice the height (1:2) **also when i resize** How i can do that? Thanks for help and sorry for my english :)

*I posted the following answer, which was chosen as the accepted answer:*

Checkout the [Control.Resize event](http://msdn.microsoft.com/en-us/library/system.windows.forms.control.resize.aspx) -- also

```
private void Form1_Resize(object sender, System.EventArgs e)
{   
    Control control = (Control)sender;
    control.Width = control.Height * 2; 
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10231021) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
