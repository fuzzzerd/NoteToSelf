---
title: "can we install IIS to Windows Mobile 6.1?"
description: "My answer to \"can we install IIS to Windows Mobile 6.1?\" on Server Fault"
date: 2010-08-02
author:
  name: Nate Bross
tags:
  - iis
  - installation
  - windows-mobile
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/166182"
---

*Someone [asked on Server Fault](https://serverfault.com/q/166179):*

> can we install IIS to Windows Mobile 6.1 ? As I Have develop a web application in >net and I want to use that same application in Windows Mobile 6.1 ,PDA, as offline application. Ya Surely I will implement that one with Sql server CE but to run it I have to host it on PDA. So can we host it there???

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

Short answer, no, IIS wont run on Windows Mobile.

Long answer (read: alternate solution), your best developing a WinForms (mobile) version using SQL CE.

If you write your code well, place all your business logic within the same assembly, then you can build a regular web interface (asp.net and/or asp.net-mvc) which will implement your business logic, the write the aformentioned WinForms Mobile version, implementing the same class library for business logic.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes; however, if your PDAs have internet access, they could access the same web interface as everyone else.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/166182) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
