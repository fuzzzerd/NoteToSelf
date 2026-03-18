---
title: "What SQL Server DataType should I use for a Text field which will be JOINED, &quot;LIKE&#39;d&quot; and Queried against a lot?"
description: "A question I asked on Stack Overflow"
date: 2010-09-13
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - t-sql
  - database-design
  - types
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3703774"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3703774):*

The title really says it all, a bit more info though for those who bothered to click.

*   Strings will be of variable length typically between 2-5 characters in length, could occasionalyl exceed 5 characters and be upwards of 10. Never more than 10.
*   Will be queried on like such:
    *   `SELECT ... WHERE ... = 'abcd';`
    *   `SELECT ... WHERE ... LIKE 'ab%';`
*   Will be used in table JOINS.

I'm wondering if I should use nvarchar(10) or char(10) or varchar(10)? I don't really know what the advantages or disadvantages of the above are for a case like mine. I appreciate any input you may have.

---

> [marc_s answered](https://stackoverflow.com/a/3703814) (7 upvotes):
>
> `CHAR(10)` will be padded to the defined length with spaces, e.g. if you have `CHAR(10)` and store "Stack" in it, the contents will really be "Stack.....". Works great for things like state abbreviation (always 2 chars). But the padding does make the querying a bit more cumbersome at time.
> 
> `VARCHAR(10)` will store as many chars as needed - more efficient, but more so for larger strings.
> 
> `NVARCHAR(10)` will be the same - variable length - but with 2 bytes for each character (and `NCHAR(10)` is the same as `CHAR(10)` - only 2 bytes per character). Great for when you need to regularly support e.g. Asian, Cyrillic, or Arabic characters or other "non-Latin" alphabets. If you have Western European languages only (English, French, German, Spanish etc.), it's a waste of space.
> 
> My gut feeling tells me that `CHAR/NCHAR` might be a tad quicker when joining, but I don't think it'll really be a significant difference. Otherwise, if you have to reserve 10 characters for each entry, and most of them are only 2 to 5 chars, you are wasting some space, so that's a downside for the `CHAR/NCHAR` types.
> 
> So if I had to decide, I'd probably use `VARCHAR(10)` (without knowing all your detailed requirements, that is).

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Rarely, if ever after its been inserted.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3703774) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
