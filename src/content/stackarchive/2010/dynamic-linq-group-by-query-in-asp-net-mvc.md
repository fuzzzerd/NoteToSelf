---
title: "Dynamic LINQ Group By Query in ASP.NET MVC"
description: "A question I asked on Stack Overflow"
date: 2010-03-15
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
  - linq
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2448611"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2448611):*

I'm wondering how to best tackle this, since what I have now works great for a hard-coded column in my view -- I'm wondering how I can extend it to allow the column to be dynamic.

CONTROLLER:

```
var dc = new DataContextDC();
return View(dc.items.Where(i=>i.IsPublic == true));

```

VIEW:

```
<% foreach (var grp in Model.GroupBy(s => s.GroupColumn)) { %>
    <%= Html.Encode(grp.Key) %>
    <% foreach (var item in grp) { %>
        <%= Html.Encode(item.Title) %>
    <% } %>
<% } %>

```

As stated, the objective is to let the user choose which column replaces "GroupColumn" above. I'd like to avoid adding any external libraries, etc.

I see using reflection (slow, but fully dynamic) or since this is one View in my application, I just duplicate the above code for each column in the database and then put a switch statement on it (quick, and dirty, but effective)

---

> [Aaronaught answered](https://stackoverflow.com/a/2448662) (4 upvotes):
>
> This is probably the kind of thing that you're going to want to use the Linq [Dynamic Query](http://weblogs.asp.net/scottgu/archive/2008/01/07/dynamic-linq-part-1-using-the-linq-dynamic-query-library.aspx) library included with the C# Linq samples. That way, you can write the query like this:
> 
> ```
> var groups = Model.GroupBy("SomeColumn, SomeOtherColumn")
> 
> ```
> 
> ...which is a great deal easier to manage if you're accepting column names from the user - most likely all you have are the column names as strings, and this library will automatically parse those out into lambda expressions for you. (You need to catch `ParseException` if you expect the possibility of invalid input).
> 
> For formatting the key, you can probably just pass it in directly to the `Html.Encode` method, as its default string representation is something like `{ ID = 1, Name = Test }`. If that's good enough then I would leave it alone, otherwise you'll have to use Reflection to parse out the individual key properties and property values.
> 
> Edit: You can use that library anywhere, if you download the samples you'll see that it is just a source code file.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2448611) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
