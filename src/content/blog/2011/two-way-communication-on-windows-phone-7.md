---
title: "Two-way communication on Windows Phone 7"
description: "My answer to \"Two-way communication on Windows Phone 7\" on Stack Overflow"
date: 2011-12-02
author:
  name: Nate Bross
tags:
  - c#
  - wcf
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/8361416"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/8361199):*

> I should make an application for Windows Phone 7.5, which is able to communicate bidirectionally with the same application installed on other devices with the same operating system.
> 
> I read that the Silverlight version on Windows Phone only supports BasicHttpBinding, so I think I will have to implement bi-directional mode using the BasicHttpBinding: for example, the node that accepts the incoming "connection" could send a GUID to the requesting node in order to identify a kind of session (this GUID should then be sent for each subsequent communication between two nodes).
> 
> Are there better alternatives?
> 
> The core of all communication is communication between two nodes:
> 
> *   there are three types of requests (one of these must be very frequently, say every 10 seconds);
> *   the node which receives a request, could answer or ignore the request.
> 
> What is the impact on performance?

I don't think there is a way to accept connections on WP7 devices, see [here](http://forums.create.msdn.com/forums/p/84014/506327.aspx).

Since WP7 doesn't support poll duplex WCF services either, I recommend you manually implement it, similar to this: [http://www.dominikschmidt.net/2010/12/windows-phone-7-callbacks-and-duplex-wcf/](http://www.dominikschmidt.net/2010/12/windows-phone-7-callbacks-and-duplex-wcf/)

You will need a central server which all clients continually post messages to. Every time a Client1 calls the server, it checks the database to see if Client2 sent Client1 a message. If so, that message is included in the response to Client1.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/8361416) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
