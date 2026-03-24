---
title: "Insert 4 tinyint values into varbinary(4)"
description: "A question I asked on Database Administrators"
date: 2012-01-26
author:
  name: Nate Bross
tags:
  - sql-server
  - sql-server-2008-r2
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/11737"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/11737):*

I'm working on a function to convert the string representation of an IP into its varbinary(4/16) form.

Right now, I have this:

```
@stringIP = '192.168.0.3'
select 
    CAST(PARSENAME(@stringIP, 4) as tinyint),
    CAST(PARSENAME(@stringIP, 3) as tinyint),
    CAST(PARSENAME(@stringIP, 2) as tinyint),
    CAST(PARSENAME(@stringIP, 1) as tinyint)

```

This breaks up my IPv4 Address very well; but I need to figure out how to insert it into a varbinary(4) so I can insert the data to my table. I cannot find ANY TSQL syntax to combine these four `tinyint`s into a `varbinary(4)` -- I can only find C#/VB examples using paramterized SQL. This is fine and good, but I'm trying to create an SQL Function do use in an INSTEAD OF INSERT trigger.

---

> [GSerg answered](https://dba.stackexchange.com/a/11738) (2 upvotes):
>
> ```
> @stringIP = '192.168.0.3'
> select 
>     cast(CAST(PARSENAME(@stringIP, 4) as tinyint) as varbinary(1)) +
>     cast(CAST(PARSENAME(@stringIP, 3) as tinyint) as varbinary(1)) +
>     cast(CAST(PARSENAME(@stringIP, 2) as tinyint) as varbinary(1)) +
>     cast(CAST(PARSENAME(@stringIP, 1) as tinyint) as varbinary(1))
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I am open to other/better ways to parse the IP as well, but I've found a few examples using `PARSENAME` for IPv4 and it seems to work well...

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/11737) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
