---
title: "How do you set up redundant servers?"
description: "My answer to \"How do you set up redundant servers?\" on Server Fault"
date: 2011-06-20
author:
  name: Nate Bross
tags:
  - redundancy
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/282374"
---

*Someone [asked on Server Fault](https://serverfault.com/q/282370):*

> To the sysadmins out there, I'm trying to get an idea about how you go about maintaining redundant servers for small projects. The modest number of servers in my mind is two, and three main essential services come to mind: HTTP, mail and DNS. How do you automate this duplicity? Is rsync the tool of choice (again, for small projects)?
> 
> In addition to common tools for these tasks, references to books and articles would be greatly appreciated. The more hands-on the approach, the better.

*I posted the following answer, which received 1 upvote:*

This is a pretty broad question; since you mention rsync, I assume you are talking about a \*nix system.

It really depends on the type of setup you have. If your HTTP service is fully static (no database, or what-have-you) then two twin apache servers with an rsync'ed root directories.

Mail is more tricky, because if you are hosting mailboxes, they're probably in a database, and rsyncing a database at the file-system level will cause corruption.

Depending on how your DNS works (if it uses flat-files for storage) you could also configure the DNS software to run the same on both machines and rsync the flat-files, if it uses a database or custom binary file, rsync will not help.

There ARE enterprise level systems available for this, but since you asked specifically about small-projects I presume that they are out of your scope.

---
*Originally posted on [Server Fault](https://serverfault.com/a/282374) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
