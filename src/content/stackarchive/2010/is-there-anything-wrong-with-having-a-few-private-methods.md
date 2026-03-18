---
title: "Is there anything wrong with having a few private methods exposing IQueryable&lt;T&gt; and all public methods exposing IEnumerable&lt;T&gt;?"
description: "A question I asked on Stack Overflow"
date: 2010-05-25
author:
  name: Nate Bross
tags:
  - c#
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2908338"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2908338):*

I'm wondering if there is a better way to approach this problem. The objective is to reuse code.

Let’s say that I have a Linq-To-SQL datacontext and I've written a "repository style" class that wraps up a lot of the methods I need and exposes IQueryables. (so far, no problem).

Now, I'm building a service layer to sit on top of this repository, many of the service methods will be 1<->1 with repository methods, but some will not. I think a code sample will illustrate this better than words.

```
public class ServiceLayer 
{
    MyClassDataContext context;
    IMyRepository rpo;

    public ServiceLayer(MyClassDataContext ctx) 
    { 
        context = ctx; 
        rpo = new MyRepository(context);   
    }

    private IQueryable<MyClass> ReadAllMyClass()
    {
        // pretend there is some complex business logic here
        // and maybe some filtering of the current users access to "all"
        // that I don't want to repeat in all of the public methods that access
        // MyClass objects.
        return rpo.ReadAllMyClass();
    }

    public IEnumerable<MyClass> GetAllMyClass()
    {
        // call private IQueryable so we can do attional "in-database" processing
        return this.ReadAllMyClass();
    }

    public IEnumerable<MyClass> GetActiveMyClass()
    {
        // call private IQueryable so we can do attional "in-database" processing
        // in this case a .Where() clause
        return this.ReadAllMyClass().Where(mc => mc.IsActive.Equals(true));
    }

    #region "Something my class MAY need to do in the future"
    private IQueryable<MyOtherTable> ReadAllMyOtherTable()
    {
        // there could be additional constrains which define
        // "all" for the current user
        return context.MyOtherTable;
    }

    public IEnumerable<MyOtherTable> GetAllMyOtherTable()
    {
        return this.ReadAllMyOtherTable();
    }

    public IEnumerable<MyOtherTable> GetInactiveOtherTable()
    {
        return this.ReadAllMyOtherTable.Where(ot => ot.IsActive.Equals(false));
    }
    #endregion

}

```

This particular case is not the best illustration, since I could just call the repository directly in the GetActiveMyClass method, but let’s presume that my private IQueryable does some extra processing and business logic that I don't want to replicate in both of my public methods.

Is that a bad way to attack an issue like this? I don't see it being so complex that it really warrants building a third class to sit between the repository and the service class, but I'd like to get your thoughts.

For the sake of argument, lets presume two additional things.

1.  This service is going to be exposed through WCF and that each of these public IEnumerable methods will be calling a `.Select(m => m.ToViewModel())` on each returned collection which will convert it to a POCO for serialization.
2.  The service will eventually need to expose some `context.SomeOtherTable` which wont be wrapped into the repository.

---

> [Kelsey answered](https://stackoverflow.com/a/2908571) (5 upvotes):
>
> I think it's a good model since you can create basic IQueryable private functions that can be used by the functions you are exposing publicly. This way your public methods do not need to recreate a lot of the common functionality your IQueryable methods perform and they can be extended as needed and deferring the execution while still hiding that functionality publicly.
> 
> An example like how to get X out of some table which may take a lot of logic that you don't need in it's raw form. You then have that as a private method, as you do in your example, and then the public method adds the finalizing criteria or queries to generate a useable set of data which could differ from function to function. Why keep reinventing the wheel over and over... just create the basic design (which you IQueryable does) and drop on the tread pattern that is required as needed (your public IEnumerable does) :)
> 
> +1 for a good design IMO.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2908338) — 9 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
