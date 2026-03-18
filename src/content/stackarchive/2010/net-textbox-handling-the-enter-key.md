---
title: ".NET TextBox - Handling the Enter Key"
description: "My answer to \".NET TextBox - Handling the Enter Key\" on Stack Overflow"
date: 2010-08-24
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - winforms
  - textbox
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3558895"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3558814):*

> What is definitively the best way of performing an action based on the user's input of the Enter key (`Keys.Enter`) in a .NET `TextBox`, assuming ownership of the key input that leads to suppression of the Enter key to the TextBox itself (e.Handled = true)?
> 
> Assume for the purposes of this question that the desired behavior is not to depress the default button of the form, but rather some other custom processing that should occur.

You can drop this into the FormLoad event:

```
textBox1.KeyPress += (sndr, ev) => 
{
    if (ev.KeyChar.Equals((char)13))
    {
        // call your method for action on enter
        ev.Handled = true; // suppress default handling
    }
};

```

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): What would be the best way then?

**Nate** (0 upvotes): All you need to add is `ev.Handled = true;` Updated post.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3558895) — 9 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
