---
title: "How to animate ListBox Items on MouseEnter and MouseLeave events using C#/WPF?"
description: "My answer to \"How to animate ListBox Items on MouseEnter and MouseLeave events using C#/WPF?\" on Stack Overflow"
date: 2009-06-02
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - animation
  - listboxitem
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/942168"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/942149):*

> I can't capture/trigger OnMouseEnter or OnMouseLeave events through C# code for list items. To be clear, I don't need an OnSelectedItem event.
> 
> What I want to do is to be able to handle the OnMouseEnter and OnMouseLeave events for ListBoxItem which will start the DoubleAnimation for that ListBoxItem - I want to enlarge its font on MouseEnter and restore to original size on MouseLeave.
> 
> Any ideas? Thanks.

Something like this (as part of the ListBox's DataTemplate):

```
<DataTemplate.Triggers>
    <EventTrigger
        SourceName="BorderControl"
        RoutedEvent="TextBlock.MouseEnter">
        <BeginStoryboard>
            <Storyboard>
                <ColorAnimation Storyboard.TargetName="BorderControl"
                    Storyboard.TargetProperty="Background.Color"
                    To="DarkRed" Duration="00:00:00.2" />
            </Storyboard>
        </BeginStoryboard>
    </EventTrigger>
    <EventTrigger
        SourceName="BorderControl"
        RoutedEvent="TextBlock.MouseLeave">
        <BeginStoryboard>
            <Storyboard>
                <ColorAnimation Storyboard.TargetName="BorderControl"
                    Storyboard.TargetProperty="Background.Color"
                    To="WhiteSmoke" Duration="00:00:00.2" />
            </Storyboard>
        </BeginStoryboard>
    </EventTrigger>
</DataTemplate.Triggers>

```

via [http://www.dotnet-blog.com/index.php/2009/01/29/how-to-style-and-animate-a-wpf-listbox/](http://www.dotnet-blog.com/index.php/2009/01/29/how-to-style-and-animate-a-wpf-listbox/)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/942168) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
