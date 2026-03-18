---
title: "ASP.NET MVC Actions that return different views, or just make a ton of Actions?"
description: "A question I asked on Stack Overflow"
date: 2010-03-12
author:
  name: Nate Bross
tags:
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2435741"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2435741):*

So, I am in a situation, where I need to display a different view based on the "Role" that the authenticated user has.

I'm wondering which approach is best here:

```
[Authorize(Roles="Admin")]
public ActionResult AdminList(int? divID, int? subDivID) 
{
    var data = GetListItems(divID.Value, subDivID.Value);
    return View(data);
}

[Authorize(Roles = "Consultant")]
public ActionResult ConsultantList(int? divID, int? subDivID)
{
    var data = GetListItems(divID.Value, subDivID.Value);
    return View(data);
}            

```

or should I do something like this

```
[Authorize]
public ActionResult List(int? divID, int? subDivID)
{
    var data = GetListItems(divID.Value, subDivID.Value);
    if(HttpContenxt.User.IsInRole("Admin")) 
    { return View("AdminList", data ); }

    if(HttpContenxt.User.IsInRole("Consultant")) 
    { return View("ConsultantList", data ); }

    return View("NotFound");
}

```

---

> [tvanfosson answered](https://stackoverflow.com/a/2435784) (5 upvotes):
>
> In the case where the action is conceptually the same, but the display is different, I would have one action and return different views depending on your discriminator. I'd go with your second example, slightly modified. Note that there is no need to get the data if the user isn't in an appropriate role.
> 
> ```
> [Authorize] 
> public ActionResult List(int? divID, int? subDivID) 
> { 
>     var view = HttpContext.User.IsInRole("Admin")
>                    ? "AdminList"
>                    : (HttpContext.User.IsInRole("Consultant")
>                          ? "ConsultantList"
>                          : null);
>     if (view == null)
>     {
>         return View("NotFound");
>     }
> 
>     var data = GetListItems(divID.Value, subDivID.Value); 
> 
>     return View( view, data );
> }
> 
> ```
> 
> You realize, of course, that you have the potential for an unhandled exception when you refer to the Value of a potentially null `Nullable<int>`, correct?
> 
> Also, you could, if doing this frequently, refactor the construction of the view prefix into a common method.
> 
> ```
> public string GetRolePrefix()
> {
>     return HttpContext.User.IsInRole("Admin")
>                    ? "Admin"
>                    : (HttpContext.User.IsInRole("Consultant")
>                          ? "Consultant"
>                          : null);
> }
> 
> ```
> 
> Then call it as
> 
> ```
> ...
> var prefix = GetRolePrefix();
> if (prefix == null)
> {
>     return View("NotFound");  // more likely "NotAuthorized" ???
> }
> 
> ...get model...
> 
> return View( prefix + "List", data );
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @MarcinHabuszewski thanks, I've added the parentheses.

**Nate** (0 upvotes): That is what I thought too, but I just wanted to see if anyone else thought through this as well and came out to a different resolution than I did.

**tvanfosson** (4 upvotes): @Developer Art - except that your view will need to know which action to invoke depending on the role. Better to just have the controller determine which view to use depending on the role IMO.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2435741) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
