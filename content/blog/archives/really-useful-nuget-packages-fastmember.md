---
title: Really useful Nuget packages - FastMember. Convert a generic list to a DbDataReader on the quick. 
date: 2017-10-05
author: 
  name: Nate Bross
tags: 
  - dotnet
  - open source
---
Utilizing .NET Core has been a pretty great experience. There have been a few gotchas with APIs not being available in the base package. I was really stoked to see that the SqlBulkCopy classes are part of .NET Core. I was less thrilled to note that DataTable is there in .NET Core 1.0 but just an empty non-usable class.

That means converting from a generic `IEnumerable<T>` to a DataTable/Set is not an option.

Enter DbDataReader: another way to utilize BulkCopy.

If you have an `IDataReader` instance, the BulkCopy WriteToServer method has an overload to cover that; however, I'm an ORM to pull in some data form various sources so I basically have `List<T>`s, not `IDataReader`s. Searching the web it's pretty difficult to find a generic way to convert from a generic collection to a IDataReader. Much harder than it should be.

[Enter FastMember: Convert an `IEnumerable<T>` to a `DbDataReader`, fast!](https://github.com/mgravell/fast-member/)

This great package makes the process easy and extremely fast. Basic demo shows how simple this package makes things.

```csharp
using (SqlBulkCopy bulkcopy = new SqlBulkCopy(connection)
{
    using (var reader = ObjectReader.Create(toInsert))
    {
        bulkcopy.WriteToServer(reader);
    }
    bulkcopy.Close();
}
```
