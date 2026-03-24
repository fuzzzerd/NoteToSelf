---
title: "Is it possible to increase query performance on a narrow table with millions of rows?"
description: "A question I asked on Database Administrators"
date: 2012-08-30
author:
  name: Nate Bross
tags:
  - sql-server
  - optimization
  - performance
  - query-performance
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/23465"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/23465):*

I have a query that is currently taking an average of 2500ms to complete. My table is very narrow, but there are 44 million rows. What options do I have to improve performance, or is this as good as it gets?

**The Query**

```
SELECT TOP 1000 * FROM [CIA_WIZ].[dbo].[Heartbeats]
WHERE [DateEntered] BETWEEN '2011-08-30' and '2011-08-31'; 

```

**The Table**

```
CREATE TABLE [dbo].[Heartbeats](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [DeviceID] [int] NOT NULL,
    [IsPUp] [bit] NOT NULL,
    [IsWebUp] [bit] NOT NULL,
    [IsPingUp] [bit] NOT NULL,
    [DateEntered] [datetime] NOT NULL,
 CONSTRAINT [PK_Heartbeats] PRIMARY KEY CLUSTERED 
(
    [ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

```

**The Index**

```
CREATE NONCLUSTERED INDEX [CommonQueryIndex] ON [dbo].[Heartbeats] 
(
    [DateEntered] ASC,
    [DeviceID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]

```

Would adding additional indexes help? If so, what would they look like? The current performance is acceptable, because the query is only run occasionally, but I'm wondering as a learning exercise, is there anything I can do to make this faster?

**UPDATE**

When I change the query to use a force index hint, the query executes in 50ms:

```
SELECT TOP 1000 * FROM [CIA_WIZ].[dbo].[Heartbeats] WITH(INDEX(CommonQueryIndex))
WHERE [DateEntered] BETWEEN '2011-08-30' and '2011-08-31' 

```

Adding a correctly selective DeviceID clause also hits the 50ms range:

```
SELECT TOP 1000 * FROM [CIA_WIZ].[dbo].[Heartbeats]
WHERE [DateEntered] BETWEEN '2011-08-30' and '2011-08-31' AND DeviceID = 4;

```

If I add `ORDER BY [DateEntered], [DeviceID]` to the original query, I am in the 50ms range:

```
SELECT TOP 1000 * FROM [CIA_WIZ].[dbo].[Heartbeats]
WHERE [DateEntered] BETWEEN '2011-08-30' and '2011-08-31' 
ORDER BY [DateEntered], [DeviceID];

```

These all use the index I was expecting (CommonQueryIndex) so, I suppose my question is now, is there a way to force this index to be used on queries like this? Or is the size of my table throwing off the optimizer too much and I must just use an `ORDER BY` or a hint?

---

> [Edward Dortland answered](https://dba.stackexchange.com/a/23470) (15 upvotes):
>
> Why the the optimiser doesn't go for your your first index:
> 
> ```
> CREATE NONCLUSTERED INDEX [CommonQueryIndex] ON [dbo].[Heartbeats] 
> (
>     [DateEntered] ASC,
>     [DeviceID] ASC
> )WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
> 
> ```
> 
> Is a matter of selectivity of the \[DateEntered\] Column.
> 
> You told us that your table has 44 million rows. the row size is:
> 
> 4 bytes, for the ID, 4 bytes for the Device ID, 8 bytes for the date, and 1 byte for the 4 bit columns. that's 17 bytes + 7 bytes overhead for (tags, Null bitmap, var col offset,,col count) totals 24 Bytes per row.
> 
> That would rougly translate to 140k pages. To store those 44 million rows.
> 
> Now the optimiser can do two things:
> 
> 1.  It could scan the table (clustered index scan)
> 2.  Or it could use your index. For every row in your index, it would then need to do a bookmark lookup in the clustered index.
> 
> Now at a certain point it just becomes more expensive to do all these single lookups in the clustered index for every index entry found in your non clustered index. The threshold for that is generally the total count of lookups should exceed 25% tot 33% of the total table page count.
> 
> So in this case: 140k/25%=35000 rows 140k/33%=46666 rows.
> 
> (@RBarryYoung, 35k is 0.08% of the total rows and 46666 is 0.10 %, so I think that is where the confusion was)
> 
> So if your where clause will result in somewhere between 35000 and 46666 rows.(this is underneath the top clause!) It's very likely that your non clustered will not be used and that the clustered index scan will be used.
> 
> The only two ways to change this are:
> 
> 1.  Make your where clause more selective. (if possible)
> 2.  Drop the \* and select only a few columns so you can use a covering index.
> 
> now sure you could create a covering index even when you use a select \*. Hoever that just creates a massive overhead for your inserts/updates/deletes. We would have to know more about your work load (read vs write) to make sure if that's the best solution.
> 
> Changing from datetime to smalldatetime is a 16% reducion in size on clustered index and a 24% reduction in size on your non clustered index.

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/23465) — 16 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
