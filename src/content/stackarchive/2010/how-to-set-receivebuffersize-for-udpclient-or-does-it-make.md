---
title: "How to set ReceiveBufferSize for UDPClient? or Does it make sense to set? C#"
description: "My answer to \"How to set ReceiveBufferSize for UDPClient? or Does it make sense to set? C#\" on Stack Overflow"
date: 2010-06-10
author:
  name: Nate Bross
tags:
  - c#
  - sockets
  - buffer
  - udpclient
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3017669"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2402396):*

> I am implementing a UDP data transfer thing. I have several questions about UDP buffer.
> 
> I am using UDPClient to do the UDP send / receive. and my broadband bandwidth is 150KB/s (bytes/s, not _bps_).
> 
> 1.  I send out a 500B datagram out to 27 hosts
>     
> 2.  27 hosts send back 10KB datagram back if they receive.
>     
> 3.  So, I should receive 27 responses, right? however, I only get averagely 8 - 12 instead.
>     
> 4.  I then tried to reduce the size of the response down to 500B, yes, I receive all.
>     
> 
> A thought of mine is that if all 27 hosts send back 10KB response at almost same time, the incoming traffic will be 270KB/s (likely), that exceeds my incoming bandwidth so loss happens. Am I right?
> 
> But I think even if the incoming traffic exceeds the bandwidth, is the Windows supposed to put the datagram in the buffer and wait for receive?
> 
> I then suspect that maybe the ReceiveBufferSize of my UdpClient is too small? by default, it is 8092B??
> 
> I don't know whether I am all right at these points. Please give me some help.

The UDP protocol does not guaratnee delivery, you should switch to TCP if you need to guaratnee packet delivery.

UDP is better suited to apps where loosing a packet is better than waiting for a packet to find its way to you. i.e. streaming media or somehting similar.

See [wikipedia](http://en.wikipedia.org/wiki/User_Datagram_Protocol) for more.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3017669) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
