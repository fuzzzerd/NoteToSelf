---
title: "Log an Application&#39;s Network Activity with Process Monitor and/or Fiddler or something else"
description: "A question I asked on Server Fault"
date: 2011-03-01
author:
  name: Nate Bross
tags:
  - windows
  - ssl
  - logging
  - man-in-the-middle
  - snoop
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/241879"
---

*I [asked this on Server Fault](https://serverfault.com/q/241879):*

I've got a bit of a tricky application I need to monitor. Its a Java .jnlp file. Using Process Monitor, I've been able to identify it (its instance of javaw) going out to the other servers in my network; however, running Fiddler, it shows no activity what-so-ever. I do know the traffic is HTTPS encrypted, and it appears to be connecting on ports which my servers are running web servers (tomcat). With Process Monitor I can see the length and direction (send/receive) that the data is going, but it doesn't even show me the encrypted contents.

I'm wondering, if there is any way I can man-in-the-middle this program to see what data its sending from my machines?

**update**

The server software that this jnlp is communicating with, is installed as a "package" and I have not been able to find any SSL certificate files within the directory of this application. I've used Wireshark, but without the private keys, I haven't been able to decrypt the traffic.

The solution with a VM Gateway running some proxy (other?) software seems the easiest to implement, how would you go about deploying that solution with Virtual Box?

---

> [Evan Anderson answered](https://serverfault.com/a/241887) (2 upvotes):
>
> Fidler isn't a sniffer-- it's a proxy. Unless you can get the offending application to use a proxy none of its traffic is going to run through Fiddler.
> 
> Microsoft Network Monitor will show you the encrypted traffic, as will Wireshark. Network Monitor 3.x versions have the nice touch of being able to filter based on process (since they're "tightly coupled" with the OS).
> 
> AFAIK, Java applications don't use the operating system's SSL "stack", so interception utilities that shim into the Windows SSL stack aren't going to be helpful either.
> 
> Presumably the remote servers aren't running an SSL stack that's easy to snoop inside (since you say they're running Tomcat, and also not likely using the OS SSL stack).
> 
> I'd run the offending program in a VM w/ a Linux-based VM acting as its default gateway. You could then use some iptables NAT rules to redirect the connection attempts to a HTTPS-to-HTTP proxy that, in turn, forwards the request on to an HTTP-to-HTTPS reverse proxy and, ultimately, to your servers. You would be able to log the traffic when it's in an HTTP state between the proxy and reverse-proxy servers. It's not elegant (and somebody else can probably think of a cleaner method that uses fewer moving parts) but you could do the whole thing with off-the-shelf software (I'd probably use a couple instances of nginx). Presumably the offending application isn't authenticating that it's actually talking to your servers but, if it is, you could just export the SSL certs and private keys from your servers to make the deception "complete".
> 
> Assuming you've got the SSL private keys from your servers and you don't configuring your servers' SSL to do RSA-based key exchange you could just capture the traffic and [decrypt it with Wireshark](http://wirewatcher.wordpress.com/2010/07/20/decrypting-ssl-traffic-with-wireshark-and-ways-to-prevent-it/).

---
*Originally posted on [Server Fault](https://serverfault.com/q/241879) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
