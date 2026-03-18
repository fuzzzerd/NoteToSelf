---
title: "How does one deal with multiple TimeZones in applications that store dates and times?"
description: "A question I asked on Stack Overflow"
date: 2010-07-08
author:
  name: Nate Bross
tags:
  - mysql
  - sql-server
  - oracle-database
  - database-design
  - timezone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3207976"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3207976):*

I realize this is a bit subjective, but I'm hoping to pick everyones brain here on how they deal with multiple timezones? There are a variety of similar questions here and an equally wide variety of accepted answers.

How have _you_ delt with this in apps you've built, and what issues did you have to overcome?

---

> [kubal5003 answered](https://stackoverflow.com/a/3208020) (14 upvotes):
>
> You always store date/time in one time zone(9 out of 10 it is London time) and convert it on display to the timezone of your user. This is strictly application level issue not the db.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3207976) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
