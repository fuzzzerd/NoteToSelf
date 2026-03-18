---
title: "Is an ASP.NET MVC Area a good way to separate functionality in my app into Admin and Regular users?"
description: "A question I asked on Stack Overflow"
date: 2012-11-20
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
  - security
  - razor
  - asp.net-mvc-areas
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/13481067"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/13481067):*

I have an existing ASP.NET MVC application that is working well. It provides a select group of people with a set of management functionality. I am now tasked with allowing a much larger group access to a very limited portion of the exact same application.

Is an ASP.NET MVC Area the way to do this? The reason I ask is because I would like to have all users visit the same web page (mysite.com for example) and I would like the look and feel to remain the same (take advantage of the same master page files or \_Layout.cshtml).

The current setup, is that all users have equal access (full) to all data the system presents.

So when Bob goes to

```
/People/Index 

```

he sees everything, and when Sally does, she sees the same thing.

Now I need to allow a bunch more individuals to access this same thing. So when Cindy goes to

```
/People/Index

```

All she will see are people who report directly to her, and the same for Dave, and everyone else who is not specifically part of the "admin" group who get full access to everything.

The uri here, is not important to me; but what I do want to do is be able to recycle the same layouts and views, while using a different set of controllers (which have additional business logic to only show the subset of data).

Is an ASP.NET MVC Area the correct way to do this? If not, a pointer in the right direction?

---

> [Rick Petersen answered](https://stackoverflow.com/a/13481141) (1 upvotes):
>
> If the only requirement is that the data be limited to those people/items directly related to the user, I would do this in your data tier. When you go to load the list of users, return only the users Cindy has access to. Perhaps have a user-table flag for whether the user is an admin user or not.
> 
> ```
> public IEnumerable<User> GetUsers(User requestingUser)
> {
>     if(requestingUser.IsAdmin) // return your full list of users
> 
>     return // list of users filtered by reporting to requestingUser
> }
> 
> ```
> 
> If you do all this logic in your data layer, the users all use the same site and go through the same page-flow, just what displays in the pages is limited. Of course you could also test the user's admin flag when rendering certain parts of views as well, etc.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/13481067) — -1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
