---
title: "Planning a database app"
description: "My answer to \"Planning a database app\" on Stack Overflow"
date: 2010-05-13
author:
  name: Nate Bross
tags:
  - database
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2830455"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2830436):*

> I am in the planning stages of a database app for personal use. I have a good bit of the database structure planned, but as I think about how I'm going to write the program, it made me wonder if I'm doing this in the right order.
> 
> Which should I be planning first, the db structure or the classes?

*I posted the following answer, which received 1 upvote:*

I typically plan as best I can, then I start creating the database per the planning/design specs I wrote for myself.

Then, I use something like Linq-To-SQL to generate some basic DAL classes -- wrap those in a repository class that manages most of my CRUD situations.

Depending on the complexity of the app, I then write a GUI which consumes the repository directly (quick/dirty) or I write a domain logic class (and potentially Data-Transfer-Objects or dumb POCOs) which wraps up the functionality in the repository.

Obviously, the best planning misses things, so make sure you take in to account that you'll have to go back and add fields, change types, add relationships etc.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, pretty much. Plan, build in SQL Server, setup Linq-To-SQL, then start coding around that.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2830455) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
