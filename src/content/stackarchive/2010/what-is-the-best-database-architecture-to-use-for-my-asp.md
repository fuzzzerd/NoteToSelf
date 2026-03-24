---
title: "What is the best database architecture to use for my asp.net site?"
description: "My answer to \"What is the best database architecture to use for my asp.net site?\" on Stack Overflow"
date: 2010-09-13
author:
  name: Nate Bross
tags:
  - asp.net
  - entity-framework
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3703783"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3703775):*

> I am looking into creating a new website using ASP.NET 4.0. I am currently starting to build a site that will need to store reporting information.
> 
> My database has around 25-30 tables (with a lot of relationships) to which my web application will need to store and read information from. Normally, the architecture I use is the Layered Architecture where I have a Business Logic, Business Objects and Data Access Layer. But I am thinking on moving on and using .NET 4.0 features.
> 
> So I am thinking of using the Entity Framework mainly because I really like the idea of using LINQ to a larger extent.
> 
> I would be grateful if someone could tell me if this would be a good idea for a project of my size. I have seen some good and bad points on EF and I just can't seem to make a decision (maybe due to my lack of dev experience).
> 
> I just need to make sure the solution is maintainable on the event additional tables are added in the future.
> 
> Thanks for any help!

*I posted the following answer, which received 2 upvotes:*

I have to say, that the method described in [Professional ASP.NET MVC](http://aspnetmvcbook.s3.amazonaws.com/aspnetmvc-nerdinner_v1.pdf) has never let me down, I've used it twice on to very successful systems. If you wish to use WebForms a similar approach could be used for the data access type code.

Basically, they use MVC for the front-end, and the use a simple repository pattern for the back end, it has worked very well for me.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Updated with link and more info.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3703783) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
