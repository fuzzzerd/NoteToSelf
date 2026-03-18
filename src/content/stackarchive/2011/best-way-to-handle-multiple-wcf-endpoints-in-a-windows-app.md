---
title: "Best way to handle multiple WCF EndPoints in a Windows App"
description: "A question I asked on Stack Overflow"
date: 2011-07-21
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - service
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/6781109"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/6781109):*

I have a need to install an "agent" (I'm thinking it will run as a Windows Service) on many servers in my network. This agent will host a WCF service with several operations to perform specific tasks on the server. This I can handle.

The second part is to build a control center, where I can browse which servers are available (the agent will "register" themselves with my central database). Most of the servers will probably be running the most recent version of my service, but I'm sure there will be some servers which fail to update properly and may run an out dated version for some time (if I get it right, the service contract wont change much, so this shouldn't be a big deal).

Most of my WCF development has been Many Clients to a Single WCF Service, now I'm doing the reverse. How should I manage all of these EndPoints in my control center app? In the past, I've always had a single EndPoint mapped in my App.config. What would some code look like that builds a WCF EndPoint on the fly, based on say a set of `string ip; int port;` variables I read from my database?

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): The service will be manipulating applications on the server (like WMI) except the applications I must deal with do not expose any WMI interfaces.

**Nate** (0 upvotes): The service will be hosted on 150+ servers, and I need to access the instance running on a specific server. Some may be on networks with restricted IP activity, so I'll need to pick ports which are available. The vast majority will be the same, but there will be some exceptions.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/6781109) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
