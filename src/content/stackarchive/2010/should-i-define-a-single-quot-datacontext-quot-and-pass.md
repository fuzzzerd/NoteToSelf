---
title: "Should I define a single &quot;DataContext&quot; and pass references to it around or define muliple &quot;DataContext&quot; where ever I end up needing them?"
description: "A question I asked on Stack Overflow"
date: 2010-06-09
author:
  name: Nate Bross
tags:
  - .net
  - wcf
  - silverlight
  - wcf-data-services
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3007418"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3007418):*

I have a Silverlight application that consists of a MainWindow and several classes which update and draw images on the MainWindow. I'm now expanding this to keep track of everything in a database.

Without going into specifics, lets say I have a structure like this:

```
MainWindow
  Drawing-Surface
    Class1 -- Supports Drawing
      DataContext + DataServiceCollection<T> w/events
    Class2 -- Manages "transactions" (add/delete objects from drawing)
    Class3

```

Each "Class" is passed a reference to the Drawing Surface so they can interact with it independently.

I'm starting to use WCF Data Services in Class1 and its working well; however, the other classes are also going to need access to the WCF Data Services. (Should I define my "DataContext" in MainWindow and pass a reference to each child class?)

Class1 will need READ access to the "transactions" data, and Class2 will need READ access to some of the drawing data. So my question is, where does it make the most sense to define my DataContext?

Does it make sense to:

1.  Define a "global" WCF Data Service "Context" object and pass references to that in all of my subsequent classes?
2.  Define an instance of the "Context" for each Class1, Class2, etc
3.  Have each method that requires access to data define its own instance of the "Context" and use closures handle the async load/complete events?

Would a structure like this make more sense? Is there any danger in keeping an active "DataContext" open for an extended period of time? Typical usecase of this application could range from 1 minute to 40+ minutes.

```
MainWindow
  Drawing-Surface
  DataContext
    Class1 -- Supports Drawing
      DataServiceCollection<DrawingType> w/events
    Class2 -- Manages "transactions" (add/delete objects from drawing)
      DataServiceCollection<TransactionType> w/events
    Class3
      DataServiceCollection<T> w/events

```

---

> [Vitek Karas MSFT answered](https://stackoverflow.com/a/3061322) (1 upvotes):
>
> In general you should not keep the context around for too long. The context holds references to all entities you get from it (unless you turn off change tracking) and thus if you hold on to it you're also holding all the entities in memory. If your access is read-only then I would really only consider the lifetime of the entities (and the memory consumption related to it). If your access is read-write then if you have two contexts and make changes to some entity from one, the other will not see it. So you probably want a single context in that case. But the lifetime issues still apply.
> 
> So if you know you're not going to use lot of different entities I would use just one context for simplicity (and it allows you to share instances). If you know you're going to use lot of entities, then I would think about droping the context once in a while (in some logical place in your application).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3007418) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
