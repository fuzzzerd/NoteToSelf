---
title: "Starting a Service from Cmd.exe"
description: "My answer to \"Starting a Service from Cmd.exe\" on Server Fault"
date: 2010-07-28
author:
  name: Nate Bross
tags:
  - command-line-interface
  - windows-service
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/164992"
---

*Someone [asked on Server Fault](https://serverfault.com/q/164977):*

> I have a WCF Service being hosted by a Windows Service.
> 
> How would I go about starting the service from the command line while passing the following arguments
> 
> The user I would like the service to logon as. I also need to pass in the password for the user.
> 
> I have previously been entering the values into services.msc but I find this tiresome

*I posted the following answer, which received 2 upvotes:*

Additionally, if you are always working locally (i.e. not remoting controlling services on other machines) you can use

```
net start "service name"
net stop "service name"

```

To expand on Massimo's answer, you can use service control (sc) to minipulate services on other machines in your domain:

```
sc \\serverName start "service name"
sc \\serverName stop "service name"

```

---
*Originally posted on [Server Fault](https://serverfault.com/a/164992) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
