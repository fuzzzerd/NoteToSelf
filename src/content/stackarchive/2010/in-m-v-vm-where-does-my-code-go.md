---
title: "In M-V-VM where does my code go?"
description: "A question I asked on Stack Overflow"
date: 2010-06-11
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - design-patterns
  - mvvm
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3025536"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3025536):*

So, this is a pretty basic question I hope.

I have a web service that I've added through Add Service Reference. It has some methods to get list and get detail of a perticular table in my database.

What I'm trying to do is setup a UI as follows:

1.  App Load
    1.  Load service proxy
    2.  Call the `GetList();` method display the results in a ListBox control
2.  User Double Clicks item in ListBox, display a modal dialog with a "detail" view

I'm extremely new to using MVVM, so any help would be greatly appreciated.

Additional information:

```
// Service Interface (simplification):

interface IService 
{
    IEnumerable<MyObject> GetList();
    MyObject GetDetail(int id);
}

// Data object (simplification)
class MyObject
{
    public int ID { get; set; }
    public string Name { get; set; }
}

```

I'm thinking I should have something like this:

```
MainWindow
    MyObjectViewUserControl 
        Displays list
        Opens modal window on double click

```

Specific Questions:

1.  What would my ViewModel class look like?
2.  Where does the code to handle the double click go?
    1.  Inside the UserControl?
    2.  What about Commands, would this be a good application of them?

Sorry for the long details, but I'm very new to the whole thing and I'm not educated enough to ask the right questions.

I checked out the MVVM Sample from wpf.codeplex.com and something isn't quite clicking for me yet, because it seems very confusing.

---

> [PL. answered](https://stackoverflow.com/a/3025782) (3 upvotes):
>
> 1.  Your VM would have:
>     *   an ObservableCollection that contains items that you bind to your ListBox.
>     *   CurrentItem that is bound to a currently selected item in the list
>     *   DelegateCommand that is bound to a double click and that invokes a logic to show a detail view (see MVVM ways of doing this, either a service or event aggregator like approach)
>     *   A logic to invoke invoke GetList() and then populate this colleciton
> 2.  The code to handle double click will go to VM (see above)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3025536) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
