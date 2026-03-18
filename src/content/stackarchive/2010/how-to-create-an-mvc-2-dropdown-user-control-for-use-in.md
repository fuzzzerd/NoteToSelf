---
title: "How to create an MVC 2 dropdown user control for use in multiple views"
description: "My answer to \"How to create an MVC 2 dropdown user control for use in multiple views\" on Stack Overflow"
date: 2010-08-12
author:
  name: Nate Bross
tags:
  - asp.net-mvc-2
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3470188"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3470122):*

> I'm new to MVC and the new paradigm hasn't clicked yet. I want to create a user control that is a simple dropdown and uses data from a database to populate its items. The dropdown would be useable in any view I chose. At this point I don't need the control to be data/table agnostic, I'd settle for making the user control strongly typed like a view.
> 
> The scenario I'm looking at currently is to use the SelectedIndexChanged event (or its equivalent in MVC 2) to populate a table of related data.
> 
> Here is the markup from the Home\\Index.aspx page for the html helper I'm trying to use.
> 
> ```
> <%: Html.DropDownList("SalesTerritories", new SelectList(MvcAdventure.Models.SalesTerritory, "TerritoryID", "Name")) %>
> 
> ```
> 
> The dropdown helper doesn't work because 'MvcAdventure.Models.SalesTerritory' is invalid in this context (as the runtime told me when it went to render the page).
> 
> thanks,
> 
> Mike

I believe what you are looking for is a [Templated Helper](http://msdn.microsoft.com/en-us/library/ee308450.aspx).

It lets you define a bit of markup that you can reuse all over your application, like so:

```
<td>
    <%= Html.DisplayFor(Product=> item.SellStartDate, "Date") %> 
</td>

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3470188) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
