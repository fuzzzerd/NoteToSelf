---
title: "How to correctly refactor a control&#39;s namespace in ASP.NET"
description: "My answer to \"How to correctly refactor a control&#39;s namespace in ASP.NET\" on Stack Overflow"
date: 2010-06-11
author:
  name: Nate Bross
tags:
  - asp.net
  - refactoring
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3025430"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3025173):*

> I have this situation which is rather frustrating... I have some user controls where I would like to rename their namespace. However, when I do this my build fails because the .designer.cs file for pages that use the controls is still generating control declarations with the OLD namespace. Is this coming from the assembly? I can't rebuild because this is obviously creating a compile-time error (those controls no longer exist in the old name). I've tried wiping out the entire file, but it is always regenerated with the old namespace.
> 
> How do I get around this without manually editing every .designer.cs file???

*I posted the following answer, which was chosen as the accepted answer:*

In the past I have used these steps with some success, but I've also had to monkey around a lot, so I maybe missing some steps. (its been a while since I had to deal with this issue)

1.  Close Visual Studio
2.  Delete all designer.cs files (backup just in case ;))
3.  Fire up Visual Studio again and try a rebuild

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3025430) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
