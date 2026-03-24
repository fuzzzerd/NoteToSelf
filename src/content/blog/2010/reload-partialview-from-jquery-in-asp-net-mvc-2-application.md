---
title: "Reload PartialView from jQuery in ASP.NET MVC 2 application?"
description: "My answer to \"Reload PartialView from jQuery in ASP.NET MVC 2 application?\" on Stack Overflow"
date: 2010-12-07
author:
  name: Nate Bross
tags:
  - asp.net
  - jquery
  - asp.net-mvc-2
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4378563"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4378529):*

> I'm trying to use jQuery to load a PartialView. It does this fine at the first loading of the page. But then I need to be able to reload the PartialView when a save button is pressed. I get a reload, but this time the PartialView is all I get back. I.e. I don't get the PartialView loaded as a part of the main page, but rather as a page of its own. What am I doing wrong?
> 
> Here are the relevant parts of the jQuery in the View:
> 
> ```
>        $.get('<%=Url.Action("GetTasks", "Timesheet", new {id = DateTime.Today.ToShortDateString() }) %>', function (data) {
>             $('#tasksDiv').html(data);
>         }); //This part works fine on first load of the page
> 
>         $('#savenewtask').click(function (event) {
>             event.preventDefault();
>             $.get('<%=Url.Action("GetTasks", "Timesheet", new {id = DateTime.Today.ToShortDateString() }) %>', function (data) {
>                 $('#tasksDiv').html(data);
>             });
>         }); //This only loads the PartialView, but not as part of the main page...
> 
> ```
> 
> The button and the div to load in:
> 
> ```
>     <p>
>         <input type="button" value="Spara" id="savenewtask" />
>     </p>
> 
> <div id="tasksDiv">
> </div>
> 
> ```
> 
> UPDATE:
> 
> It actually worked, I had just confused the two input fields I have on the page. But I'll rephrase the question to a simple one: Is this the best way to do this sort of thing with PartialViews, or should I go about it another way? (I.e. I was just trying to figure out a way to achieve what I wanted without knowing if it is the "best practice" way of doing it).

*I posted the following answer, which was chosen as the accepted answer:*

I have typically used the [load](http://api.jquery.com/load/) method, which sets the innerHtml.

```
var url = '<%=Url.Action("GetTasks", "Timesheet", new {id = DateTime.Today.ToShortDateString() }) %>'
$("#tasksDiv").load(url);

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I always go for the path of least resistance `.load()` provides that. There is no need for a delegate/callback and the syntax reads more clearly. "Take this div, and load the content of this url into it." There is nothing wrong with doing a get+callback; I just found it to require more code; however, there may be instances where it is necessary over a simple `.load()` call, say if you wanted to process the return value before you display it...

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4378563) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
