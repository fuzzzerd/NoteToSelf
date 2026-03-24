---
title: "What is the proper DateTime format to get &quot;both&quot; date and time in MySQL and C#"
description: "My answer to \"What is the proper DateTime format to get &quot;both&quot; date and time in MySQL and C#\" on Stack Overflow"
date: 2011-09-29
author:
  name: Nate Bross
tags:
  - c#
  - mysql
  - c#-2.0
  - datetime-format
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7592656"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7592610):*

> In a MySQL table, I need to have two fields "StartTime" and "EndTime". My requirements are:
> 
> 1.  If I do StartTime - EndTime, I need to get the time elapsed (when I subtract them I need to get time in seconds or minutes or whatever).
> 2.  From "StartTime" I need to get the date (the date when my object was started).
> 
> So my question is in what format (or what type) should the fields "StartTime" and "EndTime" be in my MySQL table to meet the above two conditions? Also to which format in C# should I be retrieving the value from MySQL table?

*I posted the following answer, which received 1 upvote:*

In c# you should use DateTime. I believe the mySQL equivalent is TimeStamp.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7592656) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
