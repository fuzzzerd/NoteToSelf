---
title: "Windows 2008 - number of folders"
description: "My answer to \"Windows 2008 - number of folders\" on Server Fault"
date: 2011-08-12
author:
  name: Nate Bross
tags:
  - windows
  - directory
  - windows-server-2008
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/300534"
---

*Someone [asked on Server Fault](https://serverfault.com/q/300531):*

> We are using Windows 2008 (EC2) and have application that stores large number of subfolders in a specific folder (i.e. root/subfolder1, root/subfolder2, root/subfolder3 etc.)
> 
> We are expecting tens of millions of subfolders and the question of scalability arised. Do you have any idea if Windows 2008 will be able to handle this? What about performance, is there a magic line after which any folder operations (e.g. creating new subfolder, or looking up exisiting) will drastically slow down? Are there any hard numbers?
> 
> As an alternative we are considering converting that flat structure into a tree like
> 
> ```
> root/subfolder1_/subfolder1
> root/subfolder1_/subfolder11
> ...
> root/subfolder2_/subfolder2
> 
> ```
> 
> What is your opinion on that?

*I posted the following answer, which received 1 upvote:*

This will greatly depend on the disk subsystem. On a shared virtual machine host (like EC2) this will be very hard to predict because usage will be dynamic.

The best think I can suggest is to try it out and see what happens. Write a batch file or powershell script to create folders and measure the time it takes. See [New-Item](http://technet.microsoft.com/en-us/library/ee176914.aspx) and see this [article/code](http://secondstanza.com/2008/05/23/timing-script-using-powershell/) to get started making a timer. Once you've done that, you should be able to get a good feel for how its going to handle.

---
*Originally posted on [Server Fault](https://serverfault.com/a/300534) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
