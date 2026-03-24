---
title: "VirtualBox - use in small office and backing up"
description: "My answer to \"VirtualBox - use in small office and backing up\" on Server Fault"
date: 2009-08-26
author:
  name: Nate Bross
tags:
  - backup
  - samba
  - virtualbox
  - small-business
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/59092"
---

*Someone [asked on Server Fault](https://serverfault.com/q/58738):*

> I run a small office consisting of a 8 man development team and a couple of managers. We're thinking of moving to a hardware setup whereby we have 1 single powerful server running several VirtualBox VMs - one for Samba fileshare acting as DC, another LAMP box for development, another for IE testing....etc....probably 4 or 5 VMs in total. The two crucial ones are the Samba box that runs our network, and then the dev LAMP box that most of our development is carried out on.
> 
> The reason this sort of setup appeals to me is because I like the idea of being able to backup all the VMs overnight if necessary - and the restore _should_ be quick and painless if we've got a barebones VirtualBox host.
> 
> I appreciate that for backing up the VMs will need to be powered down but I don't think that this is going to be a show-stopper. It may be that we decide to run Samba on the core host OS so there's no need to shut it down (we'll just sort out an rsync of the data).
> 
> So I'm just looking for some opinions on this "VM for everything" approach. Is this normal for businesses? Are there any clear issues with this or things that just won't be possible in comparison to physical boxes? Has anyone tried this and hit any major problems or has it worked out nicely?
> 
> Any opinions much appreciated.
> 
> Kind regards,
> 
> James.

*I posted the following answer:*

VirtualBox is a great desktop virtualization solution it's not a great server solution. Hyper-V or ESX or XenServer are probably the route you should take.

Not to toot the Windows horn here, but I have the most experience with it. Hyper-V is a great hypervisor with simple and effective built-in backup using shadow copy. Supports snapshots and VM migration (not live, but you can move a VM from one host to another in 15-20 minutes depending on network and vhd size).

We are able to get huge density with Hyper-V, on a Dell 2950 with dual dualcore cpus, 32GB memory and large hard drives we see upwards of 25 Windows VMs (1GB memory and 1 cpu).

@tomjedrz makes a great point -- get two hardware boxes with headroom so you don't grind to a halt if one goes down.

At a high level, your approach is a perfectly acceptable solution, you just need to do some testing to make sure it will work in your environment.

---
*Originally posted on [Server Fault](https://serverfault.com/a/59092) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
