---
title: "How can I authenticate to an ASP.NET WebAPI that is using Forms Authentication From a C# Console Application?"
description: "A question I asked on Stack Overflow"
date: 2013-02-07
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - security
  - authentication
  - asp.net-web-api
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/14760989"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/14760989):*

I have an existing, working ASP.NET MVC 4 web application. I have written my own `RoleProvider` and I am using the standard [\[Authorize\] attribute](http://msdn.microsoft.com/en-us/library/system.web.mvc.authorizeattribute.aspx). My controllers look like this:

```
[Authorize(Roles="ContactAdmins")] //System.Web.Mvc
public ActionResult Index()

```

I would like to add a WebAPI controller to my application, and **take advantage of my existing plumbing**

```
[Authorize(Roles="ContactAdmins")] //System.Web.Http
public IEnumerable<Contact> Get()

```

This works for Javascript ajax calls from within my site (since the browser user is already authenticated with a Forms auth cookie). My question is from a C# Console Application (or any other application that is not part of my web app) how can I authenticate to this API?

Lets assume that for the parts of my API which are public, I am using code very similar to what is found at this question [Consuming WebApi in MVC3](https://stackoverflow.com/questions/8426545/consuming-webapi-in-mvc3).

```
var url = "http://localhost:9000/api/contacts";
using (var client = new WebClient())
using (var reader = XmlReader.Create(client.OpenRead(url)))
{
    var serializer = new XmlSerializer(typeof(Contact[]));
    var contacts = (Contact[])serializer.Deserialize(reader);
    // TODO: Do something with the contacts
}

```

What would I need to modify here? Or would I have to scrap this and use a completely different approach? I am not tied to using Forms for API Authentication of remote clients, but I would like to keep the current elegant approach for JavaScript clients that are part of the app (just request API since forms cookie is set).

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): And how would I go about getting that cookie? Is there possibly a better way to do what it? I am not tied to using Forms Auth, but I am tied to using my Role provider and keeping a users credentials the same for the web interface + any fat clients using the API.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/14760989) — 9 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
