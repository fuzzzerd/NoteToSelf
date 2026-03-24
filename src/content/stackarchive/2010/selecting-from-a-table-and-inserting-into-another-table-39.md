---
title: "Selecting from a table and inserting into another table&#39;s column of a different type using query in ms access"
description: "My answer to \"Selecting from a table and inserting into another table&#39;s column of a different type using query in ms access\" on Stack Overflow"
date: 2010-07-02
author:
  name: Nate Bross
tags:
  - sql
  - ms-access
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3166893"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3166877):*

> I have some txt files that contain tables with a mix of different records on them which have diferent types of values and definitons for columns. I was thinking of importing it into a table and running a query to separate the different record types since a identifier to this is listed in the first column. Is there a way to change the value type of a column in a query? since it will be a pain to treat all of them as text. If you have any other suggestions on how to solve this please let me know as well.
> 
> Here is an example of tables for 2 record types provided by the website where I got the data from
> 
> ```
> create table dbo.PUBACC_A2
> (
>       Record_Type               char(2)              null,
>       unique_system_identifier  numeric(9,0)         not null,
>       ULS_File_Number           char(14)             null,
>       EBF_Number                varchar(30)          null,
>       spectrum_manager_leasing  char(1)              null,
>       defacto_transfer_leasing  char(1)              null,
>       new_spectrum_leasing      char(1)              null,
>       spectrum_subleasing       char(1)              null,
>       xfer_control_lessee       char(1)              null,
>       revision_spectrum_lease   char(1)              null,
>       assignment_spectrum_lease char(1)              null,
>       pfr_status        char(1)          null
> 
> )
> 
> go
> create table dbo.PUBACC_AC
> (
>       record_type               char(2)              null,
>       unique_system_identifier  numeric(9,0)         not null,
>       uls_file_number           char(14)             null,
>       ebf_number                varchar(30)          null,
>       call_sign                 char(10)             null,
>       aircraft_count            int                  null,
>       type_of_carrier           char(1)              null,
>       portable_indicator        char(1)              null,
>       fleet_indicator           char(1)              null,
>       n_number                  char(10)             null
> )
> 
> ```

*I posted the following answer:*

If you have a column defined as text, because it has both alphas and numbers, you'll only be able to query it as if it were text. Once you've separated out the different "types" of data into their own tables, you should be able to change the schema definition. Please comment here if I'm misunderstanding what you're trying to do.

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): Can you put in a sample of a few different record types so I can get a better idea of what your data looks like and what you're trying to do?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3166893) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
