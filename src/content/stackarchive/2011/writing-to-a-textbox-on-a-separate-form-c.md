---
title: "Writing to a textbox on a separate form (C#)"
description: "My answer to \"Writing to a textbox on a separate form (C#)\" on Stack Overflow"
date: 2011-06-15
author:
  name: Nate Bross
tags:
  - c#
  - forms
  - textbox
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6361452"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6361429):*

> Suppose I have two forms: Form1 and Form2. Form2 has a text control named text1
> 
> In VB6 I could write to Form 2's textbox
> 
> control from Form1 by using: Form2.Text1.text = "Some text here"
> 
> How can I make this work in C#? I have tried everything!
> 
> What I have tried:
> 
> ```
> Form2 Frm2 = new Form2();
> Frm2.show();
> Frm2.Activate(); // Trying everything to make sure it sees the form (it does).
> 
> Frm2.Text1 (Doesn't find the control)...
> 
> ```
> 
> **ANSWER:**
> 
> I ended up making a public routine in Form2, and then just calling this routine from form1. In this public routine of Form2 I would then call the textbox!

You need to keep a reference to the second form in the first form.

```
// form1 code 
// variables
Form2 myForm2;
// Form1_Loaded event handler
myForm2 = new Form2();
myForm2.Show();
// place where you want to change text on form2 from within form1
myForm2.Text1.Text = "Some text here";

```

<details>
<summary>Notable comments</summary>

**agent-j** (3 upvotes): your control variable (Text1) is not marked as public. You can set the scope of the variable in the Form2.Designer.cs directly, or the properties window for the textbox.

**Nate** (0 upvotes): Notice that I am declaring a variable of _type_ **Form2** with _name_ **myForm2** -- are you doing the same?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6361452) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
