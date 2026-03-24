---
title: "Enumerate Form Controls"
description: "My answer to \"Enumerate Form Controls\" on Stack Overflow"
date: 2010-10-14
author:
  name: Nate Bross
tags:
  - c#
  - winforms
  - powershell
  - system.componentmodel
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3935014"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3935000):*

> I have this C# code to enumerate controls of a Form instance:
> 
> ```
> private void button1_Click(object sender, EventArgs e)
> {
>     textBox1.Text = "";
> 
>     Form2 form2 = new Form2();
> 
>     foreach (Control control in form2.Controls)
>     {
>         PropertyDescriptorCollection properties = 
>             TypeDescriptor.GetProperties(control);
> 
>         foreach (PropertyDescriptor property in properties)
>         {
>             textBox1.Text += (property.Name + Environment.NewLine);
>         }
>     }
> }
> 
> ```
> 
> This lists all controls names of a Form form2 in a TextBox. This is my attempt to reproduce this code in PowerShell:
> 
> ```
> $form = New-Object System.Windows.Forms.Form
> 
> foreach($control in $form.Controls)
> {
>     $properties = 
>         [System.ComponentModel.TypeDescriptor]::GetProperties($control)
> 
>     foreach($property in $properties)
>     {
>         $property.Name
>     } 
> }
> 
> ```
> 
> But this doesn't work. $form.Control seems to come up empty so the foreach loop is never entered. How can i make the above C# code work in PowerShell?
> 
> \[edit 1\]
> 
> The above code obviously has a form with no controls on it. Here is updated PowerShell code with a form that has a Button added to its Controls collection, but with (seemingly) the same result of not enumerating the Controls collection:
> 
> ```
> $form = New-Object System.Windows.Forms.Form
> $button = New-Object System.Windows.Forms.Button
> $form.Controls.Add($Button)
> 
> $form.Controls.Count
> 
> foreach($control in $form.Controls)
> {
>     $properties = 
>         [System.ComponentModel.TypeDescriptor]::GetProperties($control)
> 
>     foreach($property in $properties)
>     {
>         $property.DisplayName
>     } 
> }
> 
> ```
> 
> \[edit 2\]
> 
> if i check the $property type:
> 
> ```
> foreach($property in $properties)
> {
>     $property.GetType().FullName
> } 
> 
> ```
> 
> GetType() returns:
> 
> System.ComponentModel.PropertyDescriptorCollection
> 
> where I expected PropertyDescriptor.

*I posted the following answer, which received 2 upvotes:*

In your C# code, you probably have a class defined as Form2 which has controls on it. In your powershell, you are loading up a vanilla System.Windows.Forms.Form which wont have any controls on it.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3935014) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
