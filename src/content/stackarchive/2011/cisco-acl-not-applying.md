---
title: "Cisco ACL Not Applying"
description: "My answer to \"Cisco ACL Not Applying\" on Server Fault"
date: 2011-06-28
author:
  name: Nate Bross
tags:
  - cisco
  - ios
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/285043"
---

*Someone [asked on Server Fault](https://serverfault.com/q/285016):*

> This is probably something extreamly simple but I am executing the following code to block usage of port 80 on ip 192.168.1.50 and it does not seem to be working. The interface is right and I am using a Cisco Router 2820. Here is the code I used:
> 
> ```
> (config) access-list 101 deny tcp any host 192.168.1.50 eq 80
> (config) access-list 101 permit ip any any
> (config-if) ip access-group 101 in
> (config-if) ip access-group 101 out
> 
> ```
> 
> Any thoughts?

*I posted the following answer:*

Might I suggest two ACLs?

Deny traffic coming INTO the router from anywhere destined for 192.168.1.50 on port 80:

```
(config) access-list 101 deny tcp any host 192.168.1.50 eq 80
(config-if) ip access-group 101 in

```

Allow any traffic out of the router from anywhere to anywhere:

```
(config) access-list 102 permit ip any any
(config-if) ip access-group 102 out

```

---
*Originally posted on [Server Fault](https://serverfault.com/a/285043) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
