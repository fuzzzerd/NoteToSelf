---
title: "Determine if a server is listening on a given port"
description: "A question I asked on Stack Overflow"
date: 2010-05-14
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - network-programming
  - sockets
  - tcp
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2836674"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2836674):*

I need to poll a server, which is running some propriatary software, to determine if this service is running. Using wireshark, I've been able to narrow down the TCP port its using, but it appears that the traffic is encrypted.

In my case, its a safe bet that if the server is accepting connections (i.e. telnet serverName 1234) the service is up and all is OK. In other words, I don't need do any actual data exchange, just open a connection and then safely close it.

I'm wondering how I can emulate this with C# and Sockets. My network programming basically ends with WebClient, so any help here is really appreciated.

---

> [ChaosPandion answered](https://stackoverflow.com/a/2836750) (10 upvotes):
>
> The process is actually very simple.
> 
> ```
> using (var socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp))
> {
>     try
>     {
>         socket.Connect(host, port);
>     }
>     catch (SocketException ex)
>     {
>         if (ex.SocketErrorCode == SocketError.ConnectionRefused) 
>         {
>             // ...
>         }
>     }
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2836674) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
