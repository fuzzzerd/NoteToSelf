---
title: "How can I distribute 1 application between 2 servers"
description: "My answer to \"How can I distribute 1 application between 2 servers\" on Server Fault"
date: 2010-09-20
author:
  name: Nate Bross
tags:
  - apache-2.2
  - web-server
  - ruby-on-rails
  - mongrel-cluster
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/182875"
---

*Someone [asked on Server Fault](https://serverfault.com/q/182870):*

> HI
> 
> I have an Email Marketing Rails application running on a CentOS QuadCore 16GB RAM server. But currently our webserver is taking too long to respond to requests on rush hours (Mongrel Cluster + Apache ). We monitoring it using ScoutApp ( www.scoutapp.com ).
> 
> Scout Alerts Maximum Time(3 sec) exceeded on 668 requests Maximum Time(3 sec) exceeded on 120 requests
> 
> I contracted another server Dual Xeon 4GB RAM .
> 
> What is the best setup for distributing this application between 2 servers? I'm thinking about using the SERVER-1 (16GB RAM) with Mysql and Exim and migrate the application to SERVER-2 (4GB RAM) and use it as the WEB SERVER (Mongrel cluster + Apache) only.
> 
> Can anyone suggest me a better setup , tips or ideas?

*I posted the following answer, which received 1 upvote:*

Splitting the web/http hosting and the database hosting on separate servers is a good first step. A nice second step is to get a duplicate web server and set it up with the first with some type of load balancer. Either hardware that sits in front of both servers, or a software based one.

edit: This assumes you are positive the database is not your limiting factor (which it very well could be). Moving the web server off the database server will help this situation, but the second web server I'm suggesting will only help if the processing of each request is slowing you down and not the database.

---
*Originally posted on [Server Fault](https://serverfault.com/a/182875) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
