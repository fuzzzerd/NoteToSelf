---
title: "WPF UserControl Dynamic Size / Dock / Anchor &amp; StoryBoard"
description: "A question I asked on Stack Overflow"
date: 2009-08-10
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - user-controls
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1256894"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1256894):*

I'm looking for some guidance on creating a WPF UserControl.

My objective is to create an indeterminent progress bar, that slides an image back and forth. I'd like to be able to dock the left and right edges of this user control to the sides of the Window so if the user resizes the window, the width of the progress bar is also increased. I don't care about the height, that can be constant.

Here's what I have, it works great except when I add the control to the form, I cannot set the docking options, and I cannot figure out how to make the storyboard animate to use the full width of the usercontrol.

```
<UserControl
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d"
    x:Class="WPFStyle.PGBProgress"
    x:Name="MotionProgressBar" Width="550" Margin="5" Height="100" MinWidth="550" MinHeight="100" MaxWidth="550" MaxHeight="100">
    <UserControl.Resources>
        <Storyboard x:Key="Motion" AutoReverse="True" RepeatBehavior="Forever">
            <DoubleAnimationUsingKeyFrames BeginTime="00:00:00" Storyboard.TargetName="image" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[3].(TranslateTransform.X)">
                <SplineDoubleKeyFrame KeyTime="00:00:00" Value="0"/>
                <SplineDoubleKeyFrame KeyTime="00:00:01" Value="127"/>
                <SplineDoubleKeyFrame KeyTime="00:00:02" Value="242"/>
                <SplineDoubleKeyFrame KeyTime="00:00:03" Value="342"/>
                <SplineDoubleKeyFrame KeyTime="00:00:04" Value="433"/>
                <SplineDoubleKeyFrame KeyTime="00:00:07" Value="433"/>
            </DoubleAnimationUsingKeyFrames>
            <DoubleAnimationUsingKeyFrames BeginTime="00:00:00" Storyboard.TargetName="image" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[3].(TranslateTransform.Y)">
                <SplineDoubleKeyFrame KeyTime="00:00:00" Value="0"/>
                <SplineDoubleKeyFrame KeyTime="00:00:01" Value="0"/>
                <SplineDoubleKeyFrame KeyTime="00:00:02" Value="0"/>
                <SplineDoubleKeyFrame KeyTime="00:00:03" Value="0"/>
                <SplineDoubleKeyFrame KeyTime="00:00:04" Value="-2"/>
                <SplineDoubleKeyFrame KeyTime="00:00:07" Value="-2"/>
            </DoubleAnimationUsingKeyFrames>
            <DoubleAnimationUsingKeyFrames BeginTime="00:00:00" Storyboard.TargetName="image" Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[2].(RotateTransform.Angle)">
                <SplineDoubleKeyFrame KeyTime="00:00:00" Value="0"/>
                <SplineDoubleKeyFrame KeyTime="00:00:01" Value="89.705"/>
                <SplineDoubleKeyFrame KeyTime="00:00:02" Value="179.29"/>
                <SplineDoubleKeyFrame KeyTime="00:00:03" Value="270.032"/>
                <SplineDoubleKeyFrame KeyTime="00:00:04" Value="362.902"/>
                <SplineDoubleKeyFrame KeyTime="00:00:07" Value="717.969"/>
            </DoubleAnimationUsingKeyFrames>
        </Storyboard>
    </UserControl.Resources>
    <UserControl.Triggers>
        <EventTrigger RoutedEvent="FrameworkElement.Loaded">
            <BeginStoryboard Storyboard="{StaticResource Motion}"/>
        </EventTrigger>
    </UserControl.Triggers>

    <Grid x:Name="LayoutRoot">
        <Image x:Name="image" HorizontalAlignment="Left" Width="85.622" Source="image.png" Stretch="Fill" VerticalAlignment="Top" RenderTransformOrigin="0.5,0.5" Margin="0,0,0,0">
            <Image.RenderTransform>
                <TransformGroup>
                    <ScaleTransform/>
                    <SkewTransform/>
                    <RotateTransform/>
                    <TranslateTransform/>
                </TransformGroup>
            </Image.RenderTransform>
        </Image>
    </Grid>
</UserControl>

```

---

> [Charlie answered](https://stackoverflow.com/a/1256991) (2 upvotes):
>
> Replace your TranslateTransform.X animation with this:
> 
> ```
> <DoubleAnimation Storyboard.TargetName="image" 
>                  Storyboard.TargetProperty="(UIElement.RenderTransform).(TransformGroup.Children)[3].(TranslateTransform.X)"
>                  From="0"
>                  To="{Binding ElementName=MotionProgressBar, Path=ActualWidth}"
>                  Duration="0:0:7"/>
> 
> ```
> 
> As you can see the real trick is the binding; I bind the `To` property to the UserControl's `ActualWidth`. The same concept can be applied to your other animations, even using KeyFrames (though I find no KeyFrames is a bit easier).
> 
> As for the "docking," I think what you are looking for is
> 
> ```
> HorizontalAlignment="Stretch"
> 
> ```
> 
> That will cause your control to fill up all the width it is given.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1256894) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
