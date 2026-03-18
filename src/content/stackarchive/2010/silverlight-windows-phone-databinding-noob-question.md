---
title: "Silverlight Windows Phone Databinding -- noob question"
description: "A question I asked on Stack Overflow"
date: 2010-07-29
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - silverlight
  - data-binding
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3367717"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3367717):*

I have a basic Windows Phone List application, with code like this in the MainViewModel class

```
// CODE THAT WORKS --

Items.Clear();

foreach (var itm in e.Result)
    Items.Add(itm);

Count = Items.Count;

// CODE THAT DOES NOT WORK -- I'm trying to understand WHY

Items = e.Result;

```

The databinding Xaml looks like this:

```
<DataTemplate>
    <StackPanel x:Name="DataTemplateStackPanel" Orientation="Horizontal">
        <Image x:Name="ItemImage" Source="/AppName;component/Images/ArrowImg.png" Height="43" Width="43" VerticalAlignment="Top" Margin="10,0,20,0"/>
        <StackPanel>
            <TextBlock x:Name="ItemText" Text="Event Name" Margin="-2,-13,0,0" Style="{StaticResource PhoneTextExtraLargeStyle}"/>
            <TextBlock x:Name="DetailsText" Text="{Binding Path=Description}" Margin="0,-6,0,3" Style="{StaticResource PhoneTextSubtleStyle}"/>
        </StackPanel>
    </StackPanel>
</DataTemplate>

```

I think I have a misunderstanding of how ObservableCollection and INotifyPropertyChanged work, because I'm thinking that this code should work. Databinding to NonCollection items is working as I'd expect with my INotifyPropertyChanged implementation.

---

> [Anero answered](https://stackoverflow.com/a/3368127) (5 upvotes):
>
> Though you haven't included the code snippet for the Items property, I would guess that the problem is that you are not firing the PropertyChanged event when modifying the value of the property (that is, changing the reference to another object). If you want to keep the code that doesn't work, you should implement the Items property like this:
> 
> ```
> private IEnumerable<Item> items;
> 
> public IEnumerable<Item> Items
>   {
>       get { return this.items; }
>       set
>       {
>           this.items = value;
>           // Call OnPropertyChanged whenever the property is updated
>           OnPropertyChanged("Items");
>       }
>   }
> 
>   protected void OnPropertyChanged(string name)
>   {
>       PropertyChangedEventHandler handler = PropertyChanged;
>       if (handler != null)
>       {
>           handler(this, new PropertyChangedEventArgs(name));
>       }
>   }
> 
> ```
> 
> With this implementation, you wouldn't need the Items collection to be an ObservableCollection, but each time you would want to modify it (adding or removing items), you should replace it entirely.
> 
> Of course you could keep the type as ObservableCollection instead of IEnumerable but take into account the overhead that this kind of collection has over others like List or Array.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3367717) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
