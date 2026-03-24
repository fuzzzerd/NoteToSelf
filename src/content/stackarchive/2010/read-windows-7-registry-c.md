---
title: "Read Windows 7 Registry c#"
description: "My answer to \"Read Windows 7 Registry c#\" on Stack Overflow"
date: 2010-11-03
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4090328"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4090304):*

> Need to obtain following path from the registry:
> 
> %userprofile%

*I posted the following answer, which received 5 upvotes:*

In C#, you can use this:

`Environment.GetFolderPath (Environment.SpecialFolder.UserProfile)`

to load up the path to the current user's profile.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4090328) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
