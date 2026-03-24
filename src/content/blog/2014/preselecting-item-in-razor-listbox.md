---
title: "Preselecting item in Razor ListBox"
description: "My answer to \"Preselecting item in Razor ListBox\" on Stack Overflow"
date: 2014-05-27
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
  - razor
  - listbox
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23891731"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23891520):*

> I have a database, that contains an tinyint column with "1" or "0" for marking as "yes" or "no".
> 
> In my razor view I want to Show this in a ListBox. When reading rows out of the database, I want to preselect the corresonding item in the ListBox.
> 
> Code here is simplified:
> 
> ```
> var mItems = new List<SelectListItem>{
>     new SelectListItem { Value="1", Text="Yes"},
>     new SelectListItem { Value="0", Text="No"}
> };
> 
> int mIsProofed = 0;
> 
> // This doesn´t preselect my item:
> mItems.Select(x => x.Value == mIsProofed.ToString());
> 
> :
> 
> @Html.ListBox("mylistbox", mItems)
> 
> ```
> 
> Any ideas how to resolve this?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

You need to set the `Selected` property on the [`SelectListItem`](http://msdn.microsoft.com/en-us/library/system.web.mvc.selectlistitem%28v=vs.118%29.aspx).

I'd update your code to be similar to this:

```
var selectedItem = mItems.FirstOrDefault(x => x.Value == mIsProofed.ToString());
if(selectedItem != null) 
{
     selectedItem.Selected = true;
}

```

This will find the item you wish to select, and update its selected property if it is found, otherwise it does not modify anything.

The [`.Select()` method](http://msdn.microsoft.com/en-us/library/vstudio/bb548891%28v=vs.100%29.aspx) you are using is used to perform a projection on the list, in other words it is more like the `select` command in SQL, where you specify a subset (or the full set) of data.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23891731) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
