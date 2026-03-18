---
title: "&quot;Break&quot; a While Loop in ASP.NET (C#)"
description: "My answer to \"&quot;Break&quot; a While Loop in ASP.NET (C#)\" on Stack Overflow"
date: 2011-06-01
author:
  name: Nate Bross
tags:
  - asp.net
  - sql-server
  - loops
  - while-loop
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6205659"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6205618):*

> I'm using the following code to output entries from my database:
> 
> ```
>   while(reader.Read()) 
> 
>   { 
>       Label1.Text += "<div>" + reader["Title"] + "</div>";
> 
>   }
> 
> ```
> 
> However, I'd like for every 2nd entry for a "class" to be added to my div.
> 
> So ultimately, my HTML could look like:
> 
> ```
> <div>Title1</div>
> <div class="two">Title2</div>
> <div>Title3</div>
> <div class="two">Title4</div>
> ...
> 
> ```
> 
> Many thanks for any pointers.

Add a counter, then add 1 every time through the loop. Use the mod operator to add class every other time.

```
int i = 0;
while(reader.Read())
{
    if(i % 2 == 0) 
    { 
        Label1.Text += "<div>" + reader["Title"] + "</div>";
    }
    else 
    { 
        Label1.Text += "<div class=\"two\">" + reader["Title"] + "</div>";
    }
    i++;
}

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Many of the other answers are the same, they simply are using syntactic sugar to spoil readability.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6205659) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
