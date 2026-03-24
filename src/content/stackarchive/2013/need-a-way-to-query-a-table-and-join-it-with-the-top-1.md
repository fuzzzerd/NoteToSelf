---
title: "Need a way to query a table, and JOIN it with the TOP 1 related record from an other table"
description: "A question I asked on Database Administrators"
date: 2013-03-05
author:
  name: Nate Bross
tags:
  - sql-server
  - sql-server-2008
  - t-sql
  - select
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/35988"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/35988):*

As a follow up to [this question](https://dba.stackexchange.com/questions/35932/why-do-i-need-to-use-a-sub-query-to-filter-down-a-grouped-select), I'm wondering if there is a better and/or more efficient way to gather the data in question.

As stated, this query does return me 95% of the data I need --

```
SELECT dv.Name
      ,MAX(hb.[DateEntered]) as DE
FROM 
    [Devices] as dv
    INNER JOIN 
    [Heartbeats] as hb ON hb.DeviceID = dv.ID
GROUP BY dv.Name
HAVING MAX(hb.[DateEntered]) < '20130304';

```

Is there a way to achieve a the same result (for each Device, select the TOP Heartbeat ordered DESC by DateEntered) but also select the **_entire row_** from the `[Heartbeats]` table? Right now, I only get the `DateTime` for that row.

If I include the additional columns in the `GROUP BY` clause, I can then add them to the select; but then I get multiple rows per `[Devices]` row which I don't want. It sounds odd, but what I basically want to do is do a query against `[Devices]` and then do a `for...each` over that set and add the top `[Heartbeats]` row for that `[Devices]` row. Is that possible?

**update** This is the structure of the Heartbeats table:

```
CREATE TABLE [dbo].[Heartbeats](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [DeviceID] [int] NOT NULL,
    [IsFMSFMPUp] [bit] NOT NULL,
    [IsFMSWebUp] [bit] NOT NULL,
    [IsPingUp] [bit] NOT NULL,
    [DateEntered] [datetime] NOT NULL,
 CONSTRAINT [PK_Heartbeats] PRIMARY KEY CLUSTERED 
(
    [ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [CommonQueryIndex] ON [dbo].[Heartbeats] 
(
    [DateEntered] ASC,
    [DeviceID] ASC
)
INCLUDE ( [ID],
[IsFMSFMPUp],
[IsFMSWebUp],
[IsPingUp]) WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [HeartbeatDeviceIndex] ON [dbo].[Heartbeats] 
(
    [DeviceID] ASC
)
INCLUDE ( [ID]) WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
GO
/****** Object:  Default [DF_Heartbeats_DateEntered]    Script Date: 03/05/2013 10:45:45 ******/
ALTER TABLE [dbo].[Heartbeats] ADD  CONSTRAINT [DF_Heartbeats_DateEntered]  DEFAULT (getdate()) FOR [DateEntered]
GO
/****** Object:  ForeignKey [FK_Heartbeats_Devices]    Script Date: 03/05/2013 10:45:45 ******/
ALTER TABLE [dbo].[Heartbeats]  WITH CHECK ADD  CONSTRAINT [FK_Heartbeats_Devices] FOREIGN KEY([DeviceID])
REFERENCES [dbo].[Devices] ([ID])
GO
ALTER TABLE [dbo].[Heartbeats] CHECK CONSTRAINT [FK_Heartbeats_Devices]
GO

```

---

> [db2 answered](https://dba.stackexchange.com/a/35991) (6 upvotes):
>
> You can do this pretty easily with `OUTER APPLY` (if you're on 2005 or newer). Note that there may be better performing ways of achieving the result, such as using `ROW_NUMBER()` - check execution plans if in doubt. Also, `SELECT *` is lazy and inadvisable; I'm just doing it here for illustrative purposes, and because I don't know the real structure of the Heartbeats table.
> 
> ```
> SELECT
>     dv.Name,
>     hb.*
> FROM [Devices] as dv
>     OUTER APPLY (
>         SELECT TOP 1 *
>         FROM Heartbeats
>         WHERE Heartbeats.DeviceID = dv.ID
>         ORDER BY DateEntered DESC
>     ) hb
> WHERE ISNULL(hb.DateEntered, '1900-01-01T00:00') < '2013-03-04T00:00'
> 
> ```
> 
> See Books Online for the finer points of `OUTER APPLY` vs. `CROSS APPLY` (it's much like `OUTER JOIN` vs. `INNER JOIN`). It was always such a pain doing queries like this in SQL Server 2000 where you didn't have `OUTER/CROSS APPLY` _or_ the `ROW_NUMBER()` function.

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/35988) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
