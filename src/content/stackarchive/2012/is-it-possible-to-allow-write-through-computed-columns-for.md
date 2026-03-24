---
title: "Is it possible to allow write-through computed columns for legacy code that expects a column to be read/write?"
description: "A question I asked on Database Administrators"
date: 2012-01-24
author:
  name: Nate Bross
tags:
  - sql-server
  - performance
  - database-tuning
  - scripting
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/11495"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/11495):*

I have this existing table for IP storage:

```
CREATE TABLE [dbo].[IPAddresses](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [IPv4Address] [varchar](15) NULL,
    [IPv6Address] [varchar](45) NULL,
 CONSTRAINT [PK_IPAddresses] PRIMARY KEY CLUSTERED 
(
    [ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY],
 CONSTRAINT [UniqueIPv4Address] UNIQUE NONCLUSTERED 
(
    [IPv4Address] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

```

I want to convert this table to use an integer (or several integers) to store this IP information. I would like to make `IPv4Address` and `IPv6Address` computed columns based on my new columns for storage.

The problem I'm facing is that I have some legacy clients hitting this database, who need to write directly '192.168.1.54' into my `IPv4Address` column. I would like the database to intecept this, do a conversion to integer, and store it in a new column on the table defined as `int`.

Is it possible to

*   Script a conversion of my existing table, converting all of my "string" IPs to their integer values and storing those in an int column, and making these "string" columns computed
*   **Allow legacy clients to "write" to these computed columns and intercept that data, convert it to an int, and store it transparently to legacy clients?**

I am fairly sure I can write a script to conver the data, but I don't want to waste my time if I cannot make this transparent to legacy clients of my database. So any guidance will go a long way.

---

> [Remus Rusanu answered](https://dba.stackexchange.com/a/11500) (3 upvotes):
>
> You can use [INSTEAD OF INSERT Triggers](http://msdn.microsoft.com/en-us/library/ms175089.aspx).

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @SQLKiwi No worries. I wish they had sproc support so I could make a sproc for them. At this point, they're mostly going to be viewing, so hopefully the overhead wont kill my server.

**Nate** (0 upvotes): @SQLKiwi, I'm well aware of that; sadly, these clients are black-box and have no support for stored procedures, or any column types besides number/text/datetime.

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/11495) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
