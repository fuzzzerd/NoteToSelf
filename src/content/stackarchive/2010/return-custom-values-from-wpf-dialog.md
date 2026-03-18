---
title: "Return custom values from WPF dialog"
description: "My answer to \"Return custom values from WPF dialog\" on Stack Overflow"
date: 2010-09-21
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - .net-4.0
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3762166"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3762098):*

> I am using `Window.ShowDialog()` method to fetch some values from the user. However, the dialog will only return a nullable bool.
> 
> How can I get my WPF window to return a `Tuple<string,string>` or any other type?

You could add a new method to your Window, something like this:

```
public Tuple<string, string> ShowTupleDialog()
{
    var retTuple = new  Tuple<string, string>();
    this.ShowDialog();
    // values from dialog to retTuple (maybe use 
    //databinding and return an already defined tuple)
    return retTuple;
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3762166) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
