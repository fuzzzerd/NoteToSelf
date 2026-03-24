---
title: "ASP.NET MVC - Where to throw the exceptions?"
description: "My answer to \"ASP.NET MVC - Where to throw the exceptions?\" on Stack Overflow"
date: 2010-09-12
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - exception
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3694985"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3694977):*

> Best practice to throw the exception if no entry found in the db?
> 
> ```
> // CONTROLLER
> public ActionResult Edit(int categoryId, int id)
> {
>     Product target = Products.GetById(id);
>     if (target == null) throw new HttpException(404, "Product not found");
> 
>     return View("Edit", target);
> }
> 
> // REPOSITORY
> public Product GetById(int id)
> {
>     return context.Products.FirstOrDefault(x => x.productId == id);
> }
> 
> ```
> 
> or
> 
> ```
> // CONTROLLER
> public ActionResult Edit(int categoryId, int id)
> {
>     return View("Edit", Products.GetById(id));
> }
> 
> // REPOSITORY
> public Product GetById(int id)
> {
>     Product target = context.Products.FirstOrDefault(x => x.productId == id);
>     if (target == null) throw new HttpException(404, "Product not found with given id");
> 
>     return target;
> }
> 
> ```

*I posted the following answer:*

I would throw `HttpException` in the controller, and return `null` from the repository.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3694985) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
