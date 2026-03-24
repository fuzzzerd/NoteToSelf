---
title: "WCF bindings/security configuration for Intranet that uses Mac and Windows?"
description: "My answer to \"WCF bindings/security configuration for Intranet that uses Mac and Windows?\" on Stack Overflow"
date: 2011-05-16
author:
  name: Nate Bross
tags:
  - wcf
  - wcf-security
  - wcf-configuration
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6022720"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6022599):*

> What bindings and security configurations are best for an environment with Windows and Mac Computers?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

[BasicHttpBinding](http://msdn.microsoft.com/en-us/library/ms731361.aspx) will probably have the greatest reach. Just about every platform supports it, since the data is simply sent as an HTTP POST to a specific Uri -- any platform which has a web browser can use this binding.

You can do an HTTPs binding with [BasicHttpBinding](http://msdn.microsoft.com/en-us/library/ms731361.aspx) as well -- so you can still secure your data. You can also use security like TransportWithMessageCredential to provide username/password validation.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6022720) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
