---
title: "SQL Database and ArcSDE Database"
description: "My answer to \"SQL Database and ArcSDE Database\" on Server Fault"
date: 2010-08-11
author:
  name: Nate Bross
tags:
  - sql-server
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/169428"
---

*Someone [asked on Server Fault](https://serverfault.com/q/169425):*

> Is it possible to have sql database and ArcSDE database running on the same server - virtual machine? What are the benefits? What are the negatives?

*I posted the following answer:*

As long as they are both `.mdf` files there shouldn't be any issue. Althought, ArcSDE is middle-ware, so you never query the SQL server directly, only through ArcSDE. (I might be wrong on that, you could also check out gis.stackexchange.com)

---
*Originally posted on [Server Fault](https://serverfault.com/a/169428) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
