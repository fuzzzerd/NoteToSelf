---
title: "Add rectangle to WPF Listbox and make alternate the fill color of that rectangle"
description: "A question I asked on Stack Overflow"
date: 2009-09-28
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
  - user-interface
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1489620"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1489620):*

I have listbox with a TextBlock bound to a field, and the I have set the AlternationCount="2" this works great for changing the background color of the items control; however, I cannot get the effect I want with my rectangle... I'm trying to have a rounded corners effect on each listbox item.

**edit:** the xaml

```
<DataTemplate x:Key="TaskListTemplate">
    <Grid Height="276" Width="Auto">
        <Rectangle Fill="Gray" Stroke="Black" RadiusX="8" RadiusY="8" Margin="0"/>
        <TextBox x:Name="txtDescription" Text="{Binding Path=Des}" />
        <TextBox x:Name="txtComments" Text="{Binding Path=Com}"/>
        <Label Content="{Binding Path=Title}">
    </Grid>
</DataTemplate>

<ListBox Margin="8,37,0,6" 
    ItemContainerStyle="{DynamicResource ListBoxItemStyle}" 
    AlternationCount="2"
    ItemTemplate="{DynamicResource TaskListTemplate}"/>

<Style x:Key="ListBoxItemStyle" TargetType="{x:Type ListBoxItem}">
        <Setter Property="FontSize" Value="12" />
        <Setter Property="FontFamily" Value="Tahoma" />
        <Setter Property="Background" Value="#006C3B3B"/>
        <Style.Resources>
          <SolidColorBrush x:Key="{x:Static SystemColors.HighlightBrushKey}" Color="#FF533F70"/>
          <SolidColorBrush x:Key="{x:Static SystemColors.ControlBrushKey}" Color="#FF533F70"/>
          <Storyboard x:Key="MouseOverStoryBoard">
            <ColorAnimationUsingKeyFrames AutoReverse="True" BeginTime="00:00:00" Storyboard.TargetName="{x:Null}" Storyboard.TargetProperty="(Panel.Background).(SolidColorBrush.Color)">
                <SplineColorKeyFrame KeyTime="00:00:00" Value="#FFF48F21"/>
                <SplineColorKeyFrame KeyTime="00:00:00.5000000" Value="#FF4A475C"/>
            </ColorAnimationUsingKeyFrames>
          </Storyboard>
        </Style.Resources>
        <Style.Triggers>
            <Trigger Property="ItemsControl.AlternationIndex" Value="0">
                <Setter Property="Background">
                    <Setter.Value>
                        <SolidColorBrush Color="#FFA2BAD4"/>
                    </Setter.Value>
                </Setter>
                <Setter Property="Foreground" Value="White"/>
            </Trigger>
            <Trigger Property="ItemsControl.AlternationIndex" Value="1">
                <Setter Property="Background" Value="#FF7395B9"/>
                <Setter Property="Foreground" Value="White"/>
            </Trigger>
            <Trigger Property="IsMouseOver" Value="True">
                <Trigger.EnterActions>
                    <BeginStoryboard Storyboard="{StaticResource MouseOverStoryBoard}"/>
                </Trigger.EnterActions>
                <Setter Property="Foreground" Value="White" />
                <Setter Property="Background" Value="#FFF48F21"/>
                <Setter Property="FontStyle" Value="Normal"/>
            </Trigger>
        </Style.Triggers>
    </Style>

```

---

