---
title: "ASP.NET MVC unit test controller with HttpContext"
description: "My answer to \"ASP.NET MVC unit test controller with HttpContext\" on Stack Overflow"
date: 2010-03-23
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - unit-testing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2497609"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2497575):*

> I am trying to write a unit test for my one controller to verify if a view was returned properly, but this controller has a basecontroller that accesses the HttpContext.Current.Session. Everytime I create a new instance of my controller is calls the basecontroller constructor and the test fails with a null pointer exception on the HttpContext.Current.Session. Here is the code:
> 
> ```
> public class BaseController : Controller
> {       
>     protected BaseController()
>     {
>        ViewData["UserID"] = HttpContext.Current.Session["UserID"];   
>     }
> }
> 
> public class IndexController : BaseController
> {
>     public ActionResult Index()
>     {
>         return View("Index.aspx");
>     }
> }
> 
>     [TestMethod]
>     public void Retrieve_IndexTest()
>     {
>         // Arrange
>         const string expectedViewName = "Index";
> 
>         IndexController controller = new IndexController();
> 
>         // Act
>         var result = controller.Index() as ViewResult;
> 
>         // Assert
>         Assert.IsNotNull(result, "Should have returned a ViewResult");
>         Assert.AreEqual(expectedViewName, result.ViewName, "View name should have been {0}", expectedViewName);
>     }
> 
> ```
> 
> Any ideas on how to mock (using Moq) the Session that is accessed in the base controller so the test in the descendant controller will run?

*I posted the following answer, which received 1 upvote:*

I'd checkout the ASP.NET-MVC book listed here -- toward the end, there is a good section on Mocking framewors -- [http://www.hanselman.com/blog/FreeASPNETMVCEBookNerdDinnercomWalkthrough.aspx](http://www.hanselman.com/blog/FreeASPNETMVCEBookNerdDinnercomWalkthrough.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2497609) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
