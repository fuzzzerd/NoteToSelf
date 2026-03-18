---
title: "Alert team members of SVN commit?"
description: "My answer to \"Alert team members of SVN commit?\" on Stack Overflow"
date: 2010-04-20
author:
  name: Nate Bross
tags:
  - svn
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2679084"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2679059):*

> I'm hosting my own svn repository on ubuntu 8.04. Is there a way for svn to send emails to team members whenever a commit has happened?
> 
> If coding is required, the only language I'm able to use on a linux server is PHP. So I could write a php script to be triggered by svn.
> 
> Can anyone tell me how to hook up my php script to an svn commit? Or is there another way to do this?

You might want to look into [Commit Monitor](http://tools.tortoisesvn.net/). This is a windows-only solution I believe, but it allows your team members to "opt-in" to alerts, by checking the repository every 30 minutes or so.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2679084) — 8 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
