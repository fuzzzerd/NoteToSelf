---
title: "How do you keep your Domain Logic seperate from DB/Persistence Logic with Linq-2-Sql?"
description: "A question I asked on Stack Overflow"
date: 2010-01-18
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - database
  - linq
  - separation-of-concerns
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2087460"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2087460):*

I'm trying to get at the best way to seperate the concerns of my domain logic and my persistence logic. I'm using Linq-2-Sql for the data access and I've been following the [NerdDinner tutorial](http://aspnetmvcbook.s3.amazonaws.com/aspnetmvc-nerdinner_v1.pdf). If you look at page 40, you can see they are using partial classes to business rules to their Linq generated classes. To me, that feels wrong (is it?) and I'd like to have my own POCOs that are exposed to the presentation tier of my application. It looks like one option [here](https://stackoverflow.com/questions/51176/seperating-concerns-with-linq-to-sql-and-dtos), is to use a seperate DTO class. That feels better to me but it adds a lot more code to test and maintain.

I like the simplicity of simply adding partial classes to enforce business rules on the Linq classes, but I don't like exposing the Linq classes to my presentation tier, since if the database changes I'll need to update the presentation tier as well.

The DTO approach feels cleaner, since I'd never need to update the presentation tier if the database changes, but it is a lot more code to deal with.

My current approach is thus, two Class Libraries one with Linq-2-Sql DBML + Partial Classes, and the second with a set of classes that have nothing but auto-generated properties and then a "repo" class that manages getting data from the Linq assembly and converting it to `IQueryable<T>.`

Is there a better way? Is there a better middle ground? Can I take the best of both worlds? If so, how would you seperate them into different assemblies?

**update**

Maybe, what I really need to do is consolidate all of the Persitence/Domain logic into a single assembly (the same approach used in the NerdDinner sample), and then create different "View Objects" in my presentation tier, that are denormalized versions of my Linq-2-Sql Entities?

---

> [jason answered](https://stackoverflow.com/a/2087511) (3 upvotes):
>
> I try to keep my domain objects as persistence ignorant as the technology that I'm using will allow. For LINQ to SQL, I followed the approach set out by [Ian Cooper](http://codebetter.com/blogs/ian_cooper/archive/2009/03/03/persistence-ignorance-with-linq-to-sql.aspx) (see [Being Ignorant with LINQ to SQL](http://iancooper.spaces.live.com/blog/cns!844BD2811F9ABE9C!397.entry), [Architecting LINQ to SQL Applications, Part 5](http://codebetter.com/blogs/ian_cooper/archive/2008/02/17/architecting-linq-to-sql-applications-part-5.aspx) and [Architecting LINQ to SQL Applications, Part 6](http://codebetter.com/blogs/ian_cooper/archive/2008/03/09/previous-architecting-linq-to-sql-applications-part-5.aspx)). Basically, you can manually code up your domain objects and wire them up to LINQ to SQL using `sqlmetal` to generate the mapping to the database which you can then hand edit to suit your needs. It's worked quite well for me.
> 
> Jeremy Miller has a good article on the topic of persistence ignorance in MSDN magazine. See [The Unit Of Work Pattern and Persistence Ignorance](http://msdn.microsoft.com/en-us/magazine/dd882510.aspx).
> 
> > My current approach is thus, two Class Libraries one with Linq-2-Sql DBML + Partial Classes, and the second with a set of classes that have nothing but auto-generated properties and then a "repo" class that manages getting data from the Linq assembly and converting it to `IQueryable<T>`.
> 
> I don't like this approach. It violates DRY so violently.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2087460) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
