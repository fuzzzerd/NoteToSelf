---
title: "Return muliple selectlist with one actionresult"
description: "My answer to \"Return muliple selectlist with one actionresult\" on Stack Overflow"
date: 2011-08-09
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
  - model
  - selectlist
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6997752"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6997632):*

> I'd like to display 2 SelectList in one View. So obviously, I can only use 1 ActionResult to render the view.
> 
> ```
> public ActionResult IndexStudents(Docent docent, int lessonid, int classid)
>         {
>             return View(new SelectList(docent.ReturnStudentsNormalAsString(lessonid, classid)));
>             return View(new SelectList(docent.ReturnStudentsNoClassAsString(lessonid, classid)));            
>         }
> 
> ```
> 
> But of course, this does not work. How could I fix it? Maybe making use of a Dictionary?
> 
> I want my output look like this:
> 
> ```
> <div class="editor-field">
>                      <%: Html.DropDownList("IndexStudentsNormal", 
>                     Model as SelectList) %> 
>  </div>
> <div class="editor-field">
>                      <%: Html.DropDownList("IndexStudentsNoClass", 
>                     Model as SelectList) %> 
>  </div>
> 
> ```
> 
> So I'd like to use 2 models, one for each selectlist... one with normal students and one with students who are not subscribed for lessons.
> 
> How could I do that?

*I posted the following answer, which was chosen as the accepted answer:*

You need to define a model with two SelectLists:

```
// new class in your project
public class SelectListModel
{
    public SelectList SL1 { get; set; }
    public SelectList SL2 { get; set; }
}


// updated version of your ActionResult    
public ActionResult IndexStudents(Docent docent, int lessonid, int classid)
{
    var myslm = new SelectListModel 
    {
        SL1 = new SelectList(docent.ReturnStudentsNormalAsString(lessonid, classid),
        SL2 = new SelectList(docent.ReturnStudentsNoClassAsString(lessonid, classid)
    };
    return View(myslm);
}


// updated view code
<div class="editor-field">
    <%: Html.DropDownList("IndexStudentsNormal", Model.SL1 as SelectList) %>  
</div>
<div class="editor-field">
    <%: Html.DropDownList("IndexStudentsNoClass", Model.SL2 as SelectList) %>
</div>

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6997752) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
