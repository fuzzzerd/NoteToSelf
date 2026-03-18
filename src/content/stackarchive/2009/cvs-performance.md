---
title: "CVS Performance"
description: "My answer to \"CVS Performance\" on Stack Overflow"
date: 2009-06-23
author:
  name: Nate Bross
tags:
  - performance
  - cvs
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1033226"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1033162):*

> I have huge projects on a CVS repository, and I'm looking for ways to improve its performance. Would CVS compression help it? And what about encryption, does it degrade the speed?
> 
> Thanks!

Performance issues are usually IO related. (Unless you can see your CPU maxing out at 100%). I'd recommend trying to put the repository on a faster drive array (RAID 10 and/or higher RPM drives) to see if that increases your performance. If you are accessing the repository over the internet, then its likely a bandwidth issue, although depending on how much data you are talking about, even a simple DSL connection should be able to handle it.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): Depends what type of server you have. If development is important, a good drive array is a must. 4x 1TB WD drives ~ $400. Hardly a bank breaker for a company.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1033226) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
