---
title: "Where to keep config data other than config file (Windows App)?"
description: "My answer to \"Where to keep config data other than config file (Windows App)?\" on Stack Overflow"
date: 2010-05-20
author:
  name: Nate Bross
tags:
  - c#
  - windows
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2877566"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2877516):*

> My Windows application GUI is accepting some required application configuration fields from the user. I need to store them of course, but I wanna hide these fields from the user.
> 
> 1.  I cannot use database to store these configs.
> 2.  I want to avoid using app.config either. (No app.config encryption)
> 
> Any suggestions, Where and in which format i should store fields. (Field example is: Accepting database User credentials, Task Schedule info etc.)

I would use an XML file (encrypt if you feel its necessary) and use

`Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData)`

to store it in the `%AppData%` section of the user's file system.

Additionally, you may write a Settings class which you serialize to disk and deserialize to memory -- this could save you some persistance logic with the XML namespace.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): No, that is exactly the point of AppData -- it will find a place the current user has read/write access to.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2877566) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
