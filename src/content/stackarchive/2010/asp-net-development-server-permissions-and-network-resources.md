---
title: "ASP.NET Development Server permissions and Network Resources"
description: "My answer to \"ASP.NET Development Server permissions and Network Resources\" on Stack Overflow"
date: 2010-09-17
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net
  - vb.net
  - iis
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3738653"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3738439):*

> My ASP.NET 4.0 Web App is unable to access Network Printers, while debugging on VS 2010. It can access local printers. Seems like it may be a permissions issue. Since VS2010 Debugging runs on ASP.NET Development Server, it must be running under the account I used to log into Windows, right? Does that user need to be added as an Admin in that printers users? Is there any account that I can impersonate to get this working?

You are correct, debugging through Visual Studio means all of your code runs with the same rights as the user logged in to windows. On the server, you will need to setup impersonation and/or setup your Application Pool to run as a user who has access to print on these printers.

I recommend you setup a dedicated domain account (like domain\\yourapp-impers-user) and either set the Application Pool to use that, or setup impersonation in your web.config. Then on the print server, you simply grant that user account the necessary permissions.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Thats correct for impersonation you may end up with `<identity impersonate="true" userName="domain\username" password="something" />` -- you configure the Application Pool through the IIS MMC. Its under the advanced "properties" of your AppPool.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3738653) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
