---
title: "WPF Databinding and Styling based on Data in an item in an IList"
description: "A question I asked on Stack Overflow"
date: 2009-06-19
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
  - data-binding
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1020191"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1020191):*

I have a ListBox bound to a list of Items (for arguement, lets say its got a string and two dates Entered and Done).

I would like to make the background color of items in the ListBox have a gray color if the Done DateTime is != DateTime.MinValue.

**Edit:**

Should I make a converter? and convert DateTime to a Brush based on the value of the DateTime?

Is something like this my best option? or is there a simple Xaml snippet I could use?

```
[ValueConversion(typeof(DateTime), typeof(Brush))]
class MyConverter : IValueConverter
{
    ...
}

```

---

> [Andy answered](https://stackoverflow.com/a/1020306) (8 upvotes):
>
> A `ValueConverter` would work. Another option would be to use a `DataTrigger` in the style of `ListBoxItem`. Maybe something like this:
> 
> ```
> <Style x:Name="MinDateTimeListBoxStyle" TargetType="ListBoxItem">
>     <Style.Triggers>
>         <Setter Property="Background" Value="Gray" />
>         <DataTrigger Binding="{Binding Path=Done}"
>             Value="{x:Static sys:DateTime.MinValue}">
>             <Setter Property="Background" Value="White" />
>         </DataTrigger>
>     </Style.Triggers>
> </Style>
> 
> ```
> 
> This will set the background to Gray when the value of `Done` isn't `DateTime.MinValue`. I don't think there is a way to do a not equals comparison in a trigger, so it sets the background to Gray by default, and only changing it back to white if `Done` hasn't changed yet. It would probably be better to use the correct color for the background instead of white (maybe get the value of the parent's background?), but this should give you something to start with.
> 
> **Update**: To apply this style to the items of only certain ListBoxes, give the style a name and set the `ItemContainerStyle` as appropriate:
> 
> ```
> <ListBox x:Name="StyledListBox"
>     ItemContainerStyle="{StaticResource MinDateTimeListBoxStyle}" />
> <ListBox x:Name="NormalListBox" />
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1020191) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
