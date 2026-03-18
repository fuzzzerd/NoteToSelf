---
title: "What is the correct way to handle long running service operations with WCF hosted in IIS?"
description: "A question I asked on Stack Overflow"
date: 2012-06-18
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - .net
  - wcf
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/11087826"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/11087826):*

I am building a WCF service that will expose several operations, it will run in IIS because it needs HTTPS endpoints. Most of the operations will perform within seconds or less; however, one or two of these operations will take between 5-90 minutes.

The primary consumer of this service will be an ASP.NET MVC application; what is the correct way to do handle this?

Should I jackup the timeout and do some ajax calls? Should I add a table to my database, and have the long running operations update this database, and have the web interface poll this table every minute? I'm not sure what (if there is) the generally accepted best practice for this.

---

> [Localghost answered](https://stackoverflow.com/a/11088066) (1 upvotes):
>
> I wrote something similar for my senior project, basically a job scheduling framework.
> 
> 1.  I chose to go down the path of storing the "status" of the "job" in the database.
> 2.  I wrote a manager windows service that implemented a WCF client (proxy)
> 3.  I wrote a WCF Service that implemented my "worker host".
> 
> The manager service would read the queue from the database, and hand out work to all of my "worker hosts". The reason I had windows service perform this task as opposed to just having the UI talk directly to the worker host, was because it gave an extra level of control over the whole process.
> 
> I didn't like the idea of having "the network cable unplugged" from my worker host, and never getting a status update again from this specific job. So, the windows service gives me the ability to constantly monitor the progress of the WCF worker host, and if a connection error ever occurs (or something else unexpected), I can update the status to failed. Thus, no orphaned jobs.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): @Noah, the long running operations are not returning much data, until they are complete, where they return about a 50kb message.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/11087826) — 10 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
