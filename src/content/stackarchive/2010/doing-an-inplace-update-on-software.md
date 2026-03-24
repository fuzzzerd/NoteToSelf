---
title: "Doing an inplace update on software"
description: "My answer to \"Doing an inplace update on software\" on Stack Overflow"
date: 2010-01-07
author:
  name: Nate Bross
tags:
  - c#
  - installation
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2023901"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2023694):*

> I would like to be able to do an "inplace" update with my program. Basically, I want to be able to login remotely where the software is deployed, install it while other users are still using it (in a thin client way), and it update their program.
> 
> Is this possible without too much of a hassle? I've looked into clickonce technology, but I don't think that's really what I'm looking for.
> 
> What about the way firefox does it's updates? Just waits for you to restart the program, and notifies you when it's been updated.
> 
> * * *
> 
> **UPDATE:** I'm not remoting into the users' PC. This program is ran on a server, and I remote in and update it, the users run it directly off the server through remote access.
> 
> ClickOnce won't work because it requires a webserver.

*I posted the following answer:*

ClickOnce doesn't require a webserver, it will let you publish updates while users are running the software. You can code your app to check for new update every few minutes and prompt the user to restart the app if a new version is found which will then take them through the upgrade process.

Another option is a Silverlight OOB application, but this would be more work if your app is already built as WinForms/WPF client app.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2023901) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
