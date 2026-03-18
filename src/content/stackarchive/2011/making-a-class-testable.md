---
title: "Making a class testable"
description: "My answer to \"Making a class testable\" on Stack Overflow"
date: 2011-04-25
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - unit-testing
  - mocking
  - internal
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5782848"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5782770):*

> So I have a class called `User`. It has an `internal` constructor. I want to create a `User` object though so I can mock it like this:
> 
> ```
> public ISessionManagerInstance MockedSessionManager()
> {
>     var manager = new Mock<ISessionManagerInstance>();
>     var company = new Chatham.Web.Business.Classes.Company(500, "", "", Enumerations.WebRelationshipInfo.NotSet, "", 0, 0, Data.Login.TeamOwnership.NotSet, 0, 0, false, null, false);
>     manager.Setup(p => p.Company).Returns(company);
> 
>     Chatham.Web.Business.Classes.User displayUser = typeof(Chatham.Web.Business.Classes.User);
>     displayUser.EntityID = 1786;
>     manager.Setup(p => p.DisplayUser).Returns(displayUser);
> 
>     return manager.Object;
> }
> 
> ```
> 
> Now, `Company` has a constructor, so that's easy. But `User` has one that's only internal. Is there any way I can create a `User` and just set one `int` property on it so I can pass that object back on the mock?

One option would be to add your Unit Test Project as an "internal to" of your main project, this allows your unit test code access to things marked "internal" without allowing anyone else to do so. Its a simple thing to implement in the AssemblyInfo.cs file:

```
// main project AssemblyInfo.cs file 
[assembly: InternalsVisibleTo("YourProject.Tests")]

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5782848) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
