---
title: ".NET Entity Framework"
description: "A question I asked on Stack Overflow"
date: 2009-05-06
author:
  name: Nate Bross
tags:
  - .net
  - database
  - entity-framework
  - .net-3.5
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/830291"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/830291):*

Is it bad practice to use the generated objects from Entity Framework as business objects? Is it better to write a secondary wrapper around Entity Framework objects that I would then pass between layers?

For example, write my own POCO Person that accepts one of my generated Entity Framework object EFPerson to initialize the POCO Person object?

---

> [Program.X answered](https://stackoverflow.com/a/830339) (2 upvotes):
>
> I don't see why it would be _bad_ practice. It might be awkward according to how you intend to use your EF objects.
> 
> I have partial classes to implement BIZ logic in the EF objects, using an Interface to provide a level of abstraction.
> 
> eg.
> 
> ```
> public partial class Client : IClient
> {
>    void DoSomething();
> }
> 
> // then an EF generated object ...
> public partial class Client
> {
>  // ...
> }
> 
> ```
> 
> My only problem I have had is serializing the objects. In my case, serializing into JSON using WCF. It isn't possible without creating an intermediate DTO either as a discrete class/object or as an anonymous type.
> 
> If you're interested in serialisation, have a look at another question of mine here: [Serialize Entity Framework objects into JSON](https://stackoverflow.com/questions/657939/serialize-entity-framework-objects-into-json)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): If EF objects have issues being serialized, wouldn't it be best to wrap them in POCO? Because you may at some point in the future want to expose your Biz logic through a WCF.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/830291) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
