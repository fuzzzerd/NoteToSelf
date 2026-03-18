---
title: "Error Log Database -- For many apps"
description: "A question I asked on Stack Overflow"
date: 2010-01-04
author:
  name: Nate Bross
tags:
  - exception
  - logging
  - error-logging
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2001358"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2001358):*

I have a bunch of existing client/server applications that are currently chugging along. Once in a while, a client will want to add on some type of web-interface to access part of their data. These are typically custom, although some are "generic"; but everyone has their own "instance" in its own VM.

What I want is a centralized area to capture and log any errors that come up on any of these VMs.

I'm consitering creating a new database and setting up a WCF Service to enable each of these webapps to create a log entry in my centralized database as well as to the local EventLog.

Is that a bad design?

**update**

The webapps are on 2003/IIS6 and 2008/IIS7, built in ASP.NET. Many of the instances are on a pair of web servers, but many will be deployed to individual VMs.

---

> [David answered](https://stackoverflow.com/a/2001425) (4 upvotes):
>
> This is exactly how we implemented it.
> 
> We have 3 tables in the database:
> 
> ```
> Event Types
> ------------ 
> EventType int 
> EventDescription varchar(50)
> 
> 
> MonitoredSystems
> ---------------
> SystemID int
> SystemName varchar(50)
> SystemDescription text
> 
> 
> Events
> -------
> RecordID bigint
> EventTime datetime
> SystemID int FK
> EventText text
> EventType int FK
> Acknowledged bit
> 
> ```
> 
> We also whipped up a site where we could view the events. The "Acknowledged" field let us set up a view names "Unacknowledged critical issues" so that we can quickly see any new issues, and acknowledge them as we read them.
> 
> We know there are other tools out there that can do this for us, but none was as easy to integrate as our own home grown version, and we now use it in every app we build. We have some other customizations that I am not mentioning here that other tools didn't provide out of the box.
> 
> So I think your idea is fine. If you build it yourself, you can customize it to work the way you want. However, I would recommend at least looking into tools such as Log4net, etc.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2001358) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
