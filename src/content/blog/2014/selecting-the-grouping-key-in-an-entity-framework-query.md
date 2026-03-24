---
title: "Selecting the grouping Key in an Entity Framework query that groups by anonymous type ends up returning one key per grouped object"
description: "My answer to \"Selecting the grouping Key in an Entity Framework query that groups by anonymous type ends up returning one key per grouped object\" on Stack Overflow"
date: 2014-05-30
author:
  name: Nate Bross
tags:
  - c#
  - sql-server
  - linq
  - entity-framework
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23957110"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23944345):*

> I have this table
> 
> ```
> ID        Name        City    ... more columns
> ----------------------------------------------
> 1         Nate        Boston  ...
> 2         John        Boston  ...
> 2         John        Boston  ...
> 3         Sam         Austin  ...
> 
> ```
> 
> (for reasons beyond my control, ID is duplicated in some cases)
> 
> and I have an entity framework model setup for this, in general its working pretty well. I am having an issue while trying to get a unique list.
> 
> ```
> var result = db.table.GroupBy(t => new
>     {
>         ID = t.ID,
>         Name = t.Name,
>         City = t.City
>     }).Select(g => g.Key)
> 
> ```
> 
> Problem is, this query returns the following:
> 
> ```
> ID        Name        City    
> -----------------------------
> 1         Nate        Boston
> 2         John        Boston
> 2         John        Boston 
> 3         Sam         Austin
> 
> ```
> 
> I thought I was going crazy, so I fired up LinqPad, ran the same query and got my expected results:
> 
> ```
> ID        Name        City   
> -----------------------------
> 1         Nate        Boston
> 2         John        Boston
> 3         Sam         Austin
> 
> ```
> 
> I realized that with LinqPad I was connected to my database with Linq-To-SQL, not using the EntityFramework providers for LinqPad. When I connect LinqPad through my assembly, using EntityFramework, I get the same results as in my real project.
> 
> What am I missing that is causing Entity Framework and Linq-To-SQL to return different results for the same query and **how can I get the same results as Linq-To-SQL?**
> 
> _I should point out that in LinqPad, if I remove the `.Select(g => g.Key);` The results are displayed in the quick view as expected (Key is unique per grouping, and the 2, John, Boston record has two child elements)._
> 
> * * *
> 
> For reference, the generated SQL.
> 
> This is the generated SQL from Linq-To-SQL:
> 
> ```
> SELECT [t0].[ID], [t0].[Name], [t0].[City]
> FROM [Table] AS [t0]
> GROUP BY [t0].[ID], [t0].[Name], [t0].[City]
> 
> ```
> 
> This is the generated SQL from Entity Framework:
> 
> ```
> SELECT 
> 1 AS [C1], 
> [Extent1].[ID] AS [ID], 
> [Extent1].[Name] AS [Name], 
> [Extent1].[City] AS [City]
> FROM (SELECT 
> [Table].* -- I changed this to .* because EF code listed all column in table explicitly
> FROM [dbo].[Table] AS [Table]) AS [Extent1]
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

@Gusman lead me to the solution. To the EntityKey issue got me thinking that it must be an Entity Framework thing having something to do with the comparison of the ID going wrong since there are duplicates.

I re-wrote the query as follows, using Linq-To-Objects and I do get the expected results. The key here is to perform the `.GroupBy(...)` after the `.ToList()` so the values are compared in memory, where C# rules are used instead of database or entity framework comparison rules.

```
var result = db.table
.Select(t =>
{
    ID = t.ID,
    Name = t.Name,
    City = t.City
})        // project only used columns, to reduce data from db => web server
.ToList() // convert from Linq-To-Entities, to Linq-To-Objects
.GroupBy(t => new
{
    ID = t.ID,
    Name = t.Name,
    City = t.City
})
.Select(g => g.Key)

```

I'm presuming this is some sort of Entity Framework optimization (that Linq-To-SQL does not do) that in my case of duplicate IDs is back firing.

Since I needed to enumerate all returned data anyway, the `.ToList()` call is not so bad for me. My table is pretty wide though, so I performed the additional `.Select(t => new { ... })` to reduce the number of columns returned from the database server, since I wont benefit from lazy loading after the `.ToList()`.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Thanks man, your comments were really helpful and lead me to the solution.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23957110) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
