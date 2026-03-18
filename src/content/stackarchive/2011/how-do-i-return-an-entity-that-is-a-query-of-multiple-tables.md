---
title: "How do I return an entity that is a query of multiple tables"
description: "My answer to \"How do I return an entity that is a query of multiple tables\" on Stack Overflow"
date: 2011-02-10
author:
  name: Nate Bross
tags:
  - c#
  - wcf
  - linq
  - entity-framework
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4959785"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4959739):*

> I have a web service that uses the Entity Framework for storage and exposes a public API for CRUD operations.
> 
> If I have an entity such as User which has a 1 to many relationship with a Car entity, how do I easily return in my web service method of GetUser(int userId) a instance of user that looks like this:
> 
> ```
> public class User{
>   string Id;
>   IEnumberable<Car> Cars;
> }
> 
> ```
> 
> Does this work by default within the entity framework, because I assume that the Cars property is lazy when using it on the server side.

I've used LINQ-To-SQL to achieve a similar result, and for me it "just worked." I'd try it out and see what happens. You may need to explicitly define the `[DataContract]` on the items.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4959785) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
