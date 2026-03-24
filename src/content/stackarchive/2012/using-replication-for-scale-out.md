---
title: "Using Replication for Scale-Out"
description: "My answer to \"Using Replication for Scale-Out\" on Database Administrators"
date: 2012-01-24
author:
  name: Nate Bross
tags:
  - mysql
  - replication
  - scalability
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/a/11498"
---

*Someone [asked on Database Administrators](https://dba.stackexchange.com/q/11443):*

> Having read [Using Replication for Scale-Out](http://dev.mysql.com/doc/refman/5.0/en/replication-solutions-scaleout.html), how can I route different queries to different servers, for example, `SELECT`I want to route to slaves and `NON-SELECT` to master. I assume as loadbalancer I can use **haproxy**, but I didn't find it's possible to distict between queries on the level of **haproxy**? In addition, let's say someone have reached master directly, how can master identify that this is `SELECT` query and show be sent to slave, or to loadbalancer.

*I posted the following answer, which received 2 upvotes:*

I'm not aware of any proxy software to do this for you. haproxy is an HTTP level proxy, this will not have any impact on your database. You will need to implement this as part of the business logic of your web application.

At the heart of your persistance layer, you should be able to intercept these calls and "route" them to the appropriate database based on the type of transaction being executed. For example, `SELECT` queries could be sent to your read-only servers, but `UPDATE/INSRET/DELETE` queries would be sent ot the master server.

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/a/11498) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
