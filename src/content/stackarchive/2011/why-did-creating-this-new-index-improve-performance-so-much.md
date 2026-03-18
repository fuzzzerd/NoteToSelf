---
title: "Why did creating this new index improve performance so much when existing index included all columns in new index?"
description: "A question I asked on Stack Overflow"
date: 2011-12-19
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - database
  - t-sql
  - indexing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/8565461"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/8565461):*

I have Log and LogItem tables; I'm writing a query to grab some data from both. There are thousands of `Logs` and each `Log` can have up to 125 `LogItems`

The query in question is complicated so I'm skipping it (if someone thinks it's important I can probably post it), but when I ran SSMS Estimated Query plan, it told me a new Non-Clustered index would improve performance up to 100%.

```
Existing Index: Non-clustered
Key Colums (LogItem): ParentLogID, DateModified, Name, DatabaseModified

Query Plan Recommendation
CREATE NONCLUSTERED INDEX [LogReportIndex]
ON [dbo].[LogItem] ([ParentLogID],[DatabaseModified])

```

Just for fun, I created this new index and ran the query and much to my surprise, it now takes ~1 second for my query to run, when before it was 10+ seconds.

I assumed that my existing index would cover this new query, so my question is why did creating a new index on the only columns used in my new query improve performance? Should I have an index for each unique combination of columns used in my `where` clauses?

_note: I don't think this is because the SQL Server is caching my results, I ran the query about 25-30 times before I created the index and it consistantly took 10-15 seconds, after the index it is now consistantly ~1 or less._

---

> [GSerg answered](https://stackoverflow.com/a/8565544) (6 upvotes):
>
> Order of columns in an index is important. If filtering requires column 1 and 4 from index, the index is not going to help. It's only useful when filtering by the first N consecutive columns.
> 
> This is because index is a tree. You can't efficiently select all nodes of the tree where `column3 = something`, because they are scattered all other the place, belonging to different values of `column1` and `column2`. But if you know `column1` and `column2` as well, locating the right branch in the tree is a no brainer.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @JeffO This is what SSMS said: "The Query Processor estimates that implementing the following index could improve the query cost by 100%."

**Nate** (0 upvotes): @Shark Good question, I'm not sure. This is my first performance debugging situation. I'll be sure to grab that going forward. All it said was 'Missing index' and it said which fields.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/8565461) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
