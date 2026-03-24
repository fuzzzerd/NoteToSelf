---
title: "Figuring out what&#39;s causing a server to slow down"
description: "My answer to \"Figuring out what&#39;s causing a server to slow down\" on Server Fault"
date: 2011-04-11
author:
  name: Nate Bross
tags:
  - performance
  - monitoring
  - performance-monitoring
  - network-monitoring
  - performance-tuning
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/258413"
---

*Someone [asked on Server Fault](https://serverfault.com/q/258410):*

> I have a potential client that has a php site that performs fine most of the time. However, every week or so, it will experience lag (slow page loading). I am sure there are a myriad of things that can be causing this (network issues, bad installation, a specific php file, increased traffic load). However, I need a way to deduce what is causing this. Is there any server monitoring software that is made especially to handle these situations?
> 
> PS: The server is linux

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

I would find out the following:

*   Does this "slow down" effect all users?
*   Is this slow down for the entire site, or just a specific set of functions within the site?
*   Does it happen at the same time every day and the same day each week?

If the slowdown is always on Friday at quitting time and the application is used for users to enter their time card data for the week, it might simply be the server needs more CPU/Memory and or Bandwidth to take the load of all the last-minute users. Suffice it to say, those type of patterns will be hard to track down without knowing the ins and outs of the application and its users and uses.

In order to recommend tools, we'd need to know what OS your app is running on? Windows/IIS, Linux/Apache? However, in my anecdotal experience, site slowdown is caused by one of a few things:

*   Poor database programming
    *   `SELECT * FROM TableXYZ`
    *   Queries to un-indexed columns
*   Server Issues
    *   Not enough memory
    *   Not enough bandwidth
        *   Server --> User
        *   Server --> Database

The most common things to check (for performance related problems) are

*   Database Server
    *   CPU Load
    *   Available Memory
    *   Disk Queue Length (is your disk IO maxed out?
*   Web Server
    *   CPU Load
    *   Memory Usage
    *   Bandwidth to end users
    *   Bandwidth to database server

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): Have you been through this thread for Linux Performance monitoring tools: [serverfault.com/questions/74863/…](http://serverfault.com/questions/74863/linux-server-performance-monitoring "linux server performance monitoring")

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/258413) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
