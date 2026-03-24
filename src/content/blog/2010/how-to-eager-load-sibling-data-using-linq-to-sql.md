---
title: "How to eager load sibling data using LINQ to SQL?"
description: "My answer to \"How to eager load sibling data using LINQ to SQL?\" on Stack Overflow"
date: 2010-03-30
author:
  name: Nate Bross
tags:
  - linq
  - linq-to-sql
  - eager-loading
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2546366"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2546233):*

> The goal is to issue the _fewest queries_ to SQL Server using LINQ to SQL without using anonymous types. The return type for the method will need to be IList<Child1>. The relationships are as follows:
> 
> ```
>             Parent
>     Child1          Child2
> Grandchild1
> 
> ```
> 
> **Parent > Child1** is a one-to-many relationship
> 
> **Child1 > Grandchild1** is a one-to-n relationship (where n is zero to infinity)
> 
> **Parent > Child2** is a one-to-n relationship (where n is zero to infinity)
> 
> I am able to eager load the Parent, Child1 and Grandchild1 data resulting in one query to SQL Server.
> 
> This query with load options eager loads all of the data, except the sibling data (Child2):
> 
> ```
> DataLoadOptions loadOptions = new DataLoadOptions();
> loadOptions.LoadWith<Child1>(o => o.GrandChild1List);
> loadOptions.LoadWith<Child1>(o => o.Parent);
> 
> dataContext.LoadOptions = loadOptions;
> 
> IQueryable<Child1> children = from child in dataContext.Child1
>                                 select child;
> 
> ```
> 
> I need to load the sibling data as well. One approach I have tried is splitting the query into two LINQ to SQL queries and merging the result sets together (not pretty), however upon accessing the sibling data it is lazy loaded anyway.
> 
> Adding the sibling load option will issue a query to SQL Server for each Grandchild1 and Child2 record (which is exactly what I am trying to avoid):
> 
> ```
> DataLoadOptions loadOptions = new DataLoadOptions();
> loadOptions.LoadWith<Child1>(o => o.GrandChild1List);
> loadOptions.LoadWith<Child1>(o => o.Parent);
> loadOptions.LoadWith<Parent>(o => o.Child2List);
> 
> dataContext.LoadOptions = loadOptions;
> 
> IQueryable<Child1> children = from child in dataContext.Child1
>                                 select child;
> 
> 
> exec sp_executesql N'SELECT * FROM [dbo].[Child2] AS [t0]
> WHERE [t0].[ForeignKeyToParent] = @p0',N'@p0 int',@p0=1
> 
> exec sp_executesql N'SELECT * FROM [dbo].[Child2] AS [t0]
> WHERE [t0].[ForeignKeyToParent] = @p0',N'@p0 int',@p0=2
> 
> exec sp_executesql N'SELECT * FROM [dbo].[Child2] AS [t0]
> WHERE [t0].[ForeignKeyToParent] = @p0',N'@p0 int',@p0=3
> 
> exec sp_executesql N'SELECT * FROM [dbo].[Child2] AS [t0]
> WHERE [t0].[ForeignKeyToParent] = @p0',N'@p0 int',@p0=4
> 
> ```
> 
> I've also written LINQ to SQL queries to join in all of the data in hopes that it would eager load the data, however when the LINQ to SQL EntitySet of Child2 or Grandchild1 are accessed it lazy loads the data.
> 
> The reason for returning the IList<Child1> is to hydrate business objects.
> 
> My thoughts are I am either:
> 
> 1.  Approaching this problem the wrong way.
> 2.  Have the option of calling a stored procedure?
> 3.  My organization should not be using LINQ to SQL as an ORM?
> 
> Any help is greatly appreciated.
> 
> Thank you,
> 
> \-Scott

*I posted the following answer, which was chosen as the accepted answer and received 14 upvotes:*

What you have should be correct, you need to add this `dataContext.DeferredLoadingEnabled = false;` in addition to the LoadOptions you are already setting.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2546366) — 14 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
