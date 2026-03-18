---
title: "Is it weird or strange to make multiple WCF Calls to build a ViewModel before presenting it?"
description: "A question I asked on Stack Overflow"
date: 2010-04-02
author:
  name: Nate Bross
tags:
  - .net
  - asp.net-mvc
  - wcf
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2568535"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2568535):*

Am I doing something wrong if I need code like this in a Controller? Should I be doing something differently?

```
public ActionResult Details(int id)
{
    var svc = new ServiceClient();
    var model = new MyViewModel();
    model.ObjectA = svc.GetObjectA(id);
    model.ObjectB = svc.GetObjectB(id);
    model.ObjectC = svc.GetObjectC(id);
    return View(model);
}

```

The reason I ask, is because I've got Linq-To-Sql on the back end and a WCF Service which exposes functionality through a set of DTOs which are NOT the Linq-To-Sql generated classes and thus do not have the parent/child properties; but in the detail view, I would like to see some of the parent/child data.

---

> [Dan Story answered](https://stackoverflow.com/a/2568564) (1 upvotes):
>
> You might consider replacing your multiple methods with a single factory method that will generate a pre-populated object and return it. WCF calls have significant overhead, and you should be minimizing them if at all possible.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2568535) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
