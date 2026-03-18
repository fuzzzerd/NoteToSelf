---
title: "Observable Collection Property Changed on Item in the Collection"
description: "A question I asked on Stack Overflow"
date: 2009-06-18
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - sorting
  - collections
  - observablecollection
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1015126"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1015126):*

I have an `ObservableCollection<T>`. I've bound it to a ListBox control and I've added `SortDescriptions` to the Items collection on the ListBox to make the list sort how I want.

I want to resort the list at **ANY** point when any property changed on a child element.

All my child elements implement `INotifyPropertyChanged`.

---

> [micahtan answered](https://stackoverflow.com/a/1015260) (12 upvotes):
>
> Brute force:
> 
> 1.  Attach handler to each PropertyChanged event for each child item
> 2.  Grab the ListCollectionView from your CollectionViewSource
> 3.  Call Refresh.
> 
> **EDIT:**
> 
> The code for 1, 2 would live in your code-behind.
> 
> For #1, you'd do something like:
> 
> ```
> private void Source_CollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
> {
>     switch (e.Action)
>     {
>         case NotifyCollectionChangedAction.Add:
>             foreach( SomeItem item in e.NewItems)
>             {
>                item.PropertyChanged += new PropertyChangedEventHandler(_SomeItem_PropertyChanged); 
>             }
>             break;
> ....
> **HANDLE OTHER CASES HERE**
> ....
>       }
> }
> 
> ```
> 
> For #2, in your CollectionChanged handler, you would do something like:
> 
> ```
> private void _SomeItem_PropertyChanged(object sender, PropertyChangedEventArgs e)
> {
>     ListCollectionView lcv = (ListCollectionView)(CollectionViewSource.GetDefaultView(theListBox.ItemsSource));
>     lcv.Refresh();
> }
> 
> ```
> 
> EDIT2: However, in this case, I would **strongly** suggest that you also check ListCollectionView.NeedsRefresh and only refresh if that is set. There's no reason to re-sort if your properties have changed which don't affect the sort.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): That is correct. When a property of a child item is changed, I would like the sort to reflect this change.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1015126) — 11 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
