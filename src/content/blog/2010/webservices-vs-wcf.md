---
title: "Webservices vs WCF"
description: "My answer to \"Webservices vs WCF\" on Stack Overflow"
date: 2010-07-14
author:
  name: Nate Bross
tags:
  - asp.net
  - wcf
  - .net-4.0
  - web-services
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3247960"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3247926):*

> I am working on an asp.net application (.net 4 framework) design and was wanting to know what are the pros and cons and best practices for using webservices vs WCF techology? This application will eventually be used by outside clients to consume data.
> 
> When would you use WebServices and when would you use WCF? Is one more scalable than the other?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

I would use WCF because it can do everything webservices (asmx) does; while giving you the flexibility to extend much further.

You can setup a simple WCF Service just as easily as an ASMX service through Visual Studio. So if you're "Fresh" on both technologies, I'd spend time learning WCF.

Depending on your specific use-case, you might might also look into WCF Data Services (.NET4) and Entity Framework. It basically gives you a nice API that you can use to consume your database over http/https. The beauty of WCF Data Services, is that you end up writing very little code to get at your data, and you can focus on consuming it.

WCF Getting Started -- [http://msdn.microsoft.com/en-us/library/ms734712.aspx](http://msdn.microsoft.com/en-us/library/ms734712.aspx)

WCF Data Services -- [http://msdn.microsoft.com/en-us/data/ee720180.aspx](http://msdn.microsoft.com/en-us/data/ee720180.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3247960) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
