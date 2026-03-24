---
title: "LDAP Authentication though a Firewall"
description: "My answer to \"LDAP Authentication though a Firewall\" on Server Fault"
date: 2011-05-26
author:
  name: Nate Bross
tags:
  - firewall
  - ldap
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/274143"
---

*Someone [asked on Server Fault](https://serverfault.com/q/274136):*

> I have a Rails Gem that does Active Directory authentication and its test suite has quite a lot of authentication checks. When I run the test suite on our LAN everything works no problem (as one would expect) but we are thinking of moving one of our applications off to a cloud server which of course means it will be accessing the DC from outside the network.
> 
> I've pulled a copy of the LDAP Gem onto a cloud server that we can test with and setup a port forward on our firewall and then ran the tests after putting in the settings and they fail, but in a different way to if you get your password wrong.
> 
> I'm getting a successful login appearing in the security logs on the DC but for what ever reason its not returning the data back to the client.
> 
> I have port XXXX forwarded to port 389 on the DC, do I need any other forwards?

*I posted the following answer, which was chosen as the accepted answer and received 8 upvotes:*

[LDAP](http://en.wikipedia.org/wiki/Ldap) uses TCP 389 for unsecured communication and 636 for secured communication.

> A client starts an LDAP session by connecting to an LDAP server, called a Directory System Agent (DSA), by default on TCP port 389.

and

> A common alternate method of securing LDAP communication is using an SSL tunnel. This is denoted in LDAP URLs by using the URL scheme "ldaps". The default port for LDAP over SSL is 636.

In terms of firewall, you'll need to allow access to those ports from the "External" interface of the firewall to the "Trusted" interface. If you are using a NAT, you may need to add the rule on both the public IP as well as the LAN IP.

You shouldn't need to forward any ports, but you will need to allow communication as follows:

```
permit tcp any x.x.x.x 0.0.0.0 389
permit tcp any x.x.x.x 0.0.0.0 636

```

Where you allow any source IP on any souce port that is destened for your server on a specific port.

You should also allow any established connections, on Cisco devices it looks like `permit any established` this will allow the response from your server back out of the firewall. Most firewalls typically do this established thing by default (in my experience) so if you have a dedicated firewall this shouldn't be an issue.

---
*Originally posted on [Server Fault](https://serverfault.com/a/274143) — 8 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
