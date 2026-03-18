---
title: "Multiple Login Modes in ASP.NET - Advice Needed"
description: "My answer to \"Multiple Login Modes in ASP.NET - Advice Needed\" on Stack Overflow"
date: 2009-05-15
author:
  name: Nate Bross
tags:
  - asp.net
  - authentication
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/869935"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/869888):*

> Looking for a bit of advice on where to take a current webapp which supports logins based on active directory and makes use of the built in asp login component.
> 
> The problem is that we want to have the option to use the active directory login or a "normal" login using data stored in our local database.
> 
> _Just to make it clear. On each installed system it would be one or the other so I'm not asking how to check both each login atempt._
> 
> Basic flow:
> 
> ```
> Determine which login mode is set
>   if active directory
>     load active directory login form
>     validate login info against active directory
>     login to system
>   else if normal login
>     load default login form
>     validate login info against database
>     login to system
> 
> ```
> 
> My lack of knowledge on the asp login component may be the problem here but I'm unsure of how to make the login component know which login mode to run the validation on? The login form seems just like a black box, which makes me a little uneasy when using it on such an important task.
> 
> Can this be done?
> 
> Or..
> 
> Should I just write a custom login for the system and be done with it?

If you use Forms authentication, you could check the user against active directory and against the database and if either returns a positive set the forms authentication to true.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/869935) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
