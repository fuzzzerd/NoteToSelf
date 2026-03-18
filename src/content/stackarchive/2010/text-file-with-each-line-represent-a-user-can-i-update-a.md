---
title: "Text file with each line represent a user, can I update a particular line?"
description: "My answer to \"Text file with each line represent a user, can I update a particular line?\" on Stack Overflow"
date: 2010-05-14
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - file-io
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2837193"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2837167):*

> If I have a text file like:
> 
> ```
> 123, joe blow, USA
> 
> ```
> 
> Where the first values represent:
> 
> USERID, NAME, COUNTRY
> 
> If my file has 5000 rows, could I update a particular row somehow using C#?

You have two options.

1.  Use a Stream and find the index of your row and insert some characters
2.  Load the entire file into an array, modify it and re-write the whole file.

With option number 1, your code will be more complex, but it will scale to work even if your file grows to 500,000,000 rows.

With option number 2, the code is very simple, but since you load the whole thing to memory it is not very efficent for large datasets.

For option 2, code like this might get you started:

```
var sbld = new System.Text.StringBuilder(); 
var rows = System.IO.File.ReadAllLines(@"C:\YourUserTextFile.txt");
foreach(var row in rows)
{
    if(!updateThisRow(row)) 
    {
        var ar = row.Split(',');
        var id = ar[0];
        var name = ar[1];
        var country = ar[2];
        // do update here
        sbld.AppendLine(String.Format("{0},{1},{2}", id, name, country));
    }
    else
    {
        sbld.AppendLine(row);
    }
}

System.IO.File.WriteAllText(C:\YourUserTextFile.txt", sbld.ToString());

```

The updateThisRow method might be something you write to see its a row you care to update.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2837193) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
