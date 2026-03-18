---
title: "ASP.NET MVC - Wordpress Style URLs"
description: "My answer to \"ASP.NET MVC - Wordpress Style URLs\" on Stack Overflow"
date: 2010-06-21
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc
  - seo
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3086344"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3086301):*

> Wordpress is very highly regarded and proven to follow good practise which in turn facilitates rankings with search engines.
> 
> One proven factor is the seo freindly urls. Such as the examples below;
> 
> ```
> www.myblog.com/test
> www.myblog.com/another
> www.myblog.com/contact
> 
> ```
> 
> Lets say that we have two controllers, each with their won actions;
> 
> ```
> View/BlogPost
> View/BlogCategory
> Contact/Form
> Contact/Post
> 
> ```
> 
> The wordpress view engine is flexible enough that the test url can resolve to BlogPost and the another url can resolve to BlogCategory.
> 
> Does anyone know if this is possible in MVC and is it feasible? Im thinking about a custom 404 handler that would preserve the url in the browser and then fire the required actions.

You could add an Action to your controller, with a `RedirectToAction()` call

```
...
public ActionResult test()
{
    return RedirectToAction("BlogPost");
}
..
public ActionResult another()
{
    return RedirectToAction("BlogCategory");
}
...

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I believe you could do this with your own Route in Global.asax -- but that's an area of ASP.NET MVC that I haven't gone into yet.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3086344) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
