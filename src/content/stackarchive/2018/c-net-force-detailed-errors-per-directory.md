---
title: "C# .Net Force Detailed Errors per Directory"
description: "My answer to \"C# .Net Force Detailed Errors per Directory\" on Stack Overflow"
date: 2018-08-22
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - .net
  - visual-studio
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/51973493"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/51972988):*

> Wondering if it's possible to override web.config custom errors on a per directory basis. I'm thinking not, but thought I'd ask.
> 
> Thanks,
> 
> Mark

*I posted the following answer:*

The most straight forward way would be to create the web config for each directory explicitly. They should 'roll up' from `MachineConfig` all the way to your lowest level directory.

Another post here on SO demonstrates how you might do this programmatically: [https://stackoverflow.com/a/2260335/86860](https://stackoverflow.com/a/2260335/86860)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/51973493) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
