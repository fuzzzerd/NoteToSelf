---
title: "Specify type on SQL Server Computed Column"
description: "A question I asked on Database Administrators"
date: 2012-02-08
author:
  name: Nate Bross
tags:
  - sql-server
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/12512"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/12512):*

I have just added a computed column to a table, and it is showing up as an `int` and I'd like to make it a `bit` is this possible? I'm having a hard time finding any info on this. Below is the computed column:

```
IsActive  AS case when DateDecommissioned is null then 0 else 1 end PERSISTED 

```

---

> [JNK answered](https://dba.stackexchange.com/a/12513) (10 upvotes):
>
> You should be able to `CAST` to your preferred data type inside the `CASE`:
> 
> `...IS NULL THEN CAST(0 as BIT) ELSE CAST(1 as BIT) END`

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @MartinSmith Good to know. So I can drop the `PERSISTED` and it will not impact index performance?

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/12512) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
