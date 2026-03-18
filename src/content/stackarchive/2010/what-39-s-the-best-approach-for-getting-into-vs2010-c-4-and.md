---
title: "What&#39;s the best approach for getting into VS2010, C# 4, and WPF if my background is in C++/MFC"
description: "My answer to \"What&#39;s the best approach for getting into VS2010, C# 4, and WPF if my background is in C++/MFC\" on Stack Overflow"
date: 2010-06-11
author:
  name: Nate Bross
tags:
  - wpf
  - mfc
  - c#-4.0
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3026374"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3026342):*

> All my past programming experience has been in C++ on VS2003/8, Mostly service based and completely self taught.
> 
> 2 Years ago I had to create my first real GUI app and (Foolishly) choose MFC. I got the app working but it took a long time & was a bit of a nightmare to learn MCF (and its many shortcomings) but I ended up with a reliable workable app which was difficult to change or extend.
> 
> Again I have to create another GUI app more complex than the first and again this will be created from scratch and will only ever be used on windows.
> 
> I had put off learning C# for a long time but not wishing to re-visit MFC have decided that the new application with be birthed in VS2010 and WPF 4 will be the midwife.
> 
> Trying to avoid the several expensive (Time wise) mistakes I made previously. Im looking for for good books/tutorials on the **current** versions of C# 4 & WPF 4 and also general advice on the best approach.
> 
> The application will do several things one of them would persisting info in a SQL DB. So Im thinking LINQ for that?
> 
> Please chip in...

I would recommed the following:

Business Layer:

*   C# -- If you are comfy with C++ the transition shouldn't be too bad
*   Best features to learn, IMO
    *   [Linq syntax](http://msdn.microsoft.com/en-us/library/bb397947.aspx)
    *   [System.Linq namespace](http://msdn.microsoft.com/en-us/library/system.linq.aspx)
    *   [Lambdas](http://msdn.microsoft.com/en-us/library/bb397687.aspx)
    *   [Generics](http://msdn.microsoft.com/en-us/library/512aeb7t\(VS.80\).aspx)

Presentation Layer:

*   WPF 4 (or 3.0/3.5) and learn M-V-VM (I'm still learning it myself)

Persistance Layer:

*   [Linq-To-SQL](http://msdn.microsoft.com/en-us/library/bb399398.aspx)
    *   Look into [WCF Data Services](http://msdn.microsoft.com/en-us/data/ee720180.aspx) if you may need additional interfaces to the data later
    *   The more I use them, the more I absolutly love them

@Xorty makes a great point -- much of the stuff available in .net 3.5 is very much the same as in .net 4. Much of the tutorials and books are worth checking out even though they are geared toward older framework versions.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3026374) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
