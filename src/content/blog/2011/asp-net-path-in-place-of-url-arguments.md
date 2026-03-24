---
title: "ASP.NET: Path in place of URL arguments"
description: "My answer to \"ASP.NET: Path in place of URL arguments\" on Stack Overflow"
date: 2011-08-15
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7071357"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7071320):*

> I've been taking URL arguments in ASP.NET like so:
> 
> `www.mysite.com/thread.php?id=123`
> 
> However, I'd like to use the cleaner method that you often see which looks like:
> 
> `www.mysite.com/thread/123`
> 
> How can I do this (get the arguments) in ASP.NET? What's the usual procedure for setting up a system like this?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

What that is called, is Url Rewriting. If you are using the ASP.NET-MVC Framework, you get this behavior by default, along with a design pattern that helps make developing it easier.

If you're trying to shoehorn this onto an existing application, I recommend that you look into some url rewriting modules.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): In visual studio, a "website" is just a bunch of aspx files in a folder, in an "application" there is a .prj file that keeps track of what files are in the project.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7071357) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
