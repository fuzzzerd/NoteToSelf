---
title: "Silverlight ListBox with ObservableCollection&lt;T&gt; and dynamic filter"
description: "A question I asked on Stack Overflow"
date: 2010-09-17
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - silverlight
  - data-binding
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3732145"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3732145):*

Lets say I have this class:

```
public class MyData
{
    public bool IsActive{get;set;}
    public String Data1 {get;set;}
    public String Data2 {get;set;}
}

```

and an

```
ObservableCollection<MyData> data = new ObservableCollection<MyData>;
ListBox.ItemsSource = data;

```

Adding items to the ObservableCollectionworks as expected; however, I want to make sure that my listbox only displays items where `IsActive` is set to 'true' -- I can't use a Linq query to set the ItemsSource because then its not an ObservableCollection, its IEnumerable and does not do any update notifications to the listbox.

---

> [John Garland answered](https://stackoverflow.com/a/3732459) (9 upvotes):
>
> Your answer is CollectionViewSource. Instead of binding to the list, bind to an instance of CollectionViewSource.
> 
> A slightly degenerate example follows (I am not sure if you're using ViewModels, Locators, etc to resolve your data and your list.)
> 
> Assume in your markup you have a CollectionViewSource declared in your resources as follows:
> 
> ```
> <phone:PhoneApplicationPage.Resources>
>     <CollectionViewSource x:Key="src"/>
> </phone:PhoneApplicationPage.Resources>
> 
> ```
> 
> Then your list binding looks like:
> 
> ```
> <ListBox x:Name="MyListBox" ItemsSource="{Binding Source={StaticResource src}}">
> 
> ```
> 
> Finally, in code you can marry your list and your collection view source:
> 
> ```
>         var collectionView = this.Resources["src"] as CollectionViewSource;
>         // Check for null, etc.
>         collectionView.Source = observableCollectionThatIAmBindingTo;
>         collectionView.View.Filter=new Predicate<Object>(o => ((ItemType)o).IsActive );
> 
> ```
> 
> Additionally, you may want to check out Bea Stollnitz' articles on the topic at:
> 
> [http://bea.stollnitz.com/blog/?p=31](http://bea.stollnitz.com/blog/?p=31)
> 
> [http://bea.stollnitz.com/blog/?p=392](http://bea.stollnitz.com/blog/?p=392)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3732145) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
