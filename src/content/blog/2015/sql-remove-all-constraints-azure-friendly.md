---
title: "SQL Remove All Constraints Azure Friendly"
description: "My answer to \"SQL Remove All Constraints Azure Friendly\" on Stack Overflow"
date: 2015-04-24
author:
  name: Nate Bross
tags:
  - sql
  - t-sql
  - azure
  - azure-sql-database
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/29852069"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/29851302):*

> I'm doing some DB Admin with an Azure database and I need to perform queries like removing all constraints in the database.
> 
> sp\_MSForEachTable is not available when working with Azure databases, so I'm working on a different way to do it.
> 
> I found a snippet that drops all tables here: [http://edspencer.me.uk/2013/02/25/drop-all-tables-in-a-sql-server-database-azure-friendly/](http://edspencer.me.uk/2013/02/25/drop-all-tables-in-a-sql-server-database-azure-friendly/) and tried modifying it to remove all constraints like I need to and came up with this result:
> 
> ```
> while(exists(select 1 from INFORMATION_SCHEMA.TABLES where TABLE_NAME != '__MigrationHistory'))
> begin
>     PRINT ('Disabling' + TABLE_NAME)
>     declare @constraintOff nvarchar(2000)
>     SELECT TOP 1 @constraintOff=('ALTER TABLE ' + TABLE_SCHEMA + '.[' + TABLE_NAME + '] ' + 'NOCHECK CONSTRAINT all')
>     FROM INFORMATION_SCHEMA.TABLES
>     WHERE TABLE_NAME != '__MigrationHistory'
>     exec (@constraintOff)
>     PRINT @constraintOff
> end
> 
> ```
> 
> It repeatedly tries to operate on the first item in the database, which would work fine if you were dropping everything but I need to loop through each table and disable its constraint like sp\_MSForEachTable does.
> 
> Any tips? I've seen a few things here and there that claim to do this, but they're usually two or three page long scripts that do a lot of other stuff and they make my brain hurt.
> 
> UPDATE
> 
> still working on that query, it seems like something to this end might work better but still no dice:
> 
> ```
> declare @constraintOff nvarchar(2000)
> SELECT @constraintOff=('ALTER TABLE ' + TABLE_SCHEMA + '.[' + TABLE_NAME + '] ' + 'NOCHECK CONSTRAINT all')
> FROM INFORMATION_SCHEMA.TABLES
> exec (@constraintOff)
> PRINT @constraintOff
> 
> ```
> 
> This one still only operates on one table, but at least it's not an infinite loop :)

*I posted the following answer, which was chosen as the accepted answer and received 7 upvotes:*

While this link is for Amazon RDS, it does provide specific code to disable constraints without `sp_MSForEachTable`

[Importing and Exporting SQL Server Data](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Procedural.Importing.html%22Importing%20and%20Exporting%20SQL%20Server%20Data%22)

```
-- Manually specify database name - a safeguard in case you paste this into the wrong SSMS window.
USE [staging]

-- Change this line if you want to enable (1) or disable constraints:
DECLARE @enable_constraints bit = 0

--Don't change anything below this line.
DECLARE @schema_name SYSNAME
DECLARE @table_name  SYSNAME

DECLARE table_cursor CURSOR FOR
SELECT
    schemas.name,
    tables.name
FROM
    sys.tables
    INNER JOIN sys.schemas ON tables.schema_id = schemas.schema_id

OPEN table_cursor
FETCH NEXT FROM table_cursor INTO @schema_name, @table_name

DECLARE @cmd varchar(200) 
WHILE @@FETCH_STATUS = 0
BEGIN
    SET @cmd = 'ALTER TABLE ' + QUOTENAME(@schema_name) + '.' + QUOTENAME(@table_name) + ' '
    SET @cmd = @cmd + (CASE WHEN @enable_constraints = 1 THEN 'CHECK' ELSE 'NOCHECK' END) + ' CONSTRAINT ALL'

    PRINT @cmd
    EXEC( @cmd )

    FETCH NEXT FROM table_cursor INTO @schema_name, @table_name
END

CLOSE table_cursor
DEALLOCATE table_cursor

```

<details>
<summary>Notable comments</summary>

**tumtumtum** (4 upvotes): For disabling it should be `SELECT @cmd = 'ALTER TABLE '+QUOTENAME(@table_name)+' WITH NO CHECK CONSTRAINT ALL';` And for re-enabling it should be: `SELECT @cmd = 'ALTER TABLE '+QUOTENAME(@table_name)+' WITH CHECK CHECK CONSTRAINT ALL';`

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/29852069) — 7 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
