---
title: "C# Design Questions"
description: "My answer to \"C# Design Questions\" on Stack Overflow"
date: 2010-04-28
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2733849"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2733751):*

> How to approach unit testing of private methods?
> 
> I have a class that loads Employee data into a database. Here is a sample:
> 
> \>
> 
> ```
> public class EmployeeFacade   
> {
>     public Employees EmployeeRepository = new Employees();  
>     public TaxDatas TaxRepository = new TaxDatas();  
>     public Accounts AccountRepository = new Accounts();  
>     //and so on for about 20 more repositories etc.  
> 
>     public bool LoadAllEmployeeData(Employee employee)  
>     {   
>         if (employee == null)
>             throw new Exception("...");
> 
> 
>         bool exists = EmployeeRepository.FetchExisting(emps.Id);
>         if (!exists)
>         {   
>             EmployeeRepository.AddNew(); 
>         }
> 
>         try
>         {
>             EmployeeRepository.Id = employee.Id;
>             EmployeeRepository.Name = employee.EmployeeDetails.PersonalDetails.Active.Names.FirstName;
>             EmployeeRepository.SomeOtherAttribute;
>         }
>         catch() {}
> 
>         try
>         {
>             emps.Save();
>         }
>         catch(){}   
> 
> 
>         try
>         {
>             LoadorUpdateTaxData(employee.TaxData);
>         }
>         catch() {}
> 
>         try
>         {
>         LoadorUpdateAccountData(employee.AccountData);
>         }
>         catch() {}
>         ... etc. for about 20 more other employee objects
> 
>     }  
> 
>     private bool LoadorUpdateTaxData(employeeId, TaxData taxData)
>     {
>         if (taxData == null)
>            throw new Exception("...");
> 
>         ...same format as above but using AccountRepository 
> 
>     }
> 
>     private bool LoadorUpdateAccountData(employee.TaxData)
>     {   
>         ...same format as above but using TaxRepository 
>     }
> }
> 
> ```
> 
> I am writing an application to take serialised objects(e.g. Employee above) and load the data to the database.
> 
> I have a few design question that I would like opinions on:
> 
> A - I am calling this class "EmployeeFacade" because I am (attempting?) to use the facade pattern. Is it good practace to name the pattern on the class name?
> 
> B - Is it good to call the concrete entities of my DAL layer classes "Repositories" e.g. "EmployeeRepository" ?
> 
> C - Is using the repositories in this way sensible or should I create a method on the repository itself to take, say, the Employee and then load the data from there e.g. EmployeeRepository.LoadAllEmployeeData(Employee employee)? I am aim for cohesive class and but this will requrie the repository to have knowledge of the Employee object which may not be good?
> 
> D - Is there any nice way around of not having to check if an object is null at the begining of each method?
> 
> E - I have a EmployeeRepository, TaxRepository, AccountRepository declared as public for unit testing purpose. These are really private enities but I need to be able to substitute these with stubs so that the won't write to my database(I overload the save() method to do nothing). Is there anyway around this or do I have to expose them?
> 
> F - How can I test the private methods - or is this done (something tells me it's not)?
> 
> G- "emps.Name = employee.EmployeeDetails.PersonalDetails.Active.Names.FirstName;" this breaks the Law of Demeter but how do I adjust my objects to abide by the law?

> A - I am calling this class "EmployeeFacade" because I am (attempting?) to use the facade pattern. Is it good practace to name the pattern on the class name?

I don't think testing private methods a good idea; however, you can test "internal" classes, which are similar to private in the sense that external assemblies will not have access to them, by marking them as Internal Visible to your unit test project.

AssemblyInfo.cs -- `[assembly: InternalsVisibleTo("YourClass.Tests")]`

> B - Is it good to call the concrete entities of my DAL layer classes "Repositories" e.g. "EmployeeRepository" ?

I do this frequently, I don't think there is anything wrong with it.

> C - Is using the repositories in this way sensible or should I create a method on the repository itself to take, say, the Employee and then load the data from there e.g. EmployeeRepository.LoadAllEmployeeData(Employee employee)? I am aim for cohesive class and but this will requrie the repository to have knowledge of the Employee object which may not be good?

Unless I don't understand correctly, I would keep them seperate. I typically use my Repository classes as simply CRUD helpers, I would write a wrapper around the repository that exposes the functionality you need.

> D - Is there any nice way around of not having to check if an object is null at the begining of each method?

If there is, I don't know it, I would just use `ArgumentNullException()`

> E - I have a EmployeeRepository, TaxRepository, AccountRepository declared as public for unit testing purpose. These are really private enities but I need to be able to substitute these with stubs so that the won't write to my database(I overload the save() method to do nothing). Is there anyway around this or do I have to expose them?

See my answer for A, marking them as Internal and then setting InternalsVisible To your unit test assembly. See also [MSDN](http://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.internalsvisibletoattribute.aspx).

> F - How can I test the private methods - or is this done (something tells me it's not)?

I do not typically test private methods, and private classes that need to tested I mark as internal and use them in my test assembly.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): They are implementation details -- either they are tested by virtue of the fact that the public methods are tested, and the public methods call the private methods, or they are `internal` and makred as visible to my test assembly if need-be.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2733849) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
