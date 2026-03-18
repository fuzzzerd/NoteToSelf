---
title: "Storing user access level in a database"
description: "A question I asked on Stack Overflow"
date: 2010-01-05
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - database
  - database-design
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2008165"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2008165):*

I am storing a list of "Users" in a table. The business logic of the application will have a reference to an object with all the data in this table for the currently logged-in user. And be able to allow the user to perform operations if they have the correct access.

I'm wondering what is the best way to store "access levels?"

One way I'm thinking of storing the access level is as an integer, and using C# "flags" to combine multiple access levels without requiring a bunch of fields, is this wise?

```
Create  = 1
Read    = 2
Update  = 4
Delete  = 8
FullAcc = 16

```

The other option I'm thinking of, feels less elegent, but I've seen it done a lot:

```
Read/Write  = 1
R/W + Delete= 2
Full Access = 3

```

The reason I'm wondering, is that it seems like it would be more simple to add additional items to the second method, but at some point, it would become a pain in the ass to maintain. What are your thoughts?

---

> [TLiebe answered](https://stackoverflow.com/a/2008202) (5 upvotes):
>
> I've always preferred the first approach using flags. The danger is that you get too many levels of permissions and you have to keep extending your enum and start using huge numbers and therefor maybe have to change the data type in your database to a large int. However, for something like permissions the number of options should be fairly limited. The one suggestion I would make is to have FullAcc defined as the sum of Create, Read, Update and Delete instead of as a separate entity. That way you won't have to check if a user has Update OR FullAcc permissions when they are trying to update something.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2008165) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
