---
title: "Remote Server Administration Tools on Server 2008 R2"
description: "A question I asked on Server Fault"
date: 2012-03-05
author:
  name: Nate Bross
tags:
  - windows
  - active-directory
  - windows-server-2008-r2
  - remote-access
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/366572"
---

*I [asked this on Server Fault](https://serverfault.com/q/366572):*

So, I have installed the [Remote Server Administration Tools](http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=7887) on my Win7 computer, and it works well, but it is a bit slow sometimes, over our site-to-site VPN. I have a Server 2008 R2 that I login to for tasks I need to be speedy, but I a unable to install the [Remote Server Administration Tools](http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=7887) on Server 2008 R2.

My question is this: Can I enable these tools without promoting this server to a domain controller? **I realize the tools are already part of the Server OS**, I just want to use them to administer my domain without connecting directly to my domain controller.

---

> [newmanth answered](https://serverfault.com/a/366578) (7 upvotes):
>
> Yes, you can enable the tools without elevating the server. But, you don't need to install RSAT on Windows Server 2008 R2, the tools are already included with the OS. To add the tools you need, go into Server Manager and under Enable Features, there is a node called 'Remote Server Administration Tools', tick off the tools that you need installed.

---
*Originally posted on [Server Fault](https://serverfault.com/q/366572) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
