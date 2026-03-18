---
title: "How does one convert from an IEnumerable to IEnumerable&lt;T&gt;?"
description: "A question I asked on Stack Overflow"
date: 2012-10-31
author:
  name: Nate Bross
tags:
  - c#
  - active-directory
  - parallel-processing
  - task-parallel-library
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/13162741"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/13162741):*

Is there a way to get an `IEnumerable<T>` from an `IEnumerable` without [reflection](https://stackoverflow.com/questions/812673/convert-cast-ienumerable-to-ienumerablet), assuming I know the type at design time?

I have this

```
foreach(DirectoryEntry child in de.Children)
{
   // long running code on each child object
}

```

I am trying to enable parallelization, like so

```
Parallel.ForEach(de.Children, 
    (DirectoryEntry child) => { // long running code on each child });

```

but this doesn't work, as de.Children is of type [`DirectoryEntries`](http://msdn.microsoft.com/en-us/library/system.directoryservices.directoryentries.aspx). It implements `IEnumerable` but not `IEnumerable<DirectoryEntry>`.

---

> [Nate answered](https://stackoverflow.com/a/13162742) (6 upvotes):
>
> The way to achieve this is to use the [`.Cast<T>()` extension method](http://msdn.microsoft.com/en-us/library/bb341406.aspx).
> 
> ```
> Parallel.ForEach(de.Children.Cast<DirectoryEntry>(), 
>     (DirectoryEntry child) => { // long running code on each child });
> 
> ```
> 
> Another way to achieve this is to use the [`.OfType<T>()` extension method](http://msdn.microsoft.com/en-us/library/bb360913.aspx).
> 
> ```
> Parallel.ForEach(de.Children.OfType<DirectoryEntry>(), 
>     (DirectoryEntry child) => { // long running code on each child });
> 
> ```
> 
> There is a subtle different between `.Cast<T>()` and `.OfType<T>()`
> 
> > The OfType(IEnumerable) method returns only those elements in source that can be cast to type TResult. To instead receive an exception if an element cannot be cast to type TResult, use Cast(IEnumerable).
> 
> \-- MSDN
> 
> This link [on the MSDN forums](http://social.msdn.microsoft.com/Forums/en-US/wpf/thread/05aa30b9-f0ef-4080-b76a-1a127afc0a9d/) got me going the right direction.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/13162741) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
