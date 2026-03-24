---
title: "expanding a C# console app to a WPF app"
description: "My answer to \"expanding a C# console app to a WPF app\" on Stack Overflow"
date: 2010-04-15
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - console-application
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2646706"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2646649):*

> What's the best way to convert a simple console application to a WPF? and I am a COMPLETE newb so be gentle!! The console app displays information according to user choices.. real simple stuff, but I'd like to create a GUI for it in WPF.. and am looking for initial steps on how to go about it.

*I posted the following answer, which received 1 upvote:*

[This](http://ejadib.wordpress.com/2006/12/14/windows-presentation-foundation-wpf-hello-world/), and [this](http://www.microsoft.com/uk/msdn/nuggets/nugget/68/Hello-World-Introduction-to-WPF.aspx) (video) might be worth checking out. They will get you started with building a WPF app, you'll need to figure out how to port your existing interface to WPF though, which might not be very straight forward because there is a large shift in building a console app (Console.WriteLine/Console.Read) and a GUI app with GUI objects with events and display properties.

I recommend jumping in with the links above and positing additional questions here when you get stuck.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2646706) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
