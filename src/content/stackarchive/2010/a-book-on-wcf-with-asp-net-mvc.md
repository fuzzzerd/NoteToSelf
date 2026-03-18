---
title: "A book on WCF with asp.net MVC?"
description: "My answer to \"A book on WCF with asp.net MVC?\" on Stack Overflow"
date: 2010-12-01
author:
  name: Nate Bross
tags:
  - asp.net
  - wcf
  - asp.net-mvc-2
  - wcf-data-services
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4329417"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4329372):*

> I have to build a web application on asp.net MVC that have a data service reference WCF as DB. I have no idea on how data persistence work on asp.net. There are resource on this arguments?

WCF on the .NET Stack is very simple, after you add a Service Reference, you simply write code like this:

```
var proxy = new WcfServiceClient();
var myData = proxy.ReadData();
//...
myData.Name = String.Format("{0} {1} {2}", prefix, first, last); // I know, data denormalization, so shoot me...
proxy.UpdateData(myData);

```

In terms of where you put this code in an ASP.NET MVC application, you'll need to investigate the basics of writing a MVC app; that code would likely live in the `Update` method of your myDataController class.

I can recommend [this](http://aspnetmvcbook.s3.amazonaws.com/aspnetmvc-nerdinner_v1.pdf) book for learning ASP.NET MVC. The focus is on Linq-To-SQL -- but you should be able to substitute in your WCF Services where necessary.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4329417) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
