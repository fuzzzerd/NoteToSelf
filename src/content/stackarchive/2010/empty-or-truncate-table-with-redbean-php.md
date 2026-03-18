---
title: "Empty or truncate table with RedBean PHP?"
description: "My answer to \"Empty or truncate table with RedBean PHP?\" on Stack Overflow"
date: 2010-12-03
author:
  name: Nate Bross
tags:
  - php
  - sql
  - orm
  - redbean
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4348089"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4347970):*

> I'm using RedBean PHP for testing purposes and I like it very much, however I have no idea how I can truncate a table. I can fetch all the beans and delete them, but that seems cumbersome.

RedBean is just an ORM tool (AFAIK) so if your back-end database is SQL based, you can simply do an SQL statement like: `TRUNCATE TABLE yourTable;`

To execute queries directly via RedBean

## The Adapter

The adapter is the class that communicates with the database for RedBean. This adapter makes it possible to execute queries to manipulate the database. To get an instance of this adapter use:

```
$adapter = $toolbox->getDatabaseAdapter();

```

from [http://www.redbeanphp.com/downloads/redbean.pdf](http://www.redbeanphp.com/downloads/redbean.pdf) - 1.3 [http://www.redbeanphp.com/manual/manual.pdf](http://www.redbeanphp.com/manual/manual.pdf) - 2.0

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4348089) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
