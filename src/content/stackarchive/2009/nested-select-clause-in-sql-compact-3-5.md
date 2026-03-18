---
title: "Nested SELECT clause in SQL Compact 3.5"
description: "My answer to \"Nested SELECT clause in SQL Compact 3.5\" on Stack Overflow"
date: 2009-12-21
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - select
  - sql-server-ce
  - subquery
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1941650"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1941619):*

> In this post "[select with nested select](http://social.msdn.microsoft.com/Forums/en/sqlce/thread/ac926272-2382-4acb-84e3-fc32945c7cea)" I read that SQL Compact 3.5 (SP1) support nested SELECT clause. But my request not work:
> 
> _t1 - table 1 t2 - table 2 c1, c2 = columns_
> 
> ```
> select 
>  t1.c1, 
>  t1.c2, 
>  (select count(t2.c1) from t2 where t2.id = t1.id) as count_t 
> from 
>  t1 
> 
> ```
> 
> Does SQL Compact 3.5 SP1 support nested SELECT clause in this case?
> 
> Update:
> 
> SQL Compact 3.5 SP1 work with this type of nested request:
> 
> *   SELECT ... from ... where .. **IN (SELECT** ...)
> *   SELECT ... **from (SELECT** ...)

Maybe you need

`select * from LogMagazines where id = (select max id from UserRoles)`

?

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Maybe the post you cited is wrong, and only 3.5SP1 supports the sub-select queries?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1941650) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
