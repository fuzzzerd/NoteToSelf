---
title: "SQL Server Data Import with a &quot;lookup&quot;"
description: "A question I asked on Stack Overflow"
date: 2010-06-15
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - sql-server-2008
  - import
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3049337"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3049337):*

I have two databases, on two separate SQL Servers (trying to consolidate both).

This is my setup, and I'm trying to import from Server1:Orders table to Server2:Orders table.

```
Server1
    Database1
        Orders(ID, CustomerName, DateOrdered)

Server2
    Database2
        Customers(ID, Name)
        Orders(ID, CustomerID, DateOrdered)

```

As you can see, Database1 has de-normalized data, and Database2 has the same data, properly normalized.

The issue I'm having is doing the SQL Server import. In Database2, the Customers table is populated, and there WILL be a match between Server1.Database1.Orders.CustomerName and Server2.Database2.Customers.Name.

What I'd LIKE to have happen, is during the import, have the Customer.ID field "looked-up" based on the value of the CustomerName field in the import data, then do the corresponding insert to my new Orders table.

I am able to connect to both servers through SSMS, and I'm trying to do the import via the "SQL Server Native Client 10" as the datasource.

**Update**

It appears I am not going to be able to do an SSIS "package" so what I've done is this:

Moved Database1.Orders to Database2.OrdersOLD.

I'm now looking for a query to create new Order records in Database2.Orders and insert the correctly looked up CustomerID, since now all three tables are within the same database, is this possible?

---

> [Remus Rusanu answered](https://stackoverflow.com/a/3049355) (1 upvotes):
>
> Use SSIS, specifically the [Lookup Transformation](http://msdn.microsoft.com/en-us/library/ms141821.aspx). See the linked blogs and tutorials from the MSDN article link.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3049337) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
