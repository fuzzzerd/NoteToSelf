---
title: "List / Detail Different Windows can they be synchronized and databound to the same collection?"
description: "A question I asked on Stack Overflow"
date: 2009-10-12
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
  - data-binding
  - windowing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1555220"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1555220):*

I have a listbox that is bound to a `List<T>` -- this is working great.

I'd like to let my users double click a listbox item and open a new window that will display the "detail" view for that record. I'd like this new window to be databound to the same collection as the listbox on the original window. Because, that window has a timer, which polls a webserivce for updated data, I'd like the child (detail window) to also update when the main list updates.

Is this easily done? An example would be great, but any help is appreciated!

---

> [AndyM answered](https://stackoverflow.com/a/1555647) (7 upvotes):
>
> You could share the data directly (ie pass the SelectedItem reference to the child window), but that doesn't help you manage behavior and state across multiple windows. If it is a read-only view that's less of a problem, but if data is being changed it gets very problematic very quickly.
> 
> This is a good example of the benefits of using a Model-View-? pattern. [MVVM](http://msdn.microsoft.com/en-us/magazine/dd419663.aspx#id0090102) is usually the preferred pattern for WPF because WPF is designed for complete separation-of-presentation. However, in a case like this, you may want something closer to [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (Model-View-Controller), because you really want to coordinate behavior and state between distinct UI elements.
> 
> I would recommend a hybrid approach, let's call it "MVVMC" just to make the acronym even longer and more awkward. Implement a ViewModel that is completely UI-agnostic, and just exposes data and data-related state/behavior--probably mostly CRUD type stuff. Then implement a Controller specific to your UI design that consumes and exposes (either by delegation or composition) the ViewModel, but encapsulates. all of the the multi-window display behavior -- things enforcing one window per item, propagating close requests, etc.
> 
> ```
> public class MyViewModel : INotifyPropertyChanged, INotifyCollectionChanged
> {
>     public MyViewModel(DataModel dataModel) { ... }
> }
> 
> public class MyController
> {
>     public MyController(MainWindow mainWindow, ViewModel viewModel) { ... }
>     public ViewModel { get { return _viewModel; } }
>     public ICommand DisplayChild { ... }
> }
> 
> ```
> 
> So what you're really doing is taking an MVVM, then inverting control so the controller can manage the multi-window UI. So the controller here would inject the ViewModel into windows (including main) as the DataContext for easy binding. It would also bind to events on the main window, launch child windows, and probably bind to child window events in order to manage them properly (eg one window per child record, close children when main closes, etc).
> 
> I would go one step further here, implementing the controller against an interface instead of Window. This gives you some flexibility in refactoring, but more importantly allows you to unit test your controller against mocks.
> 
> ```
> public interface IControllerChild
> {
>     public void Show();
>     public bool Activate();
>     public void Close();
>     // add other behaviors here
> }
> 
> public class DetailWindow : Window, IControllerChild 
> {
>     // implement other behaviors here
> }
> 
> public class MockControllerChild : IControllerChild
> {
>     public void Show() { IsShowing = true; ActionLog.Add(MockControllerAction.Show); }
>     public void Activate() { IsShowing = false; ActionLog.Add(MockControllerAction.Activate); }
>     public void Close() { IsShowing = false; ActionLog.Add(MockControllerAction.Close); } 
>     public bool IsShowing { get; private set; }
>     public IList<MockControllerAction> ActionLog { get; private set; }
>     // mock and record other behaviors here
> }
> 
> public enum MockControllerAction 
> { 
>     Show, 
>     Activate, 
>     Close,  
>     // Add other behaviors here
> };
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1555220) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
