---
title: "MVC Get ID from ReturnURL"
description: "My answer to \"MVC Get ID from ReturnURL\" on Stack Overflow"
date: 2013-03-14
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
  - url
  - query-string
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/15415719"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/15413808):*

> I am building an MVC 4 web application and whenever a user attempts to access a secure page without being authenticated I fire them to the login screen
> 
> ```
> [AllowAnonymous]
> public ActionResult Login(string returnUrl)
> {
>    ViewBag.ReturnUrl = returnUrl;
>    return View();
> }
> 
> ```
> 
> Once they login, I use the returnURL string to fire them back to the page they previously wanted to access. All good.
> 
> However, I was wondering, is there anyway of getting the ID parameter from the returnURL string, e.g., if the returnURL string was
> 
> > /Course/ICT/4
> 
> is there anyway of just getting the value 4?

*I posted the following answer, which received 1 upvote:*

You might also use a regex like this

```
[^/]+$

```

In your controller like so

```
var id = 0;
int.TryParse(Regex.Match(urnUrl, "[^/]+$"), out id);

```

* * *

**Edit**

* * *

Obviously, this answer assumes that you will **not** have a Uri of the following form:

```
/Controller/Action/?id=783

```

Which would render the above method (and the other methods posted) in adequate. In order to support this as well, you will need to do some exception handling.

```
var id = 0;
var afterSlash = Regex.Match(returnUrl, "[^/]+$");
if(int.TryParse(afterSlash, out id) == false)
{
    if(int.TryParse(Regex.Match(afterSlash, "[^=]+$"), out id) == false)
    {
        // probably not a valid uri
    }
}

```

This is probably a good start, but you may need to do more testing and make modifications based on your environment.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/15415719) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
