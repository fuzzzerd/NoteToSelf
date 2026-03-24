---
title: "CentOs powered VPS : create a user that can access only ssh and not files"
description: "My answer to \"CentOs powered VPS : create a user that can access only ssh and not files\" on Server Fault"
date: 2011-05-31
author:
  name: Nate Bross
tags:
  - centos
  - ssh
  - ssh-tunnel
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/275558"
---

*Someone [asked on Server Fault](https://serverfault.com/q/275552):*

> I'd like to give one of my friend access to my server through ssh so he can setup a tunnel and use as a SOCKS proxy (to circumvent pesky per country restrictions on certain website, we're in France)
> 
> However, I do not want him accessing my files on the server. In fact I don't want him to be able to do anything but create ssh tunnels.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

You would just create an account on the server as per normal, and then setup the ACLs on your files to specifically DENY access from that account. This gives the account full access to their own files (maybe the would want to FTP or something from within the SSH session) while keeping your files safe.

If you don't trust this person enough to where using the OSes built-in file permissions is not sufficient, giving them SSH access to your server is a bad idea in the first place.

---
*Originally posted on [Server Fault](https://serverfault.com/a/275558) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
