---
title: "Where to put use activity logging function"
description: "My answer to \"Where to put use activity logging function\" on Stack Overflow"
date: 2011-02-02
author:
  name: Nate Bross
tags:
  - sql
  - .net
  - logging
  - user-tracking
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4876742"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4876726):*

> I have a function for our intranet application which will log user navigation and activity. I want to track users and need to run this function on every single page. We cant use any Google Analytics or other tools as this is intranet app and people wont have access online.
> 
> What would be the best way to perform this?
> 
> Should be create BasePage or put the code into the Masterpages? Other options?
> 
> Basically we need to check if user has session and then track his activity, both functions should be run on every single page.
> 
> **edit**
> 
> I forgot to mention that we need to view logs and activity online using our system. We will track user, their actions, activity and possible problems.

Both options you mention should work, if you're doing new dev, I might go for the inherited page route -- if you're tacking this on to an existing system, I might just drop it in the master page and be done with it.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4876742) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
