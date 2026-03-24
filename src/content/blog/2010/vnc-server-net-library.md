---
title: "VNC Server .Net Library"
description: "My answer to \"VNC Server .Net Library\" on Stack Overflow"
date: 2010-12-27
author:
  name: Nate Bross
tags:
  - .net
  - network-protocols
  - vnc-server
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4540404"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4538185):*

> I'm looking for a .NET component which aid me the introduction of VNC communication compatibility to an application.
> 
> The application already installs necessary Windows hook, so I'm interested only on a library which able me to communicate with VNC clients without re-implementing the VNC protocol.
> 
> Is there such library?
> 
> If it is possible, I'd like to have a closed license compatible components (i.e. LGPL).

*I posted the following answer, which was chosen as the accepted answer:*

[VNCSharp](http://cdot.senecac.on.ca/projects/vncsharp/) is a client library. I'm unsure of its full abilities, as VNC allows both "client" and "server" to act as each other; but it should be a good starting point. That said, as far as I know, it may be the only .NET starting point as its the only .NET VNC component I've ever been able to locate.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4540404) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
