---
title: "Would you ever create a relationship on a natural ID or use an internal ID and emulate the natural ID relationship?"
description: "A question I asked on Stack Overflow"
date: 2010-01-19
author:
  name: Nate Bross
tags:
  - database
  - database-design
  - foreign-key-relationship
  - relationship
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2095388"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2095388):*

> **Possible Duplicate:**  
> [Surrogate Vs. Natural/Business Keys](https://stackoverflow.com/questions/63090/surrogate-vs-natural-business-keys)

If given two tables, Level1 \[ID, Title, Number\] Level2 \[ID, FKID???, Title, Number\]

A user of the system understands that Level2 is related to Level1 with based on Level1's Number, my question to you is, would you make the relationship based on the internal ID and "emulate" the relationship with "Number" or would you simply use the "Number" field and be done with it?

---

> [danben answered](https://stackoverflow.com/a/2095421) (3 upvotes):
>
> The two standard reasons for relating on database ID rather than natural ID are:
> 
> 1.  It's difficult to guarantee that the natural ID will never change under any circumstance
> 2.  Generally a natural ID takes more space and is not as efficient to index as the database ID (though of course this is not hard and fast - it depends on the data constituting your natural ID). By using the database ID, you can avoid duplication of business data.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): It didn't come up in the "this might be a duplicate of" section while I was asking... I use that as my guiding star.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2095388) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
