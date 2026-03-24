---
title: "SELECT COUNT(*) on a view is orders of magnitude slower than SELECT * on the same view"
description: "A question I asked on Database Administrators"
date: 2017-08-14
author:
  name: Nate Bross
tags:
  - performance
  - view
  - azure-sql-database
  - query-performance
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/183486"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/183486):*

**The View**

```
CREATE VIEW [dbo].[vProductList]
WITH SCHEMABINDING
AS 

SELECT
     p.[Id]
    ,p.[Name]
    ,price.[Value] as CalculatedPrice
    ,orders.[Value] as OrdersWithThisProduct
FROM 
    products as p 
    INNER JOIN productMetadata as price ON p.Id = price.ProductId AND price.MetaId = 1
    INNER JOIN productMetadata as orders ON p.Id = orders.ProductId AND orders.MetaId = 2

```

For the sake of simplicity, assume that `productMetadata` has columns `ProductId, MetaId, Value` has ~87m rows, and there are about 400k rows in the `products` table.

**General queries** against this view work perfectly:

```
SELECT * FROM vProductList WHERE CalculatedPrice > 500

```

Query results in 2-4 seconds (over a vpn and remote, so I'm good with that).

Changing the above to a count is equally fast:

```
SELECT COUNT(*) from vProductList WHERE CalculatedPrice > 500

```

runs in about the same time as the raw select, which again I'm OK with. There are roughly 10k products meeting this criteria.

I've run into two separate instances where things get really odd and take FOREVER.

### First

Doing a query against one of the columns from the base table in the view:

```
SELECT * FROM vProductList WHERE Name = 'Hammer' 

```

This query takes a little while to run (20-30 seconds) and returns ~30k results; however, a slight change to said query:

```
SELECT COUNT(*) FROM vProductList WHERE Name = 'Hammer' 

```

takes thirteen MINUTES to return a count stating ~30k .

### Second

Doing a `WHERE IN` subquery

```
SELECT * FROM vProductList WHERE Id IN (SELECT ProductId FROM TableThatHasFKToProductId and ColumnInTable = 'Yes')

```

This query returns ~300k rows and takes two minutes to return (much of that time is simply spent downloading the data into SSMS I believe); however, changing that to a `SELECT COUNT(*)` results in a query that takes twenty minutes.

```
SELECT COUNT(*) FROM vProductList WHERE Id IN (SELECT ProductId FROM TableThatHasFKToProductId and ColumnInTable = 'Yes')

```

Why is it that `SELECT *` is faster than `SELECT COUNT`?

I am using the Total Execution Time provided by SSMS for all timings listed here.

### Execution plans

> [Plan for `SELECT 1 FROM v WHERE IN (...)`](https://gist.github.com/fuzzzerd/992cae89916937144f464a25cac564ed)
> 
> [Plan for `SELECT COUNT(0) FROM v WHERE IN (...)`](https://gist.github.com/fuzzzerd/ca9bbdcf83d28f9d7abcdbc689d48b65)

_Note: I tried using PasteThePlan but it kept telling my the plan was invalid xml._

---

> [Paul White answered](https://dba.stackexchange.com/a/183692) (6 upvotes):
>
> From the execution plans provided, for the `COUNT` case the optimizer chooses a [local/global](https://blogs.msdn.microsoft.com/craigfr/2008/01/18/partial-aggregation/) aggregation strategy around the final join:
> 
> [![Final join](https://i.sstatic.net/9bJKr.png)](https://i.sstatic.net/9bJKr.png)
> 
> Unfortunately, the optimizer overestimates the effectiveness of the local aggregation. It estimates 136 rows driving the Nested Loops join, whereas 366,115 are encountered at runtime.
> 
> [![Estimates](https://i.sstatic.net/E1aoi.png)](https://i.sstatic.net/E1aoi.png)
> 
> The 366,115 index lookups might not be too much of an issue for a local SQL Server instance, but the wait stats included in the plan show the I/O (and possibly memory) limitations of your current Azure SQL Database configuration:
> 
> [![Wait stats](https://i.sstatic.net/92xzC.png)](https://i.sstatic.net/92xzC.png)
> 
> The plan for `SELECT 1` shows an exclusively hash and merge join strategy, which produces better results in this case with the very limited memory and/or I/O capabilities.
> 
> You might well see better performance for the first query with an `OPTION (HASH JOIN, MERGE JOIN)` hint, but the fundamental issue is the poor cardinality/data distribution estimate driven by the large number of joins.
> 
> Don't be misled by the cost percentages shown against each plan operator - these numbers are currently derived from the optimizer's _estimate_ of cost (using an abstract model). The numbers do not reflect runtime conditions or costs.
> 
> Large deviations between estimated and actual row counts can often lead to problems. This is especially true for an underestimate that causes the optimizer to choose a strategy that does not scale up well on a particular hardware setup.

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/183486) — 11 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
