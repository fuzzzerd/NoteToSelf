---
title: "How do I change all empty strings to NULL in a table?"
description: "My answer to \"How do I change all empty strings to NULL in a table?\" on Stack Overflow"
date: 2010-07-13
author:
  name: Nate Bross
tags:
  - mysql
  - sql
  - string
  - sql-update
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3238337"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3238319):*

> I have a legacy table with about 100 columns (90% nullable). In those 90 columns I want to remove all empty strings and set them to null. I know I can:
> 
> ```
> update table set column = NULL where column = '';
> update table set column2 = NULL where column2 = '';
> 
> ```
> 
> But that is tedious and error prone. There has to be a way to do this on the whole table?

I think you'll need to pull each row into a language like C#, php, etc.

Something like:

```
rows = get-data()
foreach row in rows
    foreach col in row.cols
        if col == ''
            col = null
        end if
    next
next
save-data()

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I tend to gravitate away from SQL for this type of maintenance, since in most cases I end up needing to add more functionality over time, and I end up pulling it into a full OO language anyway. But thats a personal bias... ;)

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3238337) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
