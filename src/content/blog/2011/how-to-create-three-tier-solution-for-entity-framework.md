---
title: "How to create three tier solution for Entity framework"
description: "My answer to \"How to create three tier solution for Entity framework\" on Stack Overflow"
date: 2011-05-03
author:
  name: Nate Bross
tags:
  - .net
  - asp.net
  - entity-framework
  - soa
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5875677"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5875546):*

> I created three projects in a solution, one web applciation, two class libraries for DAL and BLL. Created the Entity Framework model in the DAL layer and referenced the DAL library in the BLL project.
> 
> When I call the BLL objects from the web application project am running into problems, it says I need to reference entity framework. I dont want any dependency on DAL library objects in the web application project.
> 
> Is there any specific guidance on building clean three-tier applicaiton using Entity Framework.

*I posted the following answer, which was chosen as the accepted answer and received 19 upvotes:*

Sounds like your BLL is exposing the `entity` classes you added in the DAL. You'll need to create wrapper classes (That are POCO) in the BLL and return those instead of the entities from the DAL.

This is probably what you **are** doing:

```
// DAL
// .edmx file generated entities
public IQueryable<TableEntity> GetTableEntities()
{
     // read from entity framework and return
}

// BLL
public IEnumerable<TableEntity> ReadTableEntitiesForUser(int userID);
{
    var d = new DAL();
    var entities = d.GetTableEntities();
    // restrict to entites this user "owns"
    entities = entities.Where(e => e.OwnerID.Equals(userID));
    return entities;        
}

// WebApp
var b = new BLL();
var myEntities = b.ReadTableEntitiesForUser(1234);

```

This is probably what you **should** be doing:

```
// DAL
// .edmx file generated entities
public IQueryable<TableEntity> GetTableEntities()
{
     // read from entity framework and return
}

// BLL
public class TableEntityDTO 
{
    public int ID { get; set; }
    public string Name { get; set; }
    // continue on for each column in the table
    // and make a DTO class for each table in your database
}
public IEnumerable<TableEntityDTO> ReadTableEntitiesForUser(int userID);
{
    var d = new DAL();
    var entities = d.GetTableEntities();
    // restrict to entites this user "owns"
    entities = entities.Where(e => e.OwnerID.Equals(userID));
    // convert from "Entity Framework Object" to "BLL Object"
    foreach(var e in entities)
    {
        yeild return new TableEntityDTO() { ID = e.ID, Name = e.Name };
    }
}

// WebApp
var b = new BLL();
var myEntities = b.ReadTableEntitiesForUser(1234);

```

This is true for the Entity Framework that shipped with .NET 3.5SP1 and for Linq-To-SQL both of which I have used a bit, it may hold true for the latest versons of EF, but with Code-First and other things there may be a way to avoid this extra Data-Transfer-Object step, though with a Service Orientated Architecture, DTOs are likely the best way to go.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5875677) — 19 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
