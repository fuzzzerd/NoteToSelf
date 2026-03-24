---
title: "In C#, how can I access a fileshare on a domain from outside a domain?"
description: "My answer to \"In C#, how can I access a fileshare on a domain from outside a domain?\" on Stack Overflow"
date: 2010-12-13
author:
  name: Nate Bross
tags:
  - c#
  - file
  - active-directory
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4431448"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4431397):*

> I've got a webserver where people upload files. What I need to do is take those files and write them to a file share on the Active Directory domain. The problem -- the webserver is not on the domain.
> 
> So, how is the best way to do this? I would have thought this would be easy, something along the lines of create a connection with some credentials and do it. But apparently not. The closest I've found is Impersonation with `WindowsIdentity.Impersonate`, but everything I've read says that is a bad idea in a production environment.
> 
> Any ideas? I'm working on a solution that FTPs the files, but that's unsatisfying too, and a fallback plan.
> 
> I'm using c# and .net 4.0 in (obviously) a windows environment.
> 
> **Edit:** I should point out that I can't run servers (or services) that access the outside on that domain. The FTPing is a temporary workaround.

*I posted the following answer:*

I think that an FTP solution is better than using a Windows Share; however, I would think a web service of some type would be the best option for an inter-domain file exchange. That said, if you've got it working with `WindowsIdentity.Impersonate` -- why not use it? What context did you read that it was a bad idea?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4431448) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
