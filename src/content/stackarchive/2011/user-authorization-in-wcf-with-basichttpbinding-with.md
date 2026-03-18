---
title: "User Authorization in WCF with BasicHttpBinding with TransportWithMessageCredential"
description: "A question I asked on Stack Overflow"
date: 2011-12-02
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - security
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/8361744"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/8361744):*

I currently have a service which is secured by TransportWithMessageCredential over https. This works _great!_ I now need to add a bit of granularity to some operations on this service.

Lets say I have this method `public IEnumerable<Project> GetProjects()` now I need to add an additional method which will limit the projection to projects which the current user has access.

Is using code like this:

```
var uid = System
        .ServiceModel
        .OperationContext
        .Current
        .IncomingMessageProperties
        .Security
        .ServiceSecurityContext
        .PrimaryIdentity;
var returnProjects = context.Projects.Where(p => p.ProjectManager.Equals(uid.Name));

```

going to leave me vulnerable to any type of attack?

I think this should be fine, since WCF will hit my custom `UserNamePasswordValidator` first and "authenticate" the user, then the code I have above will "authorize" them to get only their projects. Is there a flaw in my thinking here?

---

> [competent_tech answered](https://stackoverflow.com/a/8361968) (2 upvotes):
>
> No, that is perfectly valid thinking. This is exactly the way that we implement user-specific security (with the minor exception that we use FormsAuthentication for identifying the user).
> 
> Before each request is processed, we always check the user and if there is anything suspicious about the request, we throw an exception.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/8361744) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
