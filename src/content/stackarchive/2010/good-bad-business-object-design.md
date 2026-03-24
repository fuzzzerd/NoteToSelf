---
title: "Good/Bad business object design?"
description: "My answer to \"Good/Bad business object design?\" on Stack Overflow"
date: 2010-11-24
author:
  name: Nate Bross
tags:
  - business-objects
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4268986"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4268960):*

> I have inherited a suite of business objects, which are working rather well. It looks as though it's based on the CSLA framework by [Rockford Lhotka](http://www.lhotka.net/), but there is one very annoying issue. When the business object does a load, it throws an exception. So, if it tries to load some data that isn't available in the database, you get an exception thrown. Is this good design?

*I posted the following answer, which received 2 upvotes:*

IMHO, Exceptions are for exceptional cases -- missing data is usually not exceptional, unless its on a primary key, or other non-null field.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4268986) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
