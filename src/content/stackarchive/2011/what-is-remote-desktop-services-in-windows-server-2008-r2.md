---
title: "what is Remote Desktop Services in Windows Server 2008 R2 all about?"
description: "My answer to \"what is Remote Desktop Services in Windows Server 2008 R2 all about?\" on Server Fault"
date: 2011-07-01
author:
  name: Nate Bross
tags:
  - windows-server-2008-r2
  - remote-desktop
  - remote-desktop-services
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/286174"
---

*Someone [asked on Server Fault](https://serverfault.com/q/286171):*

> Seriously, I'm lost in all that sales mumbo-jumbo. Let's say I want 1 or 2 users to be able to remotely log on to a server, run Word, Visual Studio, Firefox, and whatever. **Do I gain anything at all if I install Remote Desktop Services? Or do I just install Desktop Experience feature pack, enable remote desktop and voila, nobody will ever notice the difference?**
> 
> Here's what TechNet says about Remote Desktop Session Host:
> 
> > A Remote Desktop Session Host (RD Session Host) server is the server that hosts Windows-based programs or the full Windows desktop for Remote Desktop Services clients. Users can connect to an RD Session Host server to run programs, to save files, and to use network resources on that server. Users can access an RD Session Host server by using Remote Desktop Connection or by using RemoteApp.
> 
> The good old simple remote desktop can also host a full Windows desktop for remote clients so that they can run programs, save files and do all that stuff. **Why do they write about it like it's such a great new invention, besides that they want to sell it?** RDSH doesn't seem all that different at all. What do I install when I install RDSH, since all those features are already there in Windows?
> 
> What's even more confusing is that you need to take special care when you want to install applications to an RDSH so that they will be usable by many concurrent users. Why? All the modern applications install the program files in one directory, store some common settings in the ProgramData folder and the HKLM hive, and store user specific settings in the Users folder and the HKCU hive. They are designed to be usable by many users on the same machine. 2 or 2000 users can use them concurrently without any efforts. I can sign in with 2 users to a server with only remote desktop enabled, and both of us can run Word or anything without any problems, can't we? So what changes if I set RDSH to install mode, or what happens if I don't? **Why is the feature to switch between install and execute mode there at all?**
> 
> Yes I know of some advantages in Remote Desktop Services, like there's no 2 user limit, it supports virtualization, video acceleration and stuff, it has a whole infrastructure with gateway, web access, connection broker, etc. But I don't need those, so if you take these away, how are these two technologies different? From the articles it seems like they are completely different technologies, whereas it looks to me that they are completely the same at the core, and Remote Desktop Services just adds some additional features, but doesn't reinvent anything.

*I posted the following answer:*

As far as I know, they are one and the same. I could be wrong, but I believe the main difference is licensing. Remote Desktop is for 'remote administration' of the server and RDSH is for publishing applications and desktops to remote users.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You _can_ but, technically you are not supposed to. If you have two licenses for Word, Visual Studio, Firefox (free, but still) and you have per user server cals then you should be OK. That said, you might as well just do RDSH to avoid any possible trouble down the road.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/286174) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
