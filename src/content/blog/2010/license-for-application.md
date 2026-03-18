---
title: "License for application"
description: "My answer to \"License for application\" on Stack Overflow"
date: 2010-08-24
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - javascript
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3553793"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3553722):*

> Using mysql, c#.net, Java Script
> 
> I have the web application, i want to create a user limit for my application which means i have to use some license for the users....
> 
> For Example
> 
> customer need the application for 3 users, so application will work for 3 users, if customer need to extend the user from 3 to 10 means, i have to provide a license for 10 users...
> 
> How to create a license for the application, i have to use RSA algorithm for generating a key?
> 
> Can any one provide some idea or sample code
> 
> Need Help

There is a large difference between a `license key` and a `license agreement.` A license key is something used to make it harder to copy software, since you are deploying a web-app, this shouldn't be much of an issue for you. A license agreement is a legal document that users of your application must agree to. I'm guessing you are interested in the first.

In a web application, you should implement a login system, and only provide username/passwords for users who have paid you. If as Kobi mentioned, you have a public API that you'd like to license to other users, I recommend you simply give them a uinque GUID (`System.Guid.NewGuid();`) and then require that GUID as a parameter for every API call. Then, you can check to see if the GUID is associated with a paid account, if so, let it fly, if not abort the transaction with an error code. I would recommend using an HTTPS connection for this.

If, you are trying to sell your web-application to users, so they can host it on their own server, a license key would be a good idea, you might want to add it as a parameter in `<appSettings>` under web.config. There are many methods for generating license keys, but in at their most simple they involve generating random numbers until a specific check-sum is met. For example, 1253-38 (1+2 = 3, 5+3 = 8). That is a very simple key that would be easy to crack, but you could come up with a more indepth check-sum if you needed.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3553793) — 5 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
