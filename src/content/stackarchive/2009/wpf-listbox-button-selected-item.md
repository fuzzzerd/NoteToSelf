---
title: "WPF ListBox Button Selected Item"
description: "A question I asked on Stack Overflow"
date: 2009-07-16
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
  - listbox
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1139996"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1139996):*

I have a listbox with some textblocks and a button -- in the button's codebehind it calls a method passing the currently selected listbox item, this works great. The issue is that when I select an item and then click the button on another item it doesn't update the "SelectedItem" property -- is there a way Xaml or C# that I can force a button click to select the parent ListBoxItem?

**Xaml**

```
<DataTemplate>
    <Grid>
        <Button x:Name="myButton" Click="myButton_Click" Height="30" Width="30">
            <Image Source="Resources\Image.png" />
        </Button>
        <TextBlock Text="{Binding DataField}"></TextBlock>
    </Grid>
</DataTemplate>

```

---

> [rooks answered](https://stackoverflow.com/a/1140316) (25 upvotes):
>
> ```
> var curItem = ((ListBoxItem)myListBox.ContainerFromElement((Button)sender)).Content;
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1139996) — 8 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
