---
title: "How to override Equals on a object created by an Entity Data Model?"
description: "My answer to \"How to override Equals on a object created by an Entity Data Model?\" on Stack Overflow"
date: 2010-03-18
author:
  name: Nate Bross
tags:
  - c#
  - entity-framework
  - overriding
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2472542"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2472441):*

> I have an Entity Data Model that I have created, and its pulling in records from a SQLite DB. One of the Tables is People, I want to override the person.Equals() method but I'm unsure where to go to make such a change since the Person object is auto-generated and I don't even see where that autogen code resides. I know how to override Equals on a hand made object, its just where to do that on an autogen one.

*I posted the following answer, which was chosen as the accepted answer and received 11 upvotes:*

You need to create a partial class. Add a new .cs file to your solution, and start it like this:

```
public partial class Person
{
    public override bool Equals(Object obj)
    {
        //your custom equals method
    }
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2472542) — 11 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
