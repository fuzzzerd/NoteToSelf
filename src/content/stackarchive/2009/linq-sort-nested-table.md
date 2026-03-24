---
title: "Linq Sort Nested Table"
description: "My answer to \"Linq Sort Nested Table\" on Stack Overflow"
date: 2009-09-29
author:
  name: Nate Bross
tags:
  - c#
  - linq
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1492916"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1492884):*

> Follow up question to this:
> 
> [Linq Combine Left Join Data](https://stackoverflow.com/questions/1488414/linq-combine-left-join-data)
> 
> Say I have the following db tables:
> 
> ```
> Users
> -------
> UserId (PK)
> UserName
> 
> Roles
> -----
> RoleId (PK)
> RoleName
> 
> UserRoles
> ---------
> UserId (PK)
> RoleId (PK)
> Users 1-M UserRoles M-1 Roles
> 
> ```
> 
> Using LinqToSQL, I can return the following set (thanks to response from prior question):
> 
> ```
> [User1], [Role1, Role2, Role3]
> [User2], [Role2, Role3] 
> [User3], [Role3]
> 
> ```
> 
> The twist is I am trying to sort by Roles. How can I sort the result by Roles?
> 
> **Clarification**
> 
> I have a grid, when the user clicks on the Roles column, the rows would be sorted by that column.
> 
> So to start the grid would look like this:
> 
> ```
> [User1], [Role1, Role2, Role3]
> [User2], [Role2, Role3] 
> [User3], [Role3]
> 
> ```
> 
> Then if they sort on Roles column it would look like this
> 
> ```
> [User3], [Role3]
> [User2], [Role2, Role3] 
> [User1], [Role1, Role2, Role3]
> 
> ```

*I posted the following answer:*

Could you not simpy use something like this?

```
// users is the collection you already got from Linq2Sql
var usersSorted = from u in users order by u.Roles select u;

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1492916) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
