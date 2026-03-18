---
title: "Is Azure the right choice for hosting my ASP.NET web application to deliver Data Visualization?"
description: "My answer to \"Is Azure the right choice for hosting my ASP.NET web application to deliver Data Visualization?\" on Stack Overflow"
date: 2012-08-31
author:
  name: Nate Bross
tags:
  - asp.net
  - azure
  - analytics
  - saas
  - paas
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12221964"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/12221947):*

> I am starting an Analytics company that analyses my clients data, holds the results of the analysis on a server, and allows my clients to access the results and view charts and graphs using an ASP.NET web application I have written. Each client would obviously have access to their own web application by signing in with their secure password.
> 
> Is Azure the right choice for delivering this kind of service? Does it host my SQL Server license? Does it scale for many users who EACH need their own version of the web application?
> 
> Thank you for your time,

Azure Websites and SQL Azure should be able to handle this pretty well.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): If you run an Azure VM, there is no difference, but you are fully responsible for patching the server, doing antivirus scans, etc. If you use one of the Azure Managed services (such as Azure Websites, which will work for your app, to use Azure Web Services you need to use the correct Azure visual studio template)

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12221964) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
