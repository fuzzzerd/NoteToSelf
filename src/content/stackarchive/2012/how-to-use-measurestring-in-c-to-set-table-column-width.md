---
title: "How to use MeasureString in C# to set table column width?"
description: "My answer to \"How to use MeasureString in C# to set table column width?\" on Stack Overflow"
date: 2012-08-10
author:
  name: Nate Bross
tags:
  - c#
  - string
  - graphics
  - width
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11909351"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11909119):*

> I have a pretty quick (and I'm hoping basic) question. I'm modifying some C# code for my company's website. The code draws a table for me in fixed columns, the data for which is pulled from a database. The height of the each column of the table is fixed (currently), and I need to change it so if the string is a certain length, and therefore wraps, the second line of text is viewable (instead of hidden by the next row).
> 
> From my research, it seems like I can use MeasureString (since I know the font and string) to see if the string is longer/wider than my set table column, and change the height of the row if this is so. However, I'm very new to C# programming (and haven't done much programming overall in years, besides web stuff), so I'm not sure how to get all of this implemented. I have the logic in place, and I know how to change the height, I just need to know how to get an actual number I can use logic against using the MeasureString method (and how to instantiate any variables and functions I might need to use that method).

*I posted the following answer, which received 2 upvotes:*

I believe you need to use this overload for [`MeasureString(string,font,int)`](http://msdn.microsoft.com/en-us/library/9bt8ty58.aspx):

> The width parameter specifies the maximum value of the width component of the returned SizeF structure (Width). If the width parameter is less than the actual width of the string, the returned Width component is truncated to a value representing the maximum number of characters that will fit within the specified width. **To accommodate the entire string, the returned Height component is adjusted to a value that allows displaying the string with character wrap.**

\-- From Above Linked MSDN Page (Emphasis mine)

```
// Measure string (you'll need to instansiate your own graphics object, 
// since you wont have PaintEventArgs)
SizeF stringSize = new SizeF();
stringSize = e.Graphics.MeasureString(measureString, stringFont, stringWidth);
int cellHeight = stringSize.Height;

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11909351) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
