---
title: "Having trouble creating a one to &#39;zero or one&#39; relationship using Entity Framework"
description: "My answer to \"Having trouble creating a one to &#39;zero or one&#39; relationship using Entity Framework\" on Stack Overflow"
date: 2012-07-20
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - entity-framework
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11587353"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11586788):*

> I have two tables:
> 
> ```
> CREATE TABLE Order (
>     orderId INTEGER IDENTITY NOT NULL,
>     PRIMARY KEY (orderId) 
> )
> 
> CREATE TABLE OrderAdditionalDetails (
>     additionalDetailsId INTEGER IDENTITY NOT NULL,
>     orderId INTEGER NOT NULL,
>     PRIMARY KEY (additionalDetailsId),
>     FOREIGN KEY (orderId) REFERENCES Order(orderId)
> )
> 
> ```
> 
> I have a Foreign key (FK\_OrderAdditionalDetails\_Order) declared on the OrderAdditionalDetails table, on the orderId field. I also have a 'unique' constraint on the orderId field in the OrderAdditionalDetails table. The idea is that each 'order' will have zero or one entries in the 'OrderAdditionalDetails' table.
> 
> This all picked up by the entity framework model file, however when I try to create the Navigation property, it only lets me declare a 1 to many relationship. The error I get is as follows:
> 
> Running transformation: Multiplicity is not valid in Role 'OrderAdditionalDetails' in relationship 'FK\_OrderAdditionalDetails\_Order'. Because the Dependent Role properties are not the key properties, the upper bound of the multiplicity of the Dependent Role must be \*.
> 
> I'm really not sure what this means - googling the error did not prove helpful. Can anybody shed some light on what I am doing wrong?

Your Foreign Key must be defined as `UNIQUE` in order to enforce a One-To-Zero-Or-One relationship.

Maybe try something like this:

```
CREATE TABLE OrderAdditionalDetails (
    additionalDetailsId INTEGER IDENTITY NOT NULL,
    orderId INTEGER NOT NULL UNIQUE,
    PRIMARY KEY (additionalDetailsId),
    FOREIGN KEY (orderId) REFERENCES Order(orderId)
)

```

See Also: [Implementing one-to-zero-or-one relation in SQL Server](https://stackoverflow.com/questions/7644156/implementing-one-to-zero-or-one-relation-in-sql-server)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11587353) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
