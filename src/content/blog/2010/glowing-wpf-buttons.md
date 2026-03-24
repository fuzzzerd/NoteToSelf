---
title: "Glowing WPF Buttons"
description: "My answer to \"Glowing WPF Buttons\" on Stack Overflow"
date: 2010-02-16
author:
  name: Nate Bross
tags:
  - wpf
  - button
  - styles
  - glow
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2275907"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2275900):*

> After clicking the WPF buttons in our app they glow blue, back to original color, back to blue, etc. This appears to be default behavior on Windows Vista/7. It does not happen on XP. Any advice?

*I posted the following answer, which was chosen as the accepted answer and received 9 upvotes:*

You need to override the default button template -- [http://mark-dot-net.blogspot.com/2007/07/creating-custom-wpf-button-template-in.html](http://mark-dot-net.blogspot.com/2007/07/creating-custom-wpf-button-template-in.html) should get ya started.

Specifically Section 3:

```
<ControlTemplate.Triggers>
    <Trigger Property="IsMouseOver" Value="True">
        <Setter TargetName="border" Property="BorderBrush" Value="#FF4788c8" />
        <Setter Property="Foreground" Value="#FF4788c8" />
    </Trigger>
    <Trigger Property="IsPressed" Value="True">                   
       <Setter Property="Background" >
           <Setter.Value>
               <LinearGradientBrush StartPoint="0,0" EndPoint="0,1" >
                   <GradientStop Color="#FFFFD190" Offset="0.35"/>
                   <GradientStop Color="Orange" Offset="0.95"/>
                   <GradientStop Color="#FFFFD190" Offset="1"/>
               </LinearGradientBrush>
            </Setter.Value>
        </Setter>
        <Setter TargetName="content" Property="RenderTransform" >
            <Setter.Value>
                <TranslateTransform Y="1.0" />
            </Setter.Value>
        </Setter>
    </Trigger>
    <Trigger Property="IsDefaulted" Value="True">
       <Setter TargetName="border" Property="BorderBrush" Value="#FF282828" />
    </Trigger>
    <Trigger Property="IsFocused" Value="True">
       <Setter TargetName="border" Property="BorderBrush" Value="#FF282828" />
    </Trigger>
    <Trigger Property="IsEnabled" Value="False">
       <Setter TargetName="border" Property="Opacity" Value="0.7" />
       <Setter Property="Foreground" Value="Gray" />
   </Trigger>
</ControlTemplate.Triggers>

```

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): @markmnl Feel free to post an alternate answer if there is a better approach! There has been no accepted answer here. The Style option may very well be the best option. If anything else it will help others who find this post, even if OP has solved and shipped his code.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2275907) — 9 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
