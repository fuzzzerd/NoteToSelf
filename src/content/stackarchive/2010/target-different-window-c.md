---
title: "Target Different Window c#"
description: "My answer to \"Target Different Window c#\" on Stack Overflow"
date: 2010-08-11
author:
  name: Nate Bross
tags:
  - c#
  - window
  - target
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3461181"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3461140):*

> Hey, I have been searching on google and I cant seem to find anything about targeting different windows in c#, I am using Visual studio 2010.
> 
> I'm not sure how to do this but I'm pritty sure it can be done, does anyone know where I can read up about it?
> 
> I need to be able to target a different program (like notpad for example), and simulate a key press.
> 
> Thanks.

*I posted the following answer:*

I'm going to assume you're on WinForms (same applies for WPF, slightly different code though).

In your project you have

```
Form1
Form2
Form3

```

At the top of your Form1 class, you define this code:

```
Form2 frm2;
Form3 frm3;

```

Assuming Form1 is your startup object you add buttons for "Show Form2" and "Show Form3"

In their respective code-behind you add code like this

```
frm2 = new Form2();
frm2.Show();

frm3 = new Form3();
frm3.Show();

```

Same concept applies for WPF. If you're trying to do stuff with a window outside your application, the SendMessage Windows API is probably what you need to look into.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3461181) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
