---
title: "how i add new full contact to WP with C# code?"
description: "My answer to \"how i add new full contact to WP with C# code?\" on Stack Overflow"
date: 2012-02-24
author:
  name: Nate Bross
tags:
  - c#
  - windows-phone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9438546"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9438520):*

> I want to add new contact to WP's contact list with C# code. but not with SaveContactTask or SavePhoneNumberTask or etc.
> 
> I want to add advanced contact to WP contact database. How can I get access to Contact Database of Windows Phone to save my contact data ?

The only way this is possible is through the [`SaveContactTask`](http://msdn.microsoft.com/en-us/library/microsoft.phone.tasks.savecontacttask%28v=VS.92%29.aspx). Windows Phone limits applications access to many of the functions of the underlying OS's data.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9438546) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
