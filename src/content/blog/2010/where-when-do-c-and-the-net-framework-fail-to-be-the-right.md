---
title: "Where/When do C# and the .NET Framework fail to be the right tool?"
description: "A question I asked on Stack Overflow"
date: 2010-05-01
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - programming-languages
  - development-environment
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2748622"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2748622):*

In my non-programming life, I always attempt to use the appropriate tool for the job, and I feel that I do the same in my programming life, but I find that I am choosing C# and .NET for almost everything. I'm finding it hard to come up with (realistic business) needs that cannot be met by .NET and C#.

Obviously embedded systems might require something less bloated than the .NET Micro Framework, but I'm really looking for line of business type situations where .NET is not the best tool.

I'm primarly a C# and .NET guy since its what I'm the most comfortable in, but I know a fair amount of C++, php, VB, PowerShell, batch files, and Java, as well as being versed in the web technologes (JavaScript, HTML, and CSS). But I'm open minded about it my skill set and I'm looking for cases where C# and .NET **are not** the right tool for the job.

I choose .NET and C# because I'm comfortable with it, but I'm looking for cases where it isn't appropriate.

---

> [Robert Harvey answered](https://stackoverflow.com/a/2748626) (13 upvotes):
>
> C# and the .NET Framework might not be the best choice for a _hard real-time application._ Your application will hose on the first garbage collection, and real-time systems often have memory constraints that make the full-blown .NET framework unsuitable.
> 
> That said, there are ways around these problems, see here: [http://www.windowsfordevices.com/c/a/Windows-For-Devices-Articles/Adding-Realtime-to-Windows-Embedded/](http://www.windowsfordevices.com/c/a/Windows-For-Devices-Articles/Adding-Realtime-to-Windows-Embedded/)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2748622) — 12 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
