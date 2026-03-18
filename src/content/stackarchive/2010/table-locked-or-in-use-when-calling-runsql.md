---
title: "table locked or in use when calling RunSQL"
description: "My answer to \"table locked or in use when calling RunSQL\" on Stack Overflow"
date: 2010-10-27
author:
  name: Nate Bross
tags:
  - ms-access
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4034925"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4034881):*

> I have some code which re-arranges some items on a form, but only one SQL query. All my tables aren't locked before the code runs but for some reason I get an error when running:
> 
> ```
> DoCmd.RunSQL ("Select * Into MasterTable From Year07 Where 'ClassName' = '7A'")
> 
> ```
> 
> Error:
> 
> > The database engine could not lock table because it is already in use by another person or process. (Error 3211) To complete this operation, a table currently in use by another user must be locked. Wait for the other user to finish working with the table, and then try the operation again.
> 
> Any ideas what I can do to stop the table being locked?

I have seen this when you re-open a database after Access has crashed. Typically for me a reboot has fixed this.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4034925) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
