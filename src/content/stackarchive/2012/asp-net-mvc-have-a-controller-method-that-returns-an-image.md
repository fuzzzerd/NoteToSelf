---
title: "ASP .NET MVC - Have a controller method that returns an image in the response?"
description: "My answer to \"ASP .NET MVC - Have a controller method that returns an image in the response?\" on Stack Overflow"
date: 2012-02-13
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9266039"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9265995):*

> How can I make a controller method called `GetMyImage()` which returns an image as the response (that is, the content of the image itself)?
> 
> I thought of changing the return type from `ActionResult` to `string`, but that doesn't seem to work as expected.

Check out the [FileResult](http://msdn.microsoft.com/en-us/library/system.web.mvc.fileresult.aspx) class. For example usage see [here](https://stackoverflow.com/questions/1375486/how-to-create-file-and-return-it-via-fileresult-in-asp-net-mvc).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9266039) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
