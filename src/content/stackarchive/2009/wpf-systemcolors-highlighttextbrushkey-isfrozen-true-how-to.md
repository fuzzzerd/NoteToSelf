---
title: "WPF SystemColors.HighlightTextBrushKey IsFrozen=True; How to change Foreground of Selected Item on ListBox Control"
description: "A question I asked on Stack Overflow"
date: 2009-10-16
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
  - wpf-controls
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1579286"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1579286):*

I have this Xaml

```
<SolidColorBrush x:Key="{x:Static SystemColors.HighlightBrushKey}"
    Value="#123456"/>        
<SolidColorBrush x:Key="{x:Static SystemColors.HighlightTextBrushKey}" 
    Value="White"/>

```

THe first one works, the second one does not. On MSDN, SystemColors.HighlightTextBrushKey says that it "IsFrozen" and cannot be changed, so I tried this in my style:

```
<Trigger Property="IsSelected" Value="true">
    <Setter Property="Foreground" Value="White" />
</Trigger>

```

Which also does not work, any guidance would be really helpful, thanks.

**Edit** -- Additional Xaml

```
    <ListBox ItemContainerStyle="{DynamicResource ListBoxItemStyle}" 
        AlternationCount="2"
        Margin="8,37,8,74" 
        x:Name="listClientOUContents" 
        HorizontalContentAlignment="Stretch">
        <ListBox.ItemTemplate>
            <DataTemplate>
                <Grid Height="22" HorizontalAlignment="Stretch">
                    <Image Margin="-2,0,0,0" Source="{Binding Path=ADsPath, Converter={StaticResource ImxConverter}}" HorizontalAlignment="Left" Width="22"  />
                    <TextBlock HorizontalAlignment="Stretch" Margin="20,3,0,0" Text="{Binding Path=DisplayValue}" />
                    <Rectangle HorizontalAlignment="Stretch" Fill="White" Stroke="White" Margin="-2,0,-2,0.5" VerticalAlignment="Bottom" Height="1" />
                </Grid>
            </DataTemplate>
        </ListBox.ItemTemplate>
    </ListBox>

```

Here is the ItemContainerStyle I'm using

```
<Style x:Key="ListBoxItemStyle" TargetType="{x:Type ListBoxItem}">
        <Setter Property="FontSize" Value="12" />
        <Setter Property="FontFamily" Value="Tahoma" />
        <Setter Property="Background" Value="#006C3B3B"/>
        <Style.Resources>
            <!-- Selected and Focused -->
            <SolidColorBrush x:Key="{x:Static SystemColors.HighlightBrushKey}" Color="#FF533F70"/>
            <!-- Selected and UN-focused -->  
            <SolidColorBrush x:Key="{x:Static SystemColors.ControlBrushKey}" Color="#FF533F70"/>
            <Storyboard x:Key="MouseOverStoryBoard">
                <ColorAnimationUsingKeyFrames AutoReverse="True" BeginTime="00:00:00" Storyboard.TargetName="{x:Null}" Storyboard.TargetProperty="(Panel.Background).(SolidColorBrush.Color)">
                    <SplineColorKeyFrame KeyTime="00:00:00" Value="#FFF48F21"/>
                    <SplineColorKeyFrame KeyTime="00:00:00.5000000" Value="#FF4A475C"/>
                </ColorAnimationUsingKeyFrames>
            </Storyboard>
        </Style.Resources>
        <Style.Triggers>
            <Trigger Property="IsSelected" Value="true">
                <Setter Property="Foreground" Value="White" />
            </Trigger>
            <Trigger Property="ItemsControl.AlternationIndex" Value="0">
                <Setter Property="Background">
                    <Setter.Value>
                        <SolidColorBrush Color="#a1a1a1"/>
                    </Setter.Value>
                </Setter>
                <Setter Property="Foreground" Value="black"/>
            </Trigger>
            <Trigger Property="ItemsControl.AlternationIndex" Value="1">
                <Setter Property="Background" Value="#a1a1a1"/>
                <Setter Property="Foreground" Value="black"/>
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

> [Scott answered](https://stackoverflow.com/a/1579730) (1 upvotes):
>
> Edit: Switch the order of your 'IsSelected' trigger and your 'ItemsControl.AlternationIndex' trigger:
> 
> ```
> <Trigger Property="ItemsControl.AlternationIndex" Value="0">
>     <Setter Property="Background">
>         <Setter.Value>
>             <SolidColorBrush Color="#a1a1a1"/>
>         </Setter.Value>
>     </Setter>
>     <Setter Property="Foreground" Value="black"/>
> </Trigger>
> <Trigger Property="IsSelected" Value="true">
>     <Setter Property="Foreground" Value="White" />
> </Trigger>
> 
> ```
> 
> The last trigger in the list is taking priority, so your AlternationIndex was overriding your IsSelected trigger. With IsSelected being listed after the AlternationIndex, it should now take priority.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes... I've edited the question with more xaml.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1579286) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
