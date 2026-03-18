---
title: "Combobox Databinding as an element inside of a Listbox in WPF"
description: "A question I asked on Stack Overflow"
date: 2009-10-01
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - user-interface
  - data-binding
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1505084"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1505084):*

I'm having trouble with a combox databinding, this is what I'm trying to have it setup like:

1) Combo box is an item inside of a ListBox control \[working\]

2) Combo box's "Text" should be bound to a value from the ListBox ItemsSouce \[not working\]

3) The combo box will have an itemssource bound to a list that is retreived from a database \[working\]

Other items in this ListBox databind correctly, it is only the Combo Box I'm struggling with.

This is my xaml, any help is greatly appreciated.

```
<ComboBox 
    ItemsSource="{Binding Source={StaticResource ODPTaskCategories}}"
    Text="{Binding Path=Category}"
    FontFamily="Tahoma" 
    FontSize="14" 
    Height="24.91" 
    Margin="278,66.96,8,0" 
    Name="ddlCategory" 
    VerticalAlignment="Top" 
    VerticalContentAlignment="Center" 
    HorizontalAlignment="Stretch" 
    Width="Auto" 
    SelectionChanged="ddlCategory_SelectionChanged"  />

```

The objective is to allow the user to choose an item from the Combo Box from a pre-defined list and have that databound to the ListBox's databound item.

---

> [Lars Truijens answered](https://stackoverflow.com/a/1505176) (3 upvotes):
>
> Check out the SelectedItem property. Also [the order seems to matter](http://www.hardcodet.net/2009/01/xaml-binding-declaration-order-matters).
> 
> ```
> <ComboBox 
>     SelectedItem="{Binding Path=Category}"
>     ItemsSource="{Binding Source={StaticResource ODPTaskCategories}}"
>     FontFamily="Tahoma" 
>     FontSize="14" 
>     Height="24.91" 
>     Margin="278,66.96,8,0" 
>     Name="ddlCategory" 
>     VerticalAlignment="Top" 
>     VerticalContentAlignment="Center" 
>     HorizontalAlignment="Stretch" 
>     Width="Auto" 
>     SelectionChanged="ddlCategory_SelectionChanged"  />
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1505084) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
