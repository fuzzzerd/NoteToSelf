---
title: "Where should my &quot;filtering&quot; logic reside with Linq-2-SQL and ASP.NET-MVC in View or Controller?"
description: "A question I asked on Stack Overflow"
date: 2010-03-19
author:
  name: Nate Bross
tags:
  - .net
  - asp.net-mvc
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2479461"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2479461):*

I have a main Table, with several "child" tables. TableA and TableAChild1 and TableAChild2.

I have a view which shows the information in TableA, and then has two columns of all items in TableAChild1 and TableAChild2 respectivly, they are rendered with Partial views.

Both child tables have a bit field for VisibleToAll, and depending on user role, I'd like to either display all related rows, or related rows where VisibleToAll = true.

This code, feels like it should be in the controller, but I'm not sure how it would look, because as it stands, the controller (limmited version) looks like this:

```
return View("TableADetailView", repos.GetTableA(id));

```

Would something like this be even work, and would it be bad what if my DataContext gets submitted, would that delete all the rows that have VisibleToAll == false?

```
var tblA = repos.GetTableA(id);
tblA.TableAChild1 = tblA.TableAChild1.Where(tmp => tmp.VisibleToAll == true);
tblA.TableAChild2 = tblA.TableAChild2.Where(tmp => tmp.VisibleToAll == true);
return View("TableADetailView", tblA);

```

It would also be simple to add that logic to the RendarPartial call from the main view:

```
<% Html.RenderPartial("TableAChild1", Model.TableAChild1.Where(tmp => tmp.VisibleToAll == true); %>

```

---

> [Keith Adler answered](https://stackoverflow.com/a/2479570) (1 upvotes):
>
> It's a subject of great debate I think. To me there are two clear routes:
> 
> **Deferred Execution Route** Never use ToList, always use AsQueryable in controllers. This means only the data that is necessary for presentation is retrieved and only when it is needed in the View once ToList etc. are called.
> 
> **Presentation Shows Models** Prepare data for presentation using Model classes or results that are already filtered. Strongly type your View to the expected format.
> 
> I prefer deferred execution myself, though in a pure MVC structure the Controller should worry about getting the information and the View should only display the Mode.
> 
> Regardless, make sure you are using AsQueryable with your Repository.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2479461) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
