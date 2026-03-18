---
title: "How unit testing is better in ASP.NET MVC than Web Forms?"
description: "My answer to \"How unit testing is better in ASP.NET MVC than Web Forms?\" on Stack Overflow"
date: 2010-07-15
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc
  - unit-testing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3259459"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3259453):*

> I have just started to learn ASP.NET MVC. When comparing ASP.NET MVC with Web Forms one of the main advantage of MVC is always told to be better support of Unit Testing. Can I got a good explanation of how it has better support?
> 
> Edit : If possible please provide example in both.

Because you can create a controller object in your unit test, call some actions on it, and see the result right away, then you can `Assert.IsBlahBlahBlah();` on it.

For example,

```
    [TestMethod]
    public void Index()
    {
        // Arrange
        HomeController controller = new HomeController();

        // Act
        ViewResult result = controller.Index() as ViewResult;

        Assert.IsNotNull(result);
    }

```

With that method, you now know that your Index view is returned from the Home controller.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3259459) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
