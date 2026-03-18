---
title: "Database &quot;key/ID&quot; design ideas, Surrogate Key, Primary Key, etc"
description: "A question I asked on Stack Overflow"
date: 2009-12-22
author:
  name: Nate Bross
tags:
  - sql
  - database-design
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1948644"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1948644):*

So I've seen several mentions of a surrogate key lately, and I'm not really sure what it is and how it differs from a primary key.

I always assumed that ID was my primary key in a table like this:

```
Users
    ID, Guid
    FirstName, Text
    LastName, Text
    SSN, Int

```

however, wikipedia defines a surrogate key as "A surrogate key in a database is a unique identifier for either an entity in the modeled world or an object in the database. _The surrogate key is not derived from application data_."

According to Wikipedia, it looks like ID is my surrogate key, and my primary key might be SSN+ID? Is this right? Is that a bad table design?

Assuming that table design is sound, would something like this be bad, for a table where the data didn't have anything unique about it?

```
LogEntry
    ID, Guid
    LogEntryID, Int [sql identity field +1 every time]
    LogType, Int
    Message, Text

```

---

> [marc_s answered](https://stackoverflow.com/a/1948654) (14 upvotes):
>
> No, your ID can be both a surrogate key (which just means it's not "derived from application data", e.g. an artificial key), **and** it should be your primary key, too.
> 
> The primary key is used to uniquely and safely identify any row in your table. It has to be stable, unique, and NOT NULL - an "artificial" ID usually has those properties.
> 
> I would normally recommend against using "natural" or real data for primary keys - are not **REALLY** **150%** sure it's **NEVER** going to change?? The Swiss equivalent of the SSN for instance changes each time a woman marries (or gets divorced) - hardly an ideal candidate. And it's not guaranteed to be unique, either......
> 
> To spare yourself all that grief, just use a surrogate (artificial) ID that is system-defined, unique, and never changes and never has any application meaning (other than being your unique ID).
> 
> Scott Ambler has a pretty good article here which has a "glossary" of all the various keys and what they mean - you'll find natural, surrogate, primary key and a few more.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1948644) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
