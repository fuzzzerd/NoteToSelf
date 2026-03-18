---
title: "Sorting a dataset with a dataview"
description: "A question I asked on Stack Overflow"
date: 2009-08-31
author:
  name: Nate Bross
tags:
  - .net
  - sorting
  - dataset
  - dataview
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1359154"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1359154):*

This code correctly fetches data, and displays it; however, the sort is completely ignroed.

```
DataTable dt = f.Execute().Tables[0]; 
dt.DefaultView.Sort = summaryColumn;
rptInner.DataSource = dt.DefaultView;
rptInner.DataBind();

```

Is there something I can do to force the view to sort itself?

(f.Execute() returns a dataset with at table at position 0, summaryColumn is the name of a column in the table, rptInner is a repeater control)

**edit**

summaryColumn is a string variable that has the exact name of the column I want to sort on. I am not using sproc or anything, the DataSet is given to me and I'm responsible for sorting it.

---

> [Charles Bretana answered](https://stackoverflow.com/a/1359174) (4 upvotes):
>
> if summaryColumn is the name of the coulmn in the dataview that you want to sort on, put it into double quotes:
> 
> ```
> DataTable dt = f.Execute().Tables[0]; 
> DataView dv = dt.DefaultView;
> dv.Sort = "summaryColumn";
> rptInner.DataSource = dv;
> rptInner.DataBind();
> 
> ```
> 
> If it's a string variable holding the name of the column, make sure it's value is the exact string name of the column you want to sort on...

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1359154) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
