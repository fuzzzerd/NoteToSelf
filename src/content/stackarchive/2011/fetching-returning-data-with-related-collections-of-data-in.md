---
title: "Fetching / Returning Data with Related Collections of Data in a Service Architecture"
description: "A question I asked on Stack Overflow"
date: 2011-12-07
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - soa
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/8420406"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/8420406):*

This is how my .EDMX looks

```
Entity
    int Prop1;
    String Prop2;
    EntityCollection<ChildEntity1> Children;
    EntityCollection<ChildEntity2> OtherRelatedData;

```

Naturally, in my service layer this works well, I can perform business logic by simply using the properties of `.Children` and `.OtherRelatedData` and since they are still `IQueryable` I can project on them to my hearts content without issue. My question is this; how should my service **expose** these related data? Let me furthe define the problem.

The number of `ChildEntity1` records will grow forever, so when clients of the service request `Entity` I don't want to simply `.ToList()` it since there may be thousands of related rows (and in general only the most recent 10-100 will be useful).

I am trying to decide between these two approaches:

## Option One

```
// Service Code
public EntityDTO ReadEntity(int id)
{
    // return Entity based on id with both child properties null
}
public IEnumerable<ChildEntity1DTO> ReadChildEntity1s(int parentID, int take, int skip)
{
    // return ChildEntity1DTOs starting at skip and returning only at most take
}
public IEnumerable<ChildEntity2DTO> ReadChildEntity2s(int parentID, int take, int skip)
{
    // return ChildEntity2DTOs starting at skip and returning only at most take
}

// consumer code
var ent = svc.ReadEntity(3);
var Entity = new 
{
    Prop1 = ent.Prop1,
    Prop2 = ent.Prop2
    Children = svc.ReadChildEntity1s(3, 10, 0),
    OtherRelatedData = svc.ReadChildEntity2s(3, 10, 0)
};

```

* * *

## Option Two

```
// Service Code
public EntityDTO ReadEntity(int id, int takeChild1, int skipChild1, int takeChild2, int skipChild2)
{
    // do projection of data here and return one DTO fully pre-populated
}

// client
var e = svc.ReadEntity(3, 10, 0, 10, 0);

```

* * *

I am leaning toward Option One, simply because it would make pagination on the client much easier, by simply having the client request additional related records. In order to support the same pagination for Option Two, I'd have to add all the same code from Option One as well. With Option One I get the added benifit of skipping all related data if the consumer isn't interested in it by default instead of having to specify skip zero, take zero for each related set.

Is there a better approach to handling this type of situation with DTOs in a service architecture?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/8420406) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
