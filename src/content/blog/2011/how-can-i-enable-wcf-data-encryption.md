---
title: "How can i enable WCF Data-Encryption"
description: "My answer to \"How can i enable WCF Data-Encryption\" on Stack Overflow"
date: 2011-04-24
author:
  name: Nate Bross
tags:
  - vb.net
  - wcf
  - encryption
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5768157"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5765167):*

> How can I enable the encryption of an WCF (Windows Communication Foundation) Service with VB.NET?
> 
> Is it enough to add a certificate to a service an set <security mode=""> to "TransportWithMessageCredential"? Or is there any other settings needed?
> 
> If this is enough:
> 
> What's with the client? Maybe I'm wrong but I thought the client and the server need a certificate?!
> 
> The client can encrypt messages with the server public key. But how does the server encrypt messages to the client? Or does the client generate an symmetric encryptionkey and send it to the server?

It depends what type of end point you are using. If you are using an HTTP/HTTPS endpoint, simply having a server certificate is sufficient.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5768157) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
