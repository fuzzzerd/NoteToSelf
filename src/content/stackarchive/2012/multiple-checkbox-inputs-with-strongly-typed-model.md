---
title: "Multiple checkbox inputs with strongly typed model"
description: "A question I asked on Stack Overflow"
date: 2012-11-13
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - .net
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/13367862"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/13367862):*

I have a user object, which has three bits of data, the user, their subscription level and a list of all groups that they ARE or COULD be a member of. I need to generate a view that lets me edit this data in a smart way and I want it to be tied to my strongly typed model.

I would like to have one check box for each possible group, and allow the user of my app to check or uncheck boxes to change membership. The problem I'm having is that my action

```
[HttpPost]
public ActionResult Edit(UserModel usr)
{

}

```

never receives the values from the checkboxes in the view, but the other properties are correctly populated.

My first view looked like this:

```
...
@Html.EditorFor(m => m.UserName)
@Html.EditorFor(m => m.Subscription)
@Html.EditorFor(m => m.Membership) // just displays the string and bool values
...

```

My second stab \[also failed\]

```
...
@Html.EditorFor(m => m.UserName)
@Html.EditorFor(m => m.Subscription)

@foreach(var itm in Model.Membership) 
{
    @Html.EditorFor(_ => itm)
}
...

```

I also tried, and failed to hand craft the `<input>` tags without using `@Html.` with no luck.

This is what the UserModel looks like:

```
public class UserModel
{
    public string UserName { get; set; }
    public int Subscription { get; set; }
    public Dictionary<String, bool> Membership { get; set; } // this is the problem
}

```

---

> [Nate answered](https://stackoverflow.com/a/13367865) (0 upvotes):
>
> There may be a better way to solve this, but I ended up switching from `Dictionary<String,Bool>` to a `List<SelectListItem>`
> 
> The view code that generates correct post data is as follows:
> 
> ```
> ...
> <ul>
> @for (int i = 0; i < Model.Membership.Count; i++ )
> {
>     <li>
>         @Html.HiddenFor(_ => Model.Membership[i].Text)
>         @Html.HiddenFor(_ => Model.Membership[i].Value)
>         @Html.CheckBoxFor(_ => Model.Membership[i].Selected) @Model.Membership[i].Text
>     </li>
> }
> </ul>
> ...
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/13367862) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
