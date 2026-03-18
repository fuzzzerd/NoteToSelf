---
title: "Getting records from between Date X and Date Y from my Access database?"
description: "My answer to \"Getting records from between Date X and Date Y from my Access database?\" on Stack Overflow"
date: 2010-01-12
author:
  name: Nate Bross
tags:
  - c#
  - sql
  - winforms
  - ms-access
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2051348"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2051325):*

> I have a table called Recharge in a Access Database.
> 
> Some of the fields are RechargeDate, Account, Number, etc.
> 
> I wanted to retrieve all records between two dates so I wrote the following query:
> 
> ```
> string Query = "select * from Recharge where Account='" + comboBox1.Text + "' 
> and RechargeDate between '"+dateTimePicker1.Value.Date.ToShortDateString()+"' and '"+dateTimePicker2.Value.Date.ToShortDateString()+"'"
> 
> ```
> 
> The query runs fine but the only problem I've run in to is that I am only able to retrieve dates from a single Month.
> 
> If I request records from a span that encompasses more than a single month, I do not get the proper result.
> 
> Any help?
> 
> the query executes nice but the problem is i can only able to get details between the dates in single month, if the starting month and ending month differs i cant get the proper result plzz help me

I've used this with success, `Recharge >= Date1 and Recharge <= Date2` I haven't used `between` maybe it is more efficent, but I use the former.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2051348) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