> [Simon D. answered](https://stackoverflow.com/a/1506228) (1 upvotes):
>
> In my tests, changing the ItemTemplate (TaskListTemplate) did not have any effect. So the first step would be to do this in another way, I chose setting the ContentTemplate in the ListBoxItemStyle, which worked. Further, you want some rounded rectangle with an alternating background: I used a border for this in my modification of your code, but a rectangle would also work out similarly. Here I think, the key is to set the background of other elements transparent, otherwise they will hide your rectangle. Just copy the following code in Kaxaml to see what it looks like.
> 
> ```
> <Page xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
>     <Page.Resources>
>         <DataTemplate x:Key="TaskListTemplate">
>             <Border MinWidth="50" Height="70" Background="{TemplateBinding ListBoxItem.Background}" BorderBrush="Black" CornerRadius="8" Margin="0">
>                 <Grid Background="Transparent">
>                     <TextBox x:Name="txtDescription" Text="{Binding Path=Des}" Background="Transparent"/>
>                     <TextBox x:Name="txtComments" Text="{Binding Path=Com}" Background="Transparent"/>
>                     <Label Content="{Binding Path=Title}" Background="Transparent"/>
>                 </Grid>
>             </Border>
>         </DataTemplate>
>         <Style x:Key="ListBoxItemStyle" TargetType="{x:Type ListBoxItem}">
>             <Setter Property="FontSize" Value="12"/>
>             <Setter Property="FontFamily" Value="Tahoma"/>
>             <Setter Property="Background" Value="#006C3B3B"/>
>             <Setter Property="ContentTemplate" Value="{DynamicResource TaskListTemplate}"/>
>             <Style.Resources>
>                 <SolidColorBrush x:Key="{x:Static SystemColors.HighlightBrushKey}" Color="#FF533F70"/>
>                 <SolidColorBrush x:Key="{x:Static SystemColors.ControlBrushKey}" Color="#FF533F70"/>
>                 <Storyboard x:Key="MouseOverStoryBoard">
>                     <ColorAnimationUsingKeyFrames AutoReverse="True" BeginTime="00:00:00" Storyboard.TargetName="{x:Null}" Storyboard.TargetProperty="(Panel.Background).(SolidColorBrush.Color)">
>                         <SplineColorKeyFrame KeyTime="00:00:00" Value="#FFF48F21"/>
>                         <SplineColorKeyFrame KeyTime="00:00:00.500" Value="#FF4A475C"/>
>                     </ColorAnimationUsingKeyFrames>
>                 </Storyboard>
>             </Style.Resources>
>             <Style.Triggers>
>                 <Trigger Property="ItemsControl.AlternationIndex" Value="0">
>                     <Setter Property="Background">
>                         <Setter.Value>
>                             <SolidColorBrush Color="#FFA2BAD4"/>
>                         </Setter.Value>
>                     </Setter>
>                     <Setter Property="Foreground" Value="White"/>
>                 </Trigger>
>                 <Trigger Property="ItemsControl.AlternationIndex" Value="1">
>                     <Setter Property="Background" Value="#FF7395B9"/>
>                     <Setter Property="Foreground" Value="White"/>
>                 </Trigger>
>                 <Trigger Property="IsMouseOver" Value="True">
>                     <Trigger.EnterActions>
>                         <BeginStoryboard Storyboard="{StaticResource MouseOverStoryBoard}"/>
>                     </Trigger.EnterActions>
>                     <Setter Property="Foreground" Value="White"/>
>                     <Setter Property="Background" Value="#FFF48F21"/>
>                     <Setter Property="FontStyle" Value="Normal"/>
>                 </Trigger>
>             </Style.Triggers>
>         </Style>
>     </Page.Resources>
>     <Grid>
>         <ListBox Margin="8,37,0,6" 
>                  ItemContainerStyle="{DynamicResource ListBoxItemStyle}" 
>                  AlternationCount="2">
>             <ListBoxItem>Test1</ListBoxItem>
>             <ListBoxItem>Test2</ListBoxItem>
>             <ListBoxItem>Test3</ListBoxItem>
>         </ListBox>
>     </Grid>
> </Page>
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I removed a bunch of properties from the items in the DataTemplate and must've deleted the "/" by mistake... Everything is working fine, I can't get the background rectangle to take on the background color of the listbox item.

**Nate** (0 upvotes): I just added the xaml for the ListBox, the ItemTemplate, and the ItemStyle.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1489620) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
