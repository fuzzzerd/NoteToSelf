---
title: "WP7 - Can You Monitor Location Change?"
description: "My answer to \"WP7 - Can You Monitor Location Change?\" on Stack Overflow"
date: 2012-09-17
author:
  name: Nate Bross
tags:
  - c#
  - windows-phone-7
  - windows-phone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12467829"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/12467703):*

> Is there a good way to monitor a phone's location? I'm working on an app that lets you check in to places, but I want to automatically check the user out if their phone leaves the place. So the app would need to wake up every 10 or 15 minutes, whether the phone was locked or not, and compare its current location to the location of the last place it was checked in. If it's not the same, it checks the user out.
> 
> The challenge is that the phone might be locked when the user leaves the location, and I don't want to wait until the user unlocks their phone, or even worse, opens the app to update the location.
> 
> Is there a good way to do this in WP7?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

You will need to use the [GeoCoordinateWatcher](http://msdn.microsoft.com/en-us/library/system.device.location.geocoordinatewatcher%28v=vs.92%29.aspx) and the [Background Tasks API](http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh202942%28v=vs.92%29.aspx). Using it in a background task causes it to use cached location data. This cache is updated every 15 minutes.

> This API, used for obtaining the geographic coordinates of the device, is supported for use in background agents, but it uses a cached location value instead of real-time data. The cached location value is updated by the device every 15 minutes.

\-- [MSDN](http://msdn.microsoft.com/en-us/library/hh202962%28v=VS.92%29.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12467829) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
