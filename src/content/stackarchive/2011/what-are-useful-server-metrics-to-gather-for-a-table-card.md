---
title: "What are useful server metrics to gather for a table card game?"
description: "My answer to \"What are useful server metrics to gather for a table card game?\" on Game Development"
date: 2011-05-23
author:
  name: Nate Bross
tags:
  - server
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/12636"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/12617):*

> When building a game server intended to accomodate large numbers of simultanous games (e.g. table card games), where the server manages lots of tables and each table has up to a small handful of users, what metrics are most useful to collect and why?

*I posted the following answer, which received 1 upvote:*

Since you're already tracking the state change of the game for each move, I don't see what else you might monitor in relation to the "game" itself; however, many commonly tracked server metrics include:

*   CPU Load
*   Physical Memory Use
*   DISK IOPS
    *   Read Queue Length
    *   Write Queue Length
    *   Average Service Time
*   Network IO Use

Depending on your server platform there are different tools to monitor this data. The reason to monitor these, is because they directly impact performance and they are all finite resources on any given server. If you start maxing one of these out, you need do either, add more of that resource, re-write some of your application to work within the limits on your server.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/12636) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
