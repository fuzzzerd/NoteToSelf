---
title: "Best way to filter a list-view in asp.net MVC"
description: "A question I asked on Stack Overflow"
date: 2010-01-21
author:
  name: Nate Bross
tags:
  - javascript
  - html
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2113071"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2113071):*

I have a list of data coming from the database and displaying in a table, that works exactly how I want.

What I would like to do, is add a DropDownList to the page that "filters" the data in the table, based on the value of the selected item in the DropDonwList.

For example, the DropDown has these values

```
Assigned To Me
Assigned To Others

```

and the list of data, has an "assignedTo" field. When the value in the dropdown changes, I would like to update the list of data.

In WebForms, I would use an UpdatePanel and a DropDownList with autoPostBack=True, how can I get the same effect in MVC?

---

> [queen3 answered](https://stackoverflow.com/a/2113212) (3 upvotes):
>
> You use JavaScript/jQuery to bind to onchange/onclick event, and there do a postback:
> 
> ```
> $(function() {
>    $("#myelement").click(function(){
>       $("#secondelement").load('<%= Url.Action("Source") %>?selected=' + $(this).val());
>    });
> }
> 
> ```
> 
> There're jQuery plugins that do similar things, for example [http://dev.chayachronicles.com/jquery/cascade/index.html](http://dev.chayachronicles.com/jquery/cascade/index.html) (not the best one, the first I found).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2113071) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
