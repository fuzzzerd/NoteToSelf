---
title: "Drop down selectlist for next 10 years"
description: "My answer to \"Drop down selectlist for next 10 years\" on Stack Overflow"
date: 2014-05-21
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc-4
  - razor
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23786537"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23786472):*

> I need to write a function that return next 10 year selectlist. I am hard coding at the moment and still working on how to get this done. How to write a function that could return any period that I want e.g next 20 years
> 
> ```
> //View
> @Html.DropDownListFor(model => model.CardExpiryYear, vmConstants.listExpiryYears)
> 
> //Partial Class
> public static partial class vmConstants
> {
> public static SelectList listExpiryYears = new SelectList(new[]
>         {
>                 new{  Name ="" , ID = ""}, 
>                 new{  Name ="2014" , ID = "2014"}, 
>                 new{  Name ="2015" , ID = "2015"}, 
>                 new{  Name ="2016" , ID = "2016"}, 
>                 new{  Name ="2017" , ID = "2017"}, 
>                 new{  Name ="2018" , ID = "2018"}, 
>                 new{  Name ="2019" , ID = "2019"}, 
>                 new{  Name ="2020" , ID = "2020"}, 
>                 new{  Name ="2021" , ID = "2021"}, 
>                 new{  Name ="2022" , ID = "2022"}, 
>                 new{  Name ="2023" , ID = "2023"}, 
>                 new{  Name ="2024" , ID = "2024"}, 
>                 new{  Name ="2025" , ID = "2025"},
>                 new{  Name ="2026" , ID = "2026"},
>         },
>         "ID", "Name", 1);
> }
> 
> ```

You should be able to use [`Enumerable.Range`](http://msdn.microsoft.com/en-us/library/vstudio/system.linq.enumerable.range%28v=vs.100%29.aspx) and [`DateTime.Now.Year`](http://msdn.microsoft.com/en-us/library/system.datetime.now%28v=vs.110%29.aspx). Something like this should get you started.

```
var years = Enumerable.Range(DateTime.Now.Year, 10);
var select = new SelectList(years.Select(y => new SelectListItem() 
{ 
    Text = y.ToString(), Value = y.ToString() 
}));

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @user3650406 Not sure what issue you're having exactly. Might be best to ask a new question. I can say that the code I posted should live in the controller, and it should set a `ViewBag.SomeName`, and then you should do `@Html.DropDownList("SomeName")` and that should get you started.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23786537) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
