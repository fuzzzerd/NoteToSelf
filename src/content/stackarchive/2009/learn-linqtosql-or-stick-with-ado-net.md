---
title: "Learn LinqToSql or stick with ADO.NET?"
description: "My answer to \"Learn LinqToSql or stick with ADO.NET?\" on Stack Overflow"
date: 2009-12-23
author:
  name: Nate Bross
tags:
  - linq
  - linq-to-sql
  - entity-framework
  - ado.net
  - linq-to-objects
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1954557"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1951504):*

> I'm debating what technology to use for an upcoming ASP.NET project.
> 
> **Assumptions:**
> 
> *   I will be using Visual Studio 2008 SP1 (.NET Framework 3.5)
> *   The back-end will be a SQL Server 2005 database (or possibly 2008)
> *   Code will be written in C#
> *   I already have experience with LinqToObjects and LinqToXml
> *   I also have experience with ADO.NET and some libraries already built
> *   The project is relatively small
> *   The website will feature about five screens
> *   The database will have maybe six or seven tables
> *   There will be maybe 25-50 active users
> *   Transactions per day will probably be about 5-10 tops
> *   Minimal personal data will be stored
> *   The consequences of failure or the site getting hacked would be minimal
> 
> **Options:**
> 
> 1.  Write stored procedures and call them with ADO.NET. I can still use LinqToObjects once I'm done populating my `DataSet`.
>     
> 2.  Leverage what I know of Linq already to learn LinqToSql.
>     
> 
> **Analysis:**
> 
> I already know how to do option 1, but I'd really like to use Linq exclusively. The problem with option 2 is that, according to everything I've read, LinqToSql will probably be deprecated in favor of Entity Framework.
> 
> **Questions:**
> 
> 1.  How steep is the learning curve for LinqToSql if you're already familiar with other Linq technologies?
>     
> 2.  Is it worth investing _any_ time in learning LinqToSql given that it may not be further developed by Microsoft?
>     
> 3.  Will understanding LinqToSql help me to one day understand Entity Framework or are they too different?
>     
> 4.  Ultimately, which option would you recommend for my situation?
>     
> 
> **Update:**
> 
> I don't want this to get lost in the comments: marc\_s pointed out that LinqToSql _is_ being further developed, at least as of .NET 4.0. Link: [http://damieng.com/blog/2009/06/01/linq-to-sql-changes-in-net-40](http://damieng.com/blog/2009/06/01/linq-to-sql-changes-in-net-40).
> 
> I don't know if this means LinqToSql has a future after all, but it does make learning that technology a little more appealing.
> 
> One thing I didn't ask in my original post but should have: Are the flaws in Entity Framework likely to affect _this_ project?
> 
> Thanks for the answers so far.
> 
> **Further Analysis**
> 
> Here is a list of LinqToSql drawbacks, based on some of the comments below:
> 
> 1.  You must continually update the tables and items in the designer as you make changes to the underlying database. There is no way to "refresh" or "sync" it so that it automatically recognizes changes.
> 2.  Version control is complicated by the fact that the designer does not generate the underlying files in a consistent order.
> 3.  The LinqToSql designer generates different code than SqlMetal.
> 4.  There are issues/bugs involving eager loading.
> 
> Of these, item 1 is the greatest concern to me. Even with a small project, change is inevitable. I remember once trying to use the Windows Forms designer to map to a database, and it blew up in my face so many times, I abandoned it in favor of rolling my own ADO.NET helper classes.
> 
> However, it does seem like SqlMetal might be able to handle my needs perfectly. I run a command, it regenerates everything from scratch from the database, I'm done. If I keep my database simple (just tables--no stored procedures, views, or functions), perhaps SqlMetal is all I'll need.

> 1.How steep is the learning curve for LinqToSql if you're already familiar with other Linq technologies?

For the project scope you defined, it should be minimal. Doing simple things is dirt simple, more advanced concepts require some knowledge of how it works under the hood, but again, nothing earth shattering.

> 2.Is it worth investing any time in learning LinqToSql given that it may not be further developed by Microsoft?

I would say it is, its not hard to pick up if you already use Linq techniques. Additionally, Microsoft will continue to support and develop Linq2Sql as marc\_s pointed out. Scott Hanselman uses Linq2Sql for his Nerd Dinner project ([http://nerddinner.codeplex.com/](http://nerddinner.codeplex.com/))

> 3.Will understanding LinqToSql help me to one day understand Entity Framework or are they >too different?

I've used alot of Linq2Sql and only a very small bit of Entity Framework, they are similar but different. The basics are much the same, and I haven't been involved in any super advanced use cases.

> 4.Ultimately, which option would you recommend for my situation?

If I were developing a site like you proposed, I would seriously look into Linq2Sql, you could probably get the basics working in a few hours and make a decision if the learning curve is greater than you want to deal with. (IMHO, I doubt you'll find that to be the case.)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1954557) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
