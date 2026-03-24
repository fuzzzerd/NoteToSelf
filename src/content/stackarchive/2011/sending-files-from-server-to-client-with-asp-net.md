---
title: "Sending files from server to client with ASP.NET"
description: "My answer to \"Sending files from server to client with ASP.NET\" on Stack Overflow"
date: 2011-05-23
author:
  name: Nate Bross
tags:
  - asp.net
  - wcf
  - sockets
  - network-programming
  - ftp
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6101485"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6101294):*

> I am developing a C# ASP.NET 4.0 application that will reside on a Windows Server 2003. By mean of accessing this application through a network computer, any user would be able to upload files to the windows server. But also, once these files are stored on server, he/she would be able to copy these files from the windows server to another networked computer.
> 
> I have found a way to upload files to a specified location on the server disk, but now I need to send these files that are on server disk to the client computers.
> 
> My question is: Is there any way to send or copy files from server to other client computers (not the one that is accessing the web service) without needing a program recieving those files on the client computers? FTP, WCF, cmd commands, sockets?
> 
> Any idea?

*I posted the following answer, which received 1 upvote:*

If you want users of your webapp to download files, I'd look into an "ashx generic handler." It will allow you to send files back down to clients over HTTP(s).

If you are looking to have remote users, tell your webserver to copy files to other servers ON THE SAME LAN AS THE SERVER, you would write using normal System.IO operations.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6101485) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
