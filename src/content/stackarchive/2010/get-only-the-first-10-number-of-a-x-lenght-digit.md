---
title: "Get only the first 10 number of a X lenght digit"
description: "My answer to \"Get only the first 10 number of a X lenght digit\" on Stack Overflow"
date: 2010-08-28
author:
  name: Nate Bross
tags:
  - c#
  - floating-point
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3591641"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3591633):*

> I have a method , that calculates distance between two xyz cords, and return me a nice long double number like 10,12345678963235. But I only need 10,12345 , that would be enought for me. How can I do this? This is the method that returns me the value:
> 
> ```
> public static double Distance(Vector3 v1, Vector3 v2)
> {        
>     return
>     (
>         Math.Sqrt
>         (
>             (v1.X - v2.X) * (v1.X - v2.X) +
>             (v1.Y - v2.Y) * (v1.Y - v2.Y) +
>             (v1.Z - v2.Z) * (v1.Z - v2.Z)
>         )
>     );
> }
> 
> ```
> 
> Thank you!

*I posted the following answer, which received 3 upvotes:*

After re-reading the question, I think the only option you have is to convert to a string, take the first 10 characters, then convert back to double.

If your number is a decimal (you've got a `,` not a `.` so I'm not sure) the method below should work, otherwise you'll need to do the string thing.

* * *

```
Math.Round(
    Math.Sqrt 
    ( 
        (v1.X - v2.X) * (v1.X - v2.X) + 
        (v1.Y - v2.Y) * (v1.Y - v2.Y) + 
        (v1.Z - v2.Z) * (v1.Z - v2.Z) 
    ), 5);

```

[http://msdn.microsoft.com/en-us/library/aa340228.aspx](http://msdn.microsoft.com/en-us/library/aa340228.aspx)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You could put the call to `Round` inside the Distance method.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3591641) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
