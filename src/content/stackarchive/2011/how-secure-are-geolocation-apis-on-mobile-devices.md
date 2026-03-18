---
title: "How secure are GeoLocation APIs on Mobile Devices?"
description: "A question I asked on Stack Overflow"
date: 2011-06-09
author:
  name: Nate Bross
tags:
  - android
  - ios
  - security
  - windows-phone-7
  - gis
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/6298921"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/6298921):*

How easy is it to hack or provide mis-information to a website via a GeoLocation API?

I have a need to have users post their position to my server, but I need to ensure that the data is not spoofed. Pin-Point accuracy is not required, but I need to know that the user was at least in the vicinity of where they claim to have been.

As long as I protect my service from being invoked arbitrarily (with user provided parameters) can I trust the lat/long given by the GPS systems in modern smartphones accessed through native apps? What about through HTML5?

My question is basically, are the built-in OS APIs secure in the sense that (assuming non-rooted phones) that the data coming back from the API is valid? If not, is there any way I can verify the data is at least reasonable?

---

> [fzwo answered](https://stackoverflow.com/a/6299128) (6 upvotes):
>
> Are you expecting malice?
> 
> As with any technology relying on the client, you have to trust the client. With rooted/jailbroken phones, theoretically the data can be manipulated on the phone. If location services are disabled, you might get placeholder data (though you should get an indication that geolocation is disabled). As far as I know, there is no reliable way to detect whether an iPhone has been jailbroken for sn app store app, much less a website.
> 
> That aside, any system can be gamed, but providing false geo data on a stock, non-jailbroken iPhone would not be trivial; the same _probably_ goes for Android.
> 
> You could also do sanity checks by using an external, IP-based geolocation service (that could, again, be fooled, for instance by proxy servers).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/6298921) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
