---
title: "CRUD Class Library Design, to return useful messages about business logic failure, that is not exceptional"
description: "A question I asked on Stack Overflow"
date: 2009-10-27
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - class-design
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1632440"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1632440):*

I'm building a basic CRUD library, that I anticipate use in both local (add reference) and wcf (add service reference) environments.

What are the best return types for the Create, Uupdate, and Delete portions (that have more complex business rules) of a CRUD setup?

I want to be able to minimize back-and-forth on the wire, but I also want to provide my clients with meaningful information about when an operation fails my business logic, but is technically valid (thus it's not an exception).

Take for example the CRUD is for a Person class, which has these fields: FirstName, MiddleName LastName, and Date of Brith. First, Last, and DOB are required, but Middle is not.

How should I convey failures of business logic back to the client? I.E. "You must specify a value for FirstName."

1.  Is this where I should be throwing exceptions? (it does not feel like an exceptional case, so I think not but I could be wrong).
2.  Should I use void and an "out" parameter? If so, what type should it be?
3.  Should I use an object return type and put data in there about what happens?
4.  Some other option that I've missed completely?

---

> [Reed Copsey answered](https://stackoverflow.com/a/1682121) (1 upvotes):
>
> > 1.Is this where I should be throwing exceptions? (it does not feel like an exceptional case, so I think not but I could be wrong).
> 
> Personally, I feel that you should return an object with a result as well as any validation errors, and not throw an exception for data validation, whether that's due to missing information (format validation) or business logic validation. However, I do suggest throwing an exception for errors that are not related to the data itself - ie: if the database commit fails with valid data, etc.
> 
> My thinking here is that validation failing is not an "exceptional occurance". I personally feel that anything a user can mess up by just not entering enough/correct/etc data is something that is not exceptional - it's standard practice, and should be handled by the API directly.
> 
> Things that are not related to what the user is doing (ie: network issues, server issues, etc) are exceptional occurances, and warrant an exception.
> 
> > 2.Should I use void and an "out" parameter? If so, what type should it be?
> > 
> > 3.Should I use an object return type and put data in there about what happens?
> 
> I personally prefer the third option. "out" parameters are not very meaningful. Also, you're going to want to return more than a single status information from this call - you'll want to return enough information to flag the appropriate properties as invalid, as well as any full operation-wide information.
> 
> This is probably going to require a class that contains, at a minimum, a commit status (success/failed format/failed business logic/etc), a list of mappings for properties->errors (ie: [IDataErrorInfo](http://msdn.microsoft.com/en-us/library/system.componentmodel.idataerrorinfo.aspx) style information), and potentially a list of errors that aren't tied to a specific property, but rather deal with business logic of the operation as a whole, or the combination of suggested property values.
> 
> > 4.Some other option that I've missed completely?
> 
> The other option, which I like quite a bit, is to have the validation in a separate assembly from the business processing layer. This allows you to reuse the validation logic on the client side.
> 
> The nice thing about this is that you can simplify and reduce the network traffic dramatically. The client can pre-validate the information, and only send data across the wire if it's valid.
> 
> The server can receive the good data, and revalidate it, and return nothing but a single commit result. I do believe this should have at least three responses - success, failed due to business logic, or failed due to formatting. This gives the security (you don't have to trust the client), and gives the client information about what's not being handled properly, but avoids passing both bad info from client->server, and validation info from server->client, so can drastically reduce traffic.
> 
> The validation layer can then (safely) send the info to the CRUD layer to submit.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1632440) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
