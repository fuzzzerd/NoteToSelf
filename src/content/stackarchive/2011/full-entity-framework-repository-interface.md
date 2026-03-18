---
title: "full entity framework repository interface"
description: "My answer to \"full entity framework repository interface\" on Stack Overflow"
date: 2011-04-25
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - entity-framework
  - repository-pattern
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5776120"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5774053):*

> I am looking for full ef repository interface (and implementation). I have this:
> 
> ```
> public interface IRepository<T> where T: class
> {
>     IQueryable<T> GetQuery();
> 
>     IEnumerable<T> GetAll();
>     IEnumerable<T> Find(Func<T, bool> where);
>     T Single(Func<T, bool> where);
>     T First(Func<T, bool> where);
> 
>     void Delete(T entity);
>     void Add(T entity);
>     void Attach(T entity);
>     void SaveChanges();
> }
> 
> ```
> 
> And I am looking an interface of all methods include SingleOrDefault and so on.  
> Where I can find such thing?

You can find a list of all methods on IEnumerable [here](http://msdn.microsoft.com/en-us/library/system.linq.enumerable.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5776120) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
