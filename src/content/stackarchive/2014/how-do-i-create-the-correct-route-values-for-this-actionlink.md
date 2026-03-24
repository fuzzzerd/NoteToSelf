---
title: "How do I create the correct route values for this ActionLink?"
description: "My answer to \"How do I create the correct route values for this ActionLink?\" on Stack Overflow"
date: 2014-04-02
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
  - actionlink
  - routevalues
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/22821229"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1810063):*

> The Model of `SearchResults.aspx` is an instance of `PersonSearch`; when the request for a new page arrive (a GET request), the action method should take it and compute the new results.
> 
> ```
> [AcceptVerbs(HttpVerbs.Get)]
> public ActionResult SearchResults(PersonSearch search, int? page)
> {
>     ViewData["Results"] = new PaginatedList<Person>(_searchService.FindPersons(search), page ?? 0, 1);
>     return View("SearchResults", search);
> }
> 
> ```
> 
> Then I have to generate the previous/next links:
> 
> ```
> <%= Html.ActionLink("Next Page >", "SearchResults", routeValues) %>
> 
> ```
> 
> If I use `routeValues = ViewData.Model` I can see the object properties passed the address, but I can't add the "page" parameter.

*I posted the following answer, which received 2 upvotes:*

If you are using Razor (I realize OP asked four years ago before Razor was invented, but people finding this maybe using it).

I was able to get something working by using an inline @helper method.

```
@helper RunnerLink(PersonSearch model, int page)
{
    var routeParms =new RouteValueDictionary(model.GetType().GetProperties().ToDictionary(p => p.Name, p => p.GetValue(model, null)));
    routeParms.Add("page", page.ToString());
    routeParms.Add("Controller", "Property");
    @Html.ActionLink("Search", "Index", routeParms)
}

```

Usage would be simple --

```
@RunnerLink(myPersonSearchInstance, 1)

```

It isn't the most elegant solution, but it works well if you want to pass an object in as a routeValue, but you need to pass additional items, such as `Controller`, `Area` or in OPs case `page`.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/22821229) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
