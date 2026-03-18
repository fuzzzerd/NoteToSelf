---
title: "Getting started with Azure Storage coming from a relational database point of view"
description: "A question I asked on Stack Overflow"
date: 2010-06-24
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - database-design
  - azure
  - storage
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3111599"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3111599):*

I'm designing a new system, and I have need to store a pretty large volume of different type of data, with realitivly few rows per type.

I know that if I were doing this with SQL Server (I don't want to use a SQL Azure database for this.) I'd make a new table for each type of data and make the correct relationships. I'm wondering if anybody has resources for people like me who are thinking in relational terms to begin designing for more "flat" storage like Azure or even S3.

I'll be using .NET as the consumer of said storage, possibly with an Azure Compute Instance, but more likely with a remote client using the REST or SOAP api. So any guidance with respect to that is also greatly appreciated.

---

> [user94559 answered](https://stackoverflow.com/a/3112302) (1 upvotes):
>
> The main thing to consider is whether you need relational database capabilities (joins, group by, etc.). If so, you'll have to put some thought into how to accomplish those using a non-relational storage solution.
> 
> If, however, your access looks like "store row #12345" and "retrieve row #12345", you should have an easy time using something like Windows Azure tables.
> 
> I would recommend Episode 10 of Cloud Cover (a weekly show I'm on) which covers Windows Azure's table storage API: [http://channel9.msdn.com/shows/Cloud+Cover/Cloud-Cover-Episode-10-Table-Storage-API/](http://channel9.msdn.com/shows/Cloud+Cover/Cloud-Cover-Episode-10-Table-Storage-API/)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): This will be both read and write/update of data.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3111599) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
