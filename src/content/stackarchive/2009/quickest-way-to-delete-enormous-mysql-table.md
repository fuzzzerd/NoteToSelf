---
title: "Quickest way to delete enormous MySQL table"
description: "My answer to \"Quickest way to delete enormous MySQL table\" on Stack Overflow"
date: 2009-05-18
author:
  name: Nate Bross
tags:
  - mysql
  - innodb
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/879338"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/879327):*

> I have an enormous MySQL (InnoDB) database with millions of rows in the sessions table that were created by an unrelated, malfunctioning crawler running on the same server as ours. Unfortunately, I have to fix the mess now.
> 
> If I try to `truncate table sessions;` it seems to take an inordinately long time (upwards of 30 minutes). I don't care about the data; I just want to have the table wiped out as quickly as possible. Is there a quicker way, or will I have to just stick it out overnight?

Couldn't you grab the schema drop the table and recreate it?

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): That is what I thought, apparently thats not the case; however, others are also saying to use drop -- there must be some difference in the way that truncate works.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/879338) — 10 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
