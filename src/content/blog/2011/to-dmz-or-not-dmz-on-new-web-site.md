---
title: "To DMZ or not-DMZ on new web site"
description: "My answer to \"To DMZ or not-DMZ on new web site\" on Server Fault"
date: 2011-06-13
author:
  name: Nate Bross
tags:
  - sql-server
  - security
  - asp.net-mvc
  - dmz
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/280146"
---

*Someone [asked on Server Fault](https://serverfault.com/q/280145):*

> We are about to release a web application for our users, and are trying to figure out if others put their servers in a DMZ, or just keep it off the domain behind the firewall and greatly restrict access via firewall rules? Has anyone here found any cons to just restricting access via firewall rules and O/S perms?
> 
> Note that this site is an ASP.NET MVC front-end with SQL Server back-end.
> 
> **Also** - this is an HR/Finance application, and the database back-end contains our most valuable data. From a security perspective, I'd rather give the world root access to intranet than allow access to the database server. As a result, my original plan was to skip using a DMZ and only opening up port 443 on the firewall to the web server ... this seemed no worse than putting the db server on the DMZ with the web server.

*I posted the following answer, which was chosen as the accepted answer and received 4 upvotes:*

Typically, the configuration is like this:

```
Internet facing servers connected to Firewall's DMZ Port
Trusted servers (SQL, AD, etc) connected to Firewall's Trusted/LAN Port
Internet connected to Firewall's WAN port

```

Then, the Firewall is configured to route between those subnets, and allow access according to the ACLs you define.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): That said, you can get a LOT of throughput on a medium size firewall for a few thousand dollars.

**Nate** (0 upvotes): Yes. It does. You need an enterprise grade firewall if you expect to push lots of traffic through.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/280146) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
