---
title: "Handling a null exception C#"
description: "My answer to \"Handling a null exception C#\" on Stack Overflow"
date: 2010-10-29
author:
  name: Nate Bross
tags:
  - c#
  - null
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4055281"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4055263):*

> Ok, new coder here looking for a little insight into this problem. So I have a for loop like that starts like this:
> 
> ```
> for (int i = 0; i < rowHandles.Length; i++)
> {
>       .........code....
> }
> 
> ```
> 
> rowHandles is an int array that contains rows of data. This for loop has code that deletes the rows of data when a delete button is clicked, to be specific it is a grid tool strip Delete button and this is inside the delete button click event handler. The problem is the delete button can be clicked when there are no rows left, so rowHandles.Length is equal to null. How would I prevent this from stopping the program? Is there something I could add inside the for loop, in the for loop declaration, or outside the for loop to correct this? Maybe a try catch? How would this be structured around this specific problem/loop?
> 
> Thanks for all your help - Newbie Coder

*I posted the following answer:*

Change to a `foreach` loop:

```
foreach (var rowHandle in rowHandles) 
{ 
    // use rowHandle instead of rowHandles[i]
} 

```

This way, provided the entire rowHandles object is not null (a quick null check can verify this) you will iterate over all items, and if there are no items, you wont iterate at all.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4055281) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
