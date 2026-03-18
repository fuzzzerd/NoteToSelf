---
title: "Bind Dependency Property, defined in Code-Behind, through Xaml to a Property in the DataContext of a UserControl"
description: "A question I asked on Stack Overflow"
date: 2011-02-25
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - user-interface
  - binding
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/5121877"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/5121877):*

I want to use code similar to that found [here.](https://stackoverflow.com/questions/2404080/expose-usercontrol-property-to-xaml) The issue I'm having is that I'd like to extend it to allow the value set in the XAML to use `{Binding PropertyOfViewModel}` like this:

```
<local:TestControl>
  <local:TestControl.TestObject>
    {Binding PropertyOfViewModel}
  </local:TestControl.TestObject>
</local:TestControl>

```

The problem, is that it errors with "Cannot Convert "{Binding PropertyOfViewModel}"". The TestObject property is defined as a dependency property in the code-behind of the view.

If I can get it to work, this will allow me to write code like this in the parent control:

```
<local:TestControl x:Name="myControl" DataContext="{Binding TCViewModel}" />

```

Which means in the UserControl I can also bind to commands and other items exposed in my TCViewModel, and the control can be mostly self-contained, and all a consumer need to is set the DataContext property.

* * *

**edit**

This is the entire control:

```
<UserControl x:Class="MyProject.Views.AddClientView"
         xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
         xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
         xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
         xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
         xmlns:Views="clr-namespace:MyProject.Views"
         Background="{StaticResource WindowBackgroundBrush}"
         mc:Ignorable="d">

<!-- Comment out from here
   <Views:AddClientView>
    <Views:AddClientView.RenderTransform>
        <ScaleTransform ScaleY="1" />
    </Views:AddClientView.RenderTransform>
    <Views:AddClientView.IsInAcceptDataMode>
        <Binding Path="IsInInputMode"/>
    </Views:AddClientView.IsInAcceptDataMode>
    <Views:AddClientView.ContentTemplate>
        <DataTemplate>
to here -->
            <Grid>
                <Label 
                    Height="25" 
                    Width="306"
                    HorizontalAlignment="Left" 
                    Margin="12,12,0,0" 
                    OverridesDefaultStyle="False" 
                    Style="{DynamicResource CalloutLabel}" 
                    VerticalAlignment="Top" Content="Company Name (Name of Organizational Unit)"/>

                <TextBox Height="23" Margin="12,41,12,0" VerticalAlignment="Top" TabIndex="1" />

                <Button 
                    Style="{DynamicResource LightButton}" 
                    Height="23" Width="75" 
                    HorizontalAlignment="Right" 
                    VerticalAlignment="Bottom" 
                    Margin="0,0,97,12" 
                    TabIndex="4">OK</Button>

                <Button 
                    Style="{DynamicResource LightButton}" 
                    Height="23" Width="75" 
                    HorizontalAlignment="Right" 
                    VerticalAlignment="Bottom" 
                    Margin="0,0,12,12" 
                    Command="{Binding Cancel}"
                    TabIndex="3">Cancel</Button>

                <CheckBox Content="Make Groups" Height="16" IsChecked="True" FlowDirection="RightToLeft" Margin="150,79,12,0" VerticalAlignment="Top" TabIndex="2" />

                <Rectangle Fill="{DynamicResource HeaderBarFill}" Height="5" Margin="0,0,0,0" Stroke="{x:Null}" VerticalAlignment="Bottom" />
            </Grid>
<!-- and here 
        </DataTemplate>
    </Views:AddClientView.ContentTemplate>
</Views:AddClientView>
to here-->

```

In order to get it to compile with the code suggested, I had to re-arrange my xaml, now it both crashes Visual Studio in Design Mode, and when I run it, I get a StackOverflow exception on `InitializeComponent();` in the Views Constructor.

* * *

**edit 2**

This is the code that puts this UserControl on the window:

```
<Views:AddClientView x:Name="AddClient" VerticalAlignment="Top" DataContext="{Binding AddClientVM}">
</Views:AddClientView>

```

Interestingly: if I remove this code from the Window, it runs/compiles OK. If I remove all of the `<Views:AddClientView...>` type code from within the View, it also runs OK. But does not do what I want because I cannot bind my DP to the DataContext.

If I change the UserControl to the below, everything compiles fine, I just loose the binding on my code-behind dependency property:

```
<UserControl 
    x:Class="Mage.Views.AddClientView"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
    xmlns:Views="clr-namespace:Mage.Views"
    Background="{StaticResource WindowBackgroundBrush}"
    mc:Ignorable="d"  d:DesignWidth="320" d:DesignHeight="145"
    x:Name="AddClientV"
    MaxHeight="145" MinHeight="145">

    <VisualStateManager.VisualStateGroups>
        <VisualStateGroup>
            <VisualState x:Name="Show">
                <VisualState.Storyboard>
                    <Storyboard>
                    <DoubleAnimation 
                            Storyboard.TargetProperty="RenderTransform.(ScaleTransform.ScaleY)" 
                            Storyboard.TargetName="AddClientV" 
                            From="0" 
                            To="1" 
                            Duration="0:0:1" />
                    </Storyboard>
                </VisualState.Storyboard>
            </VisualState>

            <VisualState x:Name="Hide">
                <VisualState.Storyboard>
                    <Storyboard>
                    <DoubleAnimation 
                        Storyboard.TargetProperty="RenderTransform.(ScaleTransform.ScaleY)" 
                        Storyboard.TargetName="AddClientV" 
                        From="1" 
                        To="0" 
                        Duration="0:0:1" />
                    </Storyboard>
                </VisualState.Storyboard>
            </VisualState>
        </VisualStateGroup>
    </VisualStateManager.VisualStateGroups>

    <Views:AddClientView>
        <Views:AddClientView.RenderTransform>
            <ScaleTransform ScaleY="1" />
        </Views:AddClientView.RenderTransform>
        <Views:AddClientView.IsInAcceptDataMode>
            <Binding Path="IsInInputMode"/>
        </Views:AddClientView.IsInAcceptDataMode>
        <Views:AddClientView.ContentTemplate>
            <DataTemplate>
                <Grid>
                    <Label 
                        Height="25" 
                        Width="306"
                        HorizontalAlignment="Left" 
                        Margin="12,12,0,0" 
                        OverridesDefaultStyle="False" 
                        Style="{DynamicResource CalloutLabel}" 
                        VerticalAlignment="Top" Content="Company Name (Name of Organizational Unit)"/>

                    <TextBox Height="23" Margin="12,41,12,0" VerticalAlignment="Top" TabIndex="1" />

                    <Button 
                        Style="{DynamicResource LightButton}" 
                        Height="23" Width="75" 
                        HorizontalAlignment="Right" 
                        VerticalAlignment="Bottom" 
                        Margin="0,0,97,12" 
                        TabIndex="4">OK</Button>

                    <Button 
                        Style="{DynamicResource LightButton}" 
                        Height="23" Width="75" 
                        HorizontalAlignment="Right" 
                        VerticalAlignment="Bottom" 
                        Margin="0,0,12,12" 
                        Command="{Binding Cancel}"
                        TabIndex="3">Cancel</Button>

                    <CheckBox Content="Make Groups" Height="16" IsChecked="True" FlowDirection="RightToLeft" Margin="150,79,12,0" VerticalAlignment="Top" TabIndex="2" />

                    <Rectangle Fill="{DynamicResource HeaderBarFill}" Height="5" Margin="0,0,0,0" Stroke="{x:Null}" VerticalAlignment="Bottom" />
                </Grid>
            </DataTemplate>
        </Views:AddClientView.ContentTemplate>
    </Views:AddClientView>
</UserControl>

```

Code-Behind Dependency Property:

```
    public bool IsInAcceptDataMode
    {
        get { return (bool)GetValue(IsInAcceptDataModeProperty); }
        set 
        {
            SetValue(IsInAcceptDataModeProperty, value); 

            if (value)
            {
                VisualStateManager.GoToState(this, "Show", false);
            }
            else
            {
                VisualStateManager.GoToState(this, "Hide", false);
            }
        }
    }

    public static readonly DependencyProperty IsInAcceptDataModeProperty =
        DependencyProperty.Register("IsInAcceptDataMode", typeof(bool), typeof(AddClientView), new UIPropertyMetadata(false, null));

```

* * *

**edit 3**

So I've been informed that there are issues with XAML based binding, I tried moving to code-behind, and I still cannot get it to work. So, I'm looking at this point for a code-behind based way to bind my DependencyProperty to an item in the ViewModel which is specified to the DataContext of my UserControl.

---

> [Pavlo Glazkov answered](https://stackoverflow.com/a/5122083) (1 upvotes):
>
> If I understood everything correctly then what you need is a standard MVVM scenario and standard bindings.
> 
> It can be done either like this:
> 
> ```
> <local:TestControl TestObject="{Binding PropertyOfViewModel}">
> </local:TestControl>
> 
> ```
> 
> Or like this:
> 
> ```
> <local:TestControl>
>   <local:TestControl.TestObject>
>     <Binding Path="PropertyOfViewModel"/>
>   </local:TestControl.TestObject>
> </local:TestControl>
> 
> ```
> 
> **Update:** In response to the code of your `UserControl` you've shown...
> 
> What you are doing is placing a control inside itself, which obviously will give you a StackOverflow exception. You don't need to define a `ContentTemplate` inside `UserControl`. You can just place the content directly as a child element:
> 
> ```
> <UserControl 
>     x:Class="Mage.Views.AddClientView"
>     xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
>     xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
>     xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
>     xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
>     xmlns:Views="clr-namespace:Mage.Views"
>     Background="{StaticResource WindowBackgroundBrush}"
>     mc:Ignorable="d"  d:DesignWidth="320" d:DesignHeight="145"
>     x:Name="AddClientV"
>     MaxHeight="145" MinHeight="145">
> 
>     <VisualStateManager.VisualStateGroups>
>         <VisualStateGroup>
>             <VisualState x:Name="Show">
>                 <VisualState.Storyboard>
>                     <Storyboard>
>                     <DoubleAnimation 
>                             Storyboard.TargetProperty="RenderTransform.(ScaleTransform.ScaleY)" 
>                             Storyboard.TargetName="AddClientV" 
>                             From="0" 
>                             To="1" 
>                             Duration="0:0:1" />
>                     </Storyboard>
>                 </VisualState.Storyboard>
>             </VisualState>
> 
>             <VisualState x:Name="Hide">
>                 <VisualState.Storyboard>
>                     <Storyboard>
>                     <DoubleAnimation 
>                         Storyboard.TargetProperty="RenderTransform.(ScaleTransform.ScaleY)" 
>                         Storyboard.TargetName="AddClientV" 
>                         From="1" 
>                         To="0" 
>                         Duration="0:0:1" />
>                     </Storyboard>
>                 </VisualState.Storyboard>
>             </VisualState>
>         </VisualStateGroup>
>     </VisualStateManager.VisualStateGroups>
> 
>     <Views:AddClientView.RenderTransform>
>             <ScaleTransform ScaleY="1" />
>     </Views:AddClientView.RenderTransform>
>     <Views:AddClientView.IsInAcceptDataMode>
>             <Binding Path="IsInInputMode"/>
>     </Views:AddClientView.IsInAcceptDataMode>
> 
>    <Grid>
>       <Label 
>         Height="25" 
>         Width="306"
>         HorizontalAlignment="Left" 
>         Margin="12,12,0,0" 
>         OverridesDefaultStyle="False" 
>         Style="{DynamicResource CalloutLabel}" 
>         VerticalAlignment="Top" Content="Company Name (Name of Organizational Unit)"/>
> 
>     <TextBox Height="23" Margin="12,41,12,0" VerticalAlignment="Top" TabIndex="1" />
> 
>     <Button 
>         Style="{DynamicResource LightButton}" 
>         Height="23" Width="75" 
>         HorizontalAlignment="Right" 
>         VerticalAlignment="Bottom" 
>         Margin="0,0,97,12" 
>         TabIndex="4">OK</Button>
> 
>     <Button 
>         Style="{DynamicResource LightButton}" 
>         Height="23" Width="75" 
>         HorizontalAlignment="Right" 
>         VerticalAlignment="Bottom" 
>         Margin="0,0,12,12" 
>         Command="{Binding Cancel}"
>         TabIndex="3">Cancel</Button>
> 
>     <CheckBox Content="Make Groups" Height="16" IsChecked="True" FlowDirection="RightToLeft" Margin="150,79,12,0" VerticalAlignment="Top" TabIndex="2" />
> 
>     <Rectangle Fill="{DynamicResource HeaderBarFill}" Height="5" Margin="0,0,0,0" Stroke="{x:Null}" VerticalAlignment="Bottom" />
>   </Grid>
> </UserControl>
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Just updated to include the XAML for the user control and the code-behind DP.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/5121877) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
