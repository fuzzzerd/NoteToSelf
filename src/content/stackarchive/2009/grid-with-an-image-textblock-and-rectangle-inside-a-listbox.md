---
title: "Grid with an image, textblock, and rectangle, inside a listbox not showing up exactly right"
description: "A question I asked on Stack Overflow"
date: 2009-10-16
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
  - user-interface
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1578725"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1578725):*

So I have this Xaml inside a ListBox Item Template:

```
<ListBox.ItemTemplate>
    <DataTemplate>
        <Grid Height="22" Width="Auto">
            <Image Margin="-2,0,0,0" Source="{Binding Path=ADsPath, Converter={StaticResource ImxConverter}}" HorizontalAlignment="Left" Width="22"  />
            <TextBlock Margin="20,3,0,0" Text="{Binding Path=DisplayValue}" Width="Auto" />
            <Rectangle Fill="White" Stroke="White" Margin="-2,0,-2,0.5" VerticalAlignment="Bottom" Height="1" Width="Auto" />
        </Grid>
    </DataTemplate>
</ListBox.ItemTemplate>

```

The idea is that the rectangle, provides a thin white line across the bottom of the entire ListBox Item; however, with the Xaml above, it only extends as long as the text, not to the full width of the ListBox.

---

> [Scott answered](https://stackoverflow.com/a/1578773) (1 upvotes):
>
> Setting your width to Auto basically tells it to only be large enough to fit everything inside. I think you need to set your Grid's HorizontalAlignment to Stretch for it to work properly.
> 
> Edit:
> 
> I did a small sample app. Here's how I would do what you are trying to do:
> 
> On your actual listbox, I would have the HorizontalContentAlignment property set to Stretch
> 
> and
> 
> I would change your Grid to a DockPanel:
> 
> ```
> <ListBox.ItemTemplate>
>     <DataTemplate>
>         <DockPanel Height="22" HorizontalAlignment="Stretch">
>             <Rectangle Fill="White" Stroke="White" Margin="-2,0,-2,0.5" DockPanel.Dock="Bottom" Height="1"/>
>             <Image Margin="-2,0,0,0" Height="20" DockPanel.Dock="Left" Width="22"  />
>             <TextBlock Margin="20,3,0,0" Text="Daniel Manning" DockPanel.Dock="Left"/>
>         </DockPanel>
>     </DataTemplate>
> </ListBox.ItemTemplate>
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1578725) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
