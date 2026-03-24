---
title: "Is there a good way to find the bottleneck in your app?"
description: "My answer to \"Is there a good way to find the bottleneck in your app?\" on Stack Overflow"
date: 2011-12-07
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/8419532"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/8419425):*

> I am trying to figure out what the best way would be for me to find out what portions of my application are taking the longest time to run (Largest run cost). The application is not overly complex, but I wanted to make ensure that I have all of the pieces properly tuned so that I could potentially handle a greater load.
> 
> Application: Loads / shreds xml documents and dumps the contents into a DB. The application is using Linq to XML to parse the xml, and SQL Server TVPs to pass the data down to the DB. Because I am using TVPs I have one round trip to the DB even when there are collections of data the data is not big (XML files at most 1MB).
> 
> Any suggestions on how to isolate the bottlenecks would be greatly appreciated.
> 
> As always greatly appreciate the feedback.

*I posted the following answer, which was chosen as the accepted answer and received 5 upvotes:*

You may want to check out the [StopWatch](http://msdn.microsoft.com/en-us/library/system.diagnostics.stopwatch.aspx) class. You can sprinkle it into your code like this:

```
// load XML Method
var stopWatch = new Stopwatch();
stopWatch.Start();
// run XML parsing code
stopWatch.Stop();

var xmlTime = stopWatch.Elapsed;


// SQL Server dump Method
var stopWatch = new Stopwatch();
stopWatch.Start();
// dump to SQL Server
stopWatch.Stop();

var sqlTime = stopWatch.Elapsed;

```

This is a low-tech way to take general measurments. For a simple application this is probably more efficient than a profiler, since your application only has two real points for a bottle neck. That said, learning how to use a profiler may be worth your while.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/8419532) — 5 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
