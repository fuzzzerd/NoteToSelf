---
title: "Where should I put Comparers in an app that uses WCF?"
description: "A question I asked on Stack Overflow"
date: 2009-10-07
author:
  name: Nate Bross
tags:
  - c#
  - wcf
  - architecture
  - service
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1533324"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1533324):*

I have an application that uses WCF for all DataAccess. It returns some business objects and it has some operations.

Should this code exist in my Client or in my Service? If in the service, HOW should I implement it? Can I simply add it as an interface to my business object? Will that come through the WCF Service Proxy Code?

(This is a sample from MSDN, I'd like to get some feedback before I implement my own, but it will be 99% the same)

```
// Custom comparer for the Product class.
class ProductComparer : IEqualityComparer<Product>
{
    // Products are equal if their names and product numbers are equal.
    public bool Equals(Product x, Product y)
    {

        // Check whether the compared objects reference the same data.
        if (Object.ReferenceEquals(x, y)) return true;

        // Check whether any of the compared objects is null.
        if (Object.ReferenceEquals(x, null) || Object.ReferenceEquals(y, null))
            return false;

        // Check whether the products' properties are equal.
        return x.Code == y.Code && x.Name == y.Name;
    }

    // If Equals() returns true for a pair of objects,
    // GetHashCode must return the same value for these objects.

    public int GetHashCode(Product product)
    {
        // Check whether the object is null.
        if (Object.ReferenceEquals(product, null)) return 0;

        // Get the hash code for the Name field if it is not null.
        int hashProductName = product.Name == null ? 0 : product.Name.GetHashCode();

        // Get the hash code for the Code field.
        int hashProductCode = product.Code.GetHashCode();

        // Calculate the hash code for the product.
        return hashProductName ^ hashProductCode;
    }
}

```

---

> [Mark Seemann answered](https://stackoverflow.com/a/1533347) (2 upvotes):
>
> Remember that data transmitted over WCF (or via any sort of SOAP-based service) are _messages_ only. They carry no behavior (it wouldn't be interoperable), so all your nice behavior will be lost in translation.
> 
> This means you really only have one option: Your business logic must reside in the service, as it can't reside on the client.
> 
> That said, there are a few ways you can share code between service and client, but unless you are using WCF purely as a communications stack, it is not recommended, as it will tie client and service together, and make it close to impossible to vary those two independently (let alone let new clients use the service).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1533324) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
