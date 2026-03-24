---
title: "newbie SQL Question regarding computed columns"
description: "My answer to \"newbie SQL Question regarding computed columns\" on Stack Overflow"
date: 2010-12-13
author:
  name: Nate Bross
tags:
  - sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4431472"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4431443):*

> I have a table with columns Q1 and Q2 say. I now want to define a view such that I have three columns in in Q1 Q2 and H1 such that each entry in H1 is the sum of corresponding entries Q1 and Q1
> 
> How can I do this as as SQL Query?
> 
> Thanks

*I posted the following answer:*

Something like

```
SELECT Q1, Q2, Q1 + Q2 as H1 FROM Table;

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4431472) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
