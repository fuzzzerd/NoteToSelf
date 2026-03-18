---
title: "ASP.NET MVC Strongly Typed View With DropDownList"
description: "A question I asked on Stack Overflow"
date: 2010-07-06
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - .net
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3189746"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3189746):*

Long story short, I'm trying to add a few extra items to ViewData to make my life easier, and its an edge case that doesn't really justify its own model just for this one case. Keep reading for more specific details.

So I have a strongly typed edit view for one of my objects, everything works great until I try to put a dropdownlist on the view with an ID that does not match a property of my class.

I have this

```
public class MyModel
{
    public String Name {get;set;}
    public int ID {get;set;}
    public MyOtherModel Other {get;set;}
}
public class MyOtherModel
{
    public String Name {get;set;}
    public int ID {get;set;}
}

```

I am able to update the `Name` property.

I'd also like to set the `Other.ID` property from a DropDownList, but its not letting me do that.

My Controller looks like this

```
public ActionResult EditView()
{
    var da = new DataAccessClass();
    var Names = da.ReadActive(); // returns MyOtherModel
    var sli = new SelectList(evNames, "ID", "Name");
    ViewData["OtherModelNames"] = sli;
    return View();
}

```

My View looks like this:

```
<p>
    <label for="EndTime">Name:</label>
    <%= Html.TextBox("Name") %>
    <%= Html.ValidationMessage("Name", "*")%>
</p>
<p>
    <label for="EndTime">Other Name:</label>
    <%= Html.DropDownList("OtherNameIDList", (SelectList)ViewData["OtherModelNames"]) %>
    <%= Html.ValidationMessage("OtherNameIDList", "*")%>
</p>

```

I get an error on this line `<%= Html.DropDownList("OtherNameIDList", (SelectList)ViewData["Names"]) %>`

"There is no ViewData item with the key 'OtherNameIDList' of type 'IEnumerable'."

My expectation is that in the controller action that accepts the POST, I will manually use the FormCollection\[\] to read out that ID and populate MyOtherModel with the correct ID.

---

> [gnome answered](https://stackoverflow.com/a/3189809) (1 upvotes):
>
> In the controller try:
> 
> ```
> public ActionResult EditView()
> {
>     var da = new DataAccessClass();
>     var Names = da.ReadActive(); // returns MyOtherModel
>     var sli = new SelectList(evNames, "ID", "Name");
>     ViewData.Add("OtherModelNames", new SelectList("ID", "Name", ""));
>     return View();
> }
> 
> ```
> 
> The in the view
> 
> ```
> Html.DropDownList("OtherModelNames")
> 
> ```
> 
> To get the Other.Id in the dropdownlist, just create a static int in the class:
> 
> ```
> public static int OtherId {get { return this.Other.Id; }}
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Thanks, I fixed that, it was a typo from making the question anonymous. ;)

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3189746) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
