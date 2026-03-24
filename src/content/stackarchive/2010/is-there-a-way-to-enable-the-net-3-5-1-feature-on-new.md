---
title: "Is there a way to Enable the .NET 3.5.1 Feature on NEW install of Server 2008 R2 during install"
description: "A question I asked on Server Fault"
date: 2010-10-28
author:
  name: Nate Bross
tags:
  - windows
  - windows-server-2008-r2
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/195911"
---

*I [asked this on Server Fault](https://serverfault.com/q/195911):*

Is there a way to Enable the .NET 3.5.1 Feature on NEW install of Server 2008 R2 during install? I'm installing of normal media, and going through the install process there is no configuration options, so after installation, I'm having to manually enable this feature on every server, is there a better way? I'm typically installing to Hyper-V VMs.

---

> [TomTom answered](https://serverfault.com/a/195916) (1 upvotes):
>
> Well...
> 
> *   Dont install to Hyper-V VMs. Make one install, then run sysprep and copy the disc. This is what I do. A lot faster. Especially if new vms just get a differential disc. I have a master fully installed, a differential with just the sysprep and a new vm is up in less than a minute.
>     
> *   Features can be installed by command line.
>     
> 
> [https://web.archive.org/web/1/http://blogs.techrepublic%2ecom%2ecom/datacenter/?p=294](https://web.archive.org/web/1/http://blogs.techrepublic%2ecom%2ecom/datacenter/?p=294)
> 
> Has some infos about it. This means you can have all the installs scripted from one script post install, if you dont got for the first idea.
> 
> *   Finally, there is unattended install options, you know ;) And the customization with the Windows Installer Kit. If you want to go this way.
> 
> I do not - I basically use the first approach I mentioned. A lot faster.

---
*Originally posted on [Server Fault](https://serverfault.com/q/195911) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
