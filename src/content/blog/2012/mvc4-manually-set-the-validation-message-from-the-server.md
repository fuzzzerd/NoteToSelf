---
title: "MVC4 : Manually set the validation message from the server side"
description: "My answer to \"MVC4 : Manually set the validation message from the server side\" on Stack Overflow"
date: 2012-09-28
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - validation
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12647399"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11553159):*

> I want to validate some form fields in the server side, but I don't want to use Data Annotations Custom Validators. I need to manually set its value based on the return of the called Business Layer Method to define this message.
> 
> Just as an example!
> 
> NEED:
> 
> If the given username already exists, the MVC4 validation error span shall display "This username already exists."
> 
> CODE:
> 
> ```
>  if (_business.UserNameExists(username))
>  {
>     // Set the field validation error span message
>     // HOW TO DO??
>  }
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 15 upvotes:*

A friend came with the solution, it is very simple!

```
 if (_business.UserNameExists(username))
 {
    // Set the field validation error span message
    ModelState.AddModelError("UserName", "This username already exists.");
 }

```

Where UserName is the name of the Entity attribute being validated.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12647399) — 15 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
