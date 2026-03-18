---
title: "find min and max values in a datatable using C#"
description: "My answer to \"find min and max values in a datatable using C#\" on Stack Overflow"
date: 2011-07-01
author:
  name: Nate Bross
tags:
  - c#
  - datatable
  - max
  - min
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6552614"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6552517):*

> > **Possible Duplicate:**  
> > [How to select min and max values of a column in a datatable?](https://stackoverflow.com/questions/2442525/how-to-select-min-and-max-values-of-a-column-in-a-datatable)
> 
> I am searching for code that could find the min and max (or first and last values) from a column in a datatable.
> 
> I have stored the datatable with four column values I want to find the min and max values from the third column(index 2) and display it to the user.
> 
> I tried many ways but all are causing exceptions...
> 
> Last i tried this code but even this is not working..
> 
> ```
> count = Convert.ToInt32(dt.Rows.Count);
> 
> start = Convert.ToInt32(dt.Rows[0][2].ToString());
> 
> end = Convert.ToInt32(dt.Rows[count-1][2].ToString());
> 
> ```
> 
> thanks vince

What datatype are `count` `start` and `end` declared as? That isn't shown in your code.

Also, the code you've provided, if working, would only give you the first and last element, NOT the minimum in the set and the maximum in the set. If you are looking for min/max, you'd need to write a loop, such as this:

```
// minimum
int min = dt.Rows[0][2]; // assuming you want the third column (index 2)
for(int i = 1; i < dt.Rows.Count; i++) 
{
    if(min > (int)dt.Rows[i][2]) min = (int)dt.Rows[i][2];
}

// maximum
int max = dt.Rows[0][2]; // assuming you want the third column (index 2)
for(int i = 1; i < dt.Rows.Count; i++) 
{
    if(max < (int)dt.Rows[i][2]) max = (int)dt.Rows[i][2];
}

```

Obviously these can also be combined into a single loop:

```
// minimum and maximum
int max = dt.Rows[0][2]; // assuming you want the third column (index 2)
int min = dt.Rows[0][2]; // assuming you want the third column (index 2)
for(int i = 1; i < dt.Rows.Count; i++) 
{
    if(max < (int)dt.Rows[i][2]) max = (int)dt.Rows[i][2];
    if(min > (int)dt.Rows[i][2]) min = (int)dt.Rows[i][2];
}

```

@marc\_s' answer is more elegant for your specific use case (data table), but mine will work for any data set in an indexed collection.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6552614) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
