---
title: "Redirect To Uri using Method=POST and submit Form Data from ASP.NET MVC Controller Action Result"
description: "A question I asked on Stack Overflow"
date: 2013-02-01
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - asp.net-mvc
  - http-redirect
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/14649697"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/14649697):*

I have a form that I need a user to submit on MY website, which will POST to my controller. The form action looks like this `action="~/Home/FormCapture/"` in the controller action I will perform some validation rules.

What I am doing currently, that works, is to perform my validation, and return an HTML view that consists of the exact same form with a different `action="https://otherServer/cgi?-submit"`, filled out with the data the user submitted, AND a javascript that submits the form on page load.

While the above does work, I would like to avoid the intermediate step of returning a form that submits on load, I can't seem to get it to work, but I'm thinking I'd like to do something like

```
return Redirect("https://otherServer/cgi?-submit", 
           FormMethods.Post, "value1=abc&val2=123");

```

Note: While this may look like a phishing / drive by capture system (because it is) I am stuck with some black box web publishing technology that does not allow me to share auth cookies / tokens. There are some resources in my app that need to be accessed by users of the black box system, so I need to log in to both sites from my site, so when the black box system links to my app, there is already an authentication token and the user is not prompted to login twice.

---

> [Eric Petroelje answered](https://stackoverflow.com/a/14651841) (1 upvotes):
>
> OK, assuming the two servers are on the same domain, here's a solution that just might work:
> 
> 1.  The user submits the form to your site.
>     
> 2.  In your controller code you use the `WebClient` class to post the same data to the other server.
>     
> 3.  Presumably the other server will pass back a cookie/sessionid/auth token as a cookie. Pull that cookie from the WebClient and pass it along in your response.
>     
> 
> The user should now have your auth cookie and the auth cookie for the other site. Assuming they are on the same domain, when the user goes to the other site they should already be authenticated.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I could, but the idea, is that the user logs in to my site, and my site passes that login through to the second site, and the user ends up in the second site.

**Nate** (0 upvotes): Currently 95% of the time they are, if a more elegant solution requires it, we could dictate that as a requirement.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/14649697) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
