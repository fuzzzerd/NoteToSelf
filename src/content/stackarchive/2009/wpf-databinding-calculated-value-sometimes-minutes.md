---
title: "WPF Databinding Calculated Value sometimes minutes sometimes hours"
description: "A question I asked on Stack Overflow"
date: 2009-07-01
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - data-binding
  - presentation
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1066727"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1066727):*

I have a WPF window with a textbox, using standard WPF Databinding to an object. This all works fine, the issue is this:

The user is entering a time estimate, I would like to give the user the option to enter the data in hours or minutes (through a drop down list). I'd like to keep the data in minutes, and if the user selects hours, multiply their input by 60 and store the data.

How can I achieve that with WPF databinding? Is this even possible?

**edit**

For example, 90 minutes would show up as 1.5 if the dropdown list is set to hours, but 90 if miutes is selected.

---

> [user7116 answered](https://stackoverflow.com/a/1285195) (3 upvotes):
>
> You could use a special property on your window:
> 
> ```
> <ComboBox x:Name="Units">
>     <sys:String>Hours</sys:String>
>     <sys:String>Minutes</sys:String>
> </ComboBox>
> <TextBox x:Name="Value" Text="{Binding Path=Estimate, ElementName=ThisWindow}" />
> 
> ```
> 
> And then implement the special property:
> 
> ```
> public double Estimate
> {
>     get
>     {
>         switch(this.Units.SelectedItem as String)
>         {
>         case "Hours":
>             return this.estimate / 60.0;
>         default:
>             return this.estimate;
>         }
>     }
> 
>     set
>     {
>         switch(this.Units.SelectedItem as String)
>         {
>         case "Hours":
>             this.estimate = value * 60.0;
>             break;
>         default:
>             this.estimate = value;
>             break;
>         }
> 
>         this.OnPropertyChanged("Estimate");
>     }
> }
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I am using the combobox to select which units to display and also which units the user is entering in.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1066727) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
