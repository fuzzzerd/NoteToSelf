---
title: "EF Code First uses nvarchar(max) for all strings. Will this hurt query performance?"
description: "A question I asked on Database Administrators"
date: 2013-08-20
author:
  name: Nate Bross
tags:
  - sql-server
  - sql-server-2008-r2
  - azure-sql-database
  - entity-framework
source: "Database Administrators"
sourceUrl: "https://dba.stackexchange.com/q/48408"
---

*I [asked this on Database Administrators](https://dba.stackexchange.com/q/48408):*

I have some databases created using Entity Framework Code First; the apps are working and in general I'm pretty happy with what Code First lets me do. I am a programmer first, and a DBA second, by necessity. I am reading about DataAttributes to further describe in C# what I want the database to do; and my question is: **what penalty will I be eating by having these `nvarchar(max)` strings in my table** (see example below)?

There are several columns in this particular table; in C# they are defined as such:

```
    [Key]
    [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
    public int ID { get; set; }
    public string Name { get; set; }
    public string Message { get; set; }
    public string Source { get; set; }
    public DateTime Generated { get; set; }
    public DateTime Written { get; set; }

```

I expect to query and/or sort based on Name, Source, Generated, and Written. I expect Name and Source to be in the 0-50 character length, occasionally up to 150. I expect this table to start pretty small (<100k rows), but grow significantly over time (>1m rows). Obviously message could be small or large, and will probably not be queried against.

What I want to know, is there a performance hit for my Name and Source columns being defined as `nvarchar(max)` when I never expect them to be larger than 150 characters?

---

> [ConcernedOfTunbridgeWells answered](https://dba.stackexchange.com/a/48417) (29 upvotes):
>
> Larger nvarchar (max) data items (over 8000 bytes or so) will spill over into text storage and require additional I/O. Smaller items will be stored in-row. There are options that control this behaviour - see this [MSDN article](http://technet.microsoft.com/en-us/library/ms189087%28v=sql.105%29.aspx) for more details.
> 
> If stored in-row there is no significant I/O performance overhead; there may be additional CPU overhead on processing the data type but this is likely to be minor.
> 
> However, leaving nvarchar (max) columns lying around the database where they are not needed is rather poor form. It does have some [performance overhead](http://rusanu.com/2010/03/22/performance-comparison-of-varcharmax-vs-varcharn/) and often data sizes are quite helpful in understanding a data table - for example, a varchar column 50 or 100 chars wide is likely to be a description or a free-text field where one that's (say) 10-20 chars ling is likely to be a code. You would be surprised how much meaning that one often has to infer from a database through assumptions like this.
> 
> Working in data warehousing, as often as not on poorly supported or documented legacy systems, having a database schema that's easy to understand is quite valuable. If you think of the database as the application's legacy, try to be nice to the people who are going to inherit it from you.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I know it does hurt performance. When I define my own tables with SQL I use varchar(n). My question was more about how much it hurts performance(though I realize as posted that wasn't explicitly clear).

**Martin Smith** (5 upvotes): [Looks like](http://stackoverflow.com/questions/5678190/entity-framework-4-1-code-first-approach-how-to-define-length-of-properties/5678340#5678340) you need to apply either `[MaxLength]` or `[StringLength]` attributes. Some additional possible negative factors of too wide columns [are mentioned in @PaulWhite's answer here](http://dba.stackexchange.com/a/11749/3690)

</details>

---
*Originally posted on [Database Administrators](https://dba.stackexchange.com/q/48408) — 35 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
