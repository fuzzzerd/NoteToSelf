---
title: "WPF Databinding based on conditions"
description: "My answer to \"WPF Databinding based on conditions\" on Stack Overflow"
date: 2009-06-02
author:
  name: Nate Bross
tags:
  - wpf
  - data-binding
  - controls
  - custom-controls
  - datasource
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/940250"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/940210):*

> **Goal** Develop a custom control which displays summary data for a specified week.
> 
> The data passed in would be as follows:
> 
> ```
> 3rd May 2009        Customer A     $2000
> 4th May 2009        Customer A     $3900
> 6th May 2009        Customer B     $1900
> 
> ```
> 
> The expected display would be
> 
> ```
>     3rd May      4th May        5th May        6th May
>    Customer A   Customer A                    Customer B
>     $2000        $1900                          $1900 
> 
> ```
> 
> As you can see the data is conditional based on the date.
> 
> Can items be databound based on a condition in WPF?
> 
> i.e. show summary when data source date == current items date
> 
> or should I just stick to coding this logic in C# behind?
> 
> \----------------- Edit for Andy's questions --------------------
> 
> I can make it implement an interface but not a base class.
> 
> What I want to do is have the control showing 1 week from a year worth of dates this will be set via a property called current week.
> 
> Then when the known data source (see example table above) is passed in I want any day items in the control to pull their data from the data source if there is any, and if not then still show but just show the date.
> 
> The data would be a list of grid summary objects
> 
> ```
> public class GridSummary
> {
>      public DateTime SummaryDate;
>      public Client Customer;
>      public decimal Amount;
> }
> 
> ```

*I posted the following answer:*

You can do this:

```
if(a)
    this.DataSource = a;
else
    this.DataSource = b;

```

I'm not sure that is what you meant though.

Are you doing your own rendering? or are you building your control off of the base controls? You maybe able to use nested controls to get what you want and you can conditionally control the nested controls.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/940250) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
