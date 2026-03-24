---
title: "Best way to render an object to html"
description: "My answer to \"Best way to render an object to html\" on Stack Overflow"
date: 2011-01-12
author:
  name: Nate Bross
tags:
  - c#
  - html
  - asp.net-mvc-2
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4670922"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4670862):*

> What is the best way to render a data object into html?
> 
> Take into your consideration that my object should be dynamically drawn on the page and it will be consisted of multiple controls (Labels, TextBoxes, CheckBoxes, DropdownLists ... etc).
> 
> My object is a report which contains sections.
> 
> Each sections contains groups.Groups should be drawn as an Accordion view.
> 
> Groups contains fields which will be rendered as Labels,TextBoxes, CheckBoxes or maybe DropdownLists according to the specified field type.
> 
> What is the best way to render that object?
> 
> I'm using asp.net mvc 2

*I posted the following answer:*

The best way is to create a View, then use the `Html` helper class/methods. See [here](http://weblogs.asp.net/scottgu/archive/2010/01/10/asp-net-mvc-2-strongly-typed-html-helpers.aspx), for more info.

Something like this should get you started:

```
<% Html.TextBox("stringData", Model.YourString) %>
<% Html.CheckBox("boolData", Model.YourBool) %>

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4670922) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
