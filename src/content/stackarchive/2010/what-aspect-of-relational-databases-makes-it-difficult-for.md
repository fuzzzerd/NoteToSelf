---
title: "What aspect of relational databases makes it difficult for them to scale sufficiently on services like Google App Engine?"
description: "My answer to \"What aspect of relational databases makes it difficult for them to scale sufficiently on services like Google App Engine?\" on Stack Overflow"
date: 2010-01-30
author:
  name: Nate Bross
tags:
  - database
  - google-app-engine
  - scalability
  - relational-database
  - bigtable
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2167117"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2166956):*

> Apparently the reason for the BigTable architecture has to do with the difficulty scaling relational databases when you're dealing with the massive number of servers that Google has to deal with.
> 
> But technically speaking what exactly makes it difficult for relational databases to scale?
> 
> In the enterprise data centers of large corporations they seem to be able to do this successfully so I'm wondering why it's not possible to simply do this at a greater order of magnitude in order for it to scale on Google's servers.

*I posted the following answer:*

The main reason as stated is physical location and network IO. Additionally, even large corporations deal with a fraction of the data that search engines deal with.

Think about the index on a standard database, maybe a few feilds... search engines need fast text search, on large text fields.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2167117) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
