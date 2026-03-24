---
title: "Which of these is the better architecture/design approach?"
description: "My answer to \"Which of these is the better architecture/design approach?\" on Stack Overflow"
date: 2010-11-12
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - vb.net
  - architecture
  - dependency-injection
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4168833"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4168573):*

> > **Objective**  
> > To write a effecient Active Directory library to ease the work of technicals who are responsible to create access models into the domain controller's Active Directory. This library must allow the following:
> 
> 1.  Basic operations: Add, Modify, Delete, List entries;
> 2.  An entry may either be an organizational unit, group or user (no further need required as of now);
> 
> I thought about having a class which would represent the domain with which we want to work with.
> 
> ```
> public class Domain {
>     public Domain(string root) {
>         Root = root;
>         Entries = new Dictionary<string, IDirectoryEntry>();
>     }
> 
>     public string Root { get; private set; }
>     public Dictionary<string, IDirectoryEntry> Entries { get; private set; }
> }
> 
> ```
> 
> Then, I have used dependency injection to enforce the belonging constraint to a domain of an entry. For example:
> 
> ```
> public abstract class DirectoryEntry : IDirectoryEntry {
>     public DirectoryEntry(Domain domain, string name) {
>         Domain = domain;
>         Name = name;
> 
>         Domain.Entries.Add(name, this);
>     }
> 
>     public Domain { get; private set; }
>     public Name { get; set; }
> }
> 
> public class OrganizationalUnit : DirectoryEntry {
>     public OrganizationalUnit(Domain domain, string name)
>         : base(domain, name) {
>     }
> }
> 
> public class Group : DirectoryEntry {
>     public Group(Domain domain, string name)
>         : base(domain, name) {
>     }
> }
> 
> ```
> 
> Now, notice that I add the entry using `Domain.Entries.Add()` to the given domain upon instantiation of an `IDirectoryEntry` interface.
> 
> > **Questions**  
> 
> 1.  Is this a good practice, if I don't want the user to change the `Domain` property of any `IDirectoryEntry` instances?
>     
> 2.  Would it be preferable to simply let this `Domain.Entries.Add()` line go away, and have a method within my `Domain` class that would add an entry to the domain?
>     
> 
> **Code Sample for question #2**
> 
> ```
> public class Domain {
>     //See above for other members.
>     public void AddEntry<T>(T entry) {
>         Entries.Add(entry.Name, entry);
>     }
> }
> 
> ```
> 
> * * *
> 
> *   **What is, according to you, the best architecture in this situation?**  
>       
>     Both seem to be good enough to be considered, so I'm a bit confused about it wanting the easiest possible way for the library end-users.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

Have you looked at .NET 3.5/4's System.DirectoryServices.AccountManagement namespace? It provides much of the functionality you require in a more unified and .NET friendly interface. I personally have written a library with similar requirements to yours, using a combination of both.

Overall, I think your design looks good, but I don't know enough about your problem domain to know if you'll be painting yourself into a corner so to speak.

Specifically, to Question 1, I think that will work; however, anyone with a reference to an instance of `Domain` could remove any given Entry.

To Question 2, that is very likely how I would implement it myself, unless I had a compelling reason not to.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I do not see any issue requiring a `Domain` object in the constructor of your other classes; while its tightly coupled, if you migrate off LDAP the concept of a `Security Group` and an `Organizational Unit` will likely go away and be replaced with something else.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4168833) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
