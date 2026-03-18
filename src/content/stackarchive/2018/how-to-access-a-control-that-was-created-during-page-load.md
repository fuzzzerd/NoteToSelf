---
title: "How to access a control that was created during page load"
description: "My answer to \"How to access a control that was created during page load\" on Stack Overflow"
date: 2018-02-05
author:
  name: Nate Bross
tags:
  - asp.net
  - vb.net
  - web-applications
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48628489"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48626558):*

> The page I have pulls information from the database and based off that it will either generate a text box or radio button on the page load. The issue I am running into is that I am not able to utilize it later in the code behind. I am wondering if its possible and how to make these accessible. For example, TextBox1 is created during the page load, then on a button click the code below will throw the error "'TextBox1' is not declared."
> 
> ```
> Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
>     Label1.text = TextBox1.text
> End Sub
> 
> ```

Best practice would be to put the controls in the ASPX markup. That allows you to reference it from code behind everywhere; however, if that is not an option for you and you need to handle everything in code:

```
Dim control as Control

Protected Sub Load()
    If ConditionForRadioButton Then
        control = new RadioButton()
    End If
End Sub

Protected Sub Button1_Click()
    If ConditionForRadioButton Then
        Dim radio = CType(control, RadioButton)
        ' do things with radio
    End If
End Sub

```

Add other cases for the other control types; if this is in some kind of collection you'd have to extrapolate this to work in that case, but the idea would be the same.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48628489) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
