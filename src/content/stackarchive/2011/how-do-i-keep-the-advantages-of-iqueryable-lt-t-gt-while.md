---
title: "How do I keep the Advantages of IQueryable&lt;T&gt; while using ViewModels or DTOs instead of ORM generated Entities?"
description: "A question I asked on Stack Overflow"
date: 2011-06-28
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - design-patterns
  - orm
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/6510317"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/6510317):*

When using Linq-To-SQL or Entity Framework, the DataContext and generated entities provide IQueryable interfaces for deferred execution. It lets me write code like this:

```
public class RPO
{
    DataContext dc;
    public RPO(){ dc = new DataContext(); }
    public IQueryable<Data> ReadData()
    {
        return dc.Data;
    }
}

public class Svc
{
    RPO repository;
    public Svc() { repository = new RPO(): }
    public IQueryable<Data> ReadActiveData() 
    { 
        return repository.ReadData().Where(d => d.IsActive.Equals(true)); 
    }
    public IQueryable<Data> ReadArchiveData() 
    { 
        return repository.ReadData().Where(d => d.IsArchived.Equals(true)); 
    }
}

```

This model falls appart if in the class `Svc` I return `DataModel` instead of `Data` -- how can I keep `IQueryable<T>` as far down the chain as possible?

---

> [Illuminati answered](https://stackoverflow.com/a/6510364) (3 upvotes):
>
> Your SVC layer should never expose IQueryable. What happens then is, it is actually your service consumer who gets to execute your query which is a bad pattern. So service should always expose data which is sufficient for the service-user to work ( display) with.
> 
> Preferably a IList or a IEnumarable.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/6510317) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
