---
title: "Trouble with Data Binding a ViewModel to UserControl&#39;s Dependency Property from UserControl Code-Behind"
description: "My answer to \"Trouble with Data Binding a ViewModel to UserControl&#39;s Dependency Property from UserControl Code-Behind\" on Stack Overflow"
date: 2011-03-07
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - data-binding
  - mvvm
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5223698"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5185512):*

> I am attempting to bind my ViewModel's `IsInInputMode` property to a Dependency Property in a UserControl. I am setting the UserControl's DataContext to an instance of my ViewModel and all my XAML based bindings are working correctly. I need a code-behind solution to create this binding. I've tried a few things (at the bottom of the post) which have not worked.
> 
> I'm not getting any exceptions logged to the Output window either, which is where I've been told to look for Binding based exceptions.
> 
> I asked this similar [question](https://stackoverflow.com/questions/5121877/bind-dependency-property-defined-in-code-behind-through-xaml-to-a-property-in-t), on binding a Dependency Property in a UserControl through XAML -- I was told this is not possible, so I'm looking for a code-behind solution.
> 
> **The ViewModel looks like this:**
> 
> ```
> class AddClientViewModel : ViewModelBase
> {
>     private Boolean _isInInputMode;
>     public Boolean IsInInputMode
>     {
>         get { return _isInInputMode; }
>         set
>         {
>             _isInInputMode = value;
>             OnPropertyChanged("IsInInputMode");
>         }
>     }
> 
>     public ICommand Cancel
>     {
>         get { return new RelayCommand(parm => { IsInInputMode = false; }); }
>     }
> }
> 
> ```
> 
> The `Cancel` command is successfully being data bound to a Button's Command through XAML.
> 
> **The Dependency Property in the UserControl looks like this:**
> 
> ```
>     public bool IsInInputMode
>     {
>         get { return (bool)GetValue(IsInInputModeProperty); }
>         set { SetValue(IsInInputModeProperty, value); }
>     }
>     public static readonly DependencyProperty IsInInputModeProperty =
>         DependencyProperty.Register("IsInInputMode", typeof(bool), typeof(AddClientView), new UIPropertyMetadata(new PropertyChangedCallback(_OnIsInInputModePropertyChanged)));
> 
>     private static void _OnIsInInputModePropertyChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
>     {
>         var mycontrol = d as AddClientView;
> 
>         bool oldValue = (bool)e.OldValue;
>         bool newValue = (bool)e.NewValue;
> 
>         if (null != mycontrol && oldValue != newValue)
>         {
>             mycontrol._OnIsInInputModeChanged(oldValue, newValue);
>         }
>     }
> 
>     private void _OnIsInInputModeChanged(bool oldValue, bool newValue)
>     {
>         if (newValue)
>         {
>             VisualStateManager.GoToState(this, "InputState", false);
>         }
>         else
>         {
>             VisualStateManager.GoToState(this, "HiddenState", false);
>         }
>     }
> 
> ```
> 
> **The Binding in the Constructor of my UserControl has had a few iterations.**
> 
> _First Try:_
> 
> ```
>     public AddClientView()
>     {
>         InitializeComponent();
>         SetBinding(IsInInputModeProperty, "IsInInputMode");
>     }
> 
> ```
> 
> _Second Try:_
> 
> ```
>     public AddClientView()
>     {
>         InitializeComponent();
> 
>         var b = new Binding();
>         b.Source = this.DataContext;
>         b.Path = new PropertyPath("IsInInputMode");
>         b.Mode = BindingMode.TwoWay;
>         b.UpdateSourceTrigger = UpdateSourceTrigger.PropertyChanged;
>         BindingOperations.SetBinding(this, IsInInputModeProperty, b);
>     }
> 
> ```
> 
> Neither of these "fail" with a compiler or runtime error; but when the IsInInputMode property changes in the ViewModel, the Dependency Property never updates, and the two even handlers there are never called.
> 
> As an additional note, the ViewModel has a few `ICommand` properties, which **are** being successfully bound to buttons in the UserControl via XAML -- so I know the DataContext binding correctly.

*I posted the following answer, which was chosen as the accepted answer:*

Turns out it was a PEBKEC issue -- I had a default value set somewhere, so OnNotifyPropertyChanged never got called, as such it appeared that the binding was broken.

I bound my boolean to a checkbox on the View, and using the UI control to change the value forced my animations to change, the correct code-behind binding was my first try:

```
SetBinding(IsInInputModeProperty, "IsInInputMode");

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5223698) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
