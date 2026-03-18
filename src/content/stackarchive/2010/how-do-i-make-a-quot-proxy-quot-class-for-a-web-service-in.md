---
title: "How do I make a &quot;proxy&quot; class for a web service in Eclipse for Java?"
description: "A question I asked on Stack Overflow"
date: 2010-08-07
author:
  name: Nate Bross
tags:
  - c#
  - java
  - visual-studio
  - web-services
  - eclipse
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3428955"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3428955):*

I can't figure this out, I'm a pretty novis Eclipse user. I'm a .NET/C# Guy by trade, and playing with Java in my spare time.

I have a .NET WCF Service hosted with basicHttpBinding -- I'm successfully calling this service from another .NET application, I've used the Visual Studio SvcUtil to generate the proxy class (via Add Service Reference).

I'm wondering how I can achieve the same result for Java using Eclipse? I've downloaded the latest version of Eclipse, but I can't seem to get it working.

---

> [Nader Shirazie answered](https://stackoverflow.com/a/3428984) (2 upvotes):
>
> Look under File -> New -> Other. In the dialog, select Web Service Client.
> 
> If you don't see this option, you're probably missing the [Web Tools Platform](http://www.eclipse.org/webtools/) plugin.
> 
> There's a tutorial [here](http://px.pats.no/px/Eclipse_tutorial.html), that steps you through the process (though on an older version of eclipse).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3428955) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
