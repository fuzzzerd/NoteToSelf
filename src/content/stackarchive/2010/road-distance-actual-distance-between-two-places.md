---
title: "Road distance,Actual distance between two places"
description: "My answer to \"Road distance,Actual distance between two places\" on Stack Overflow"
date: 2010-11-10
author:
  name: Nate Bross
tags:
  - iphone
  - google-maps
  - gps
  - distance
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4146115"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4144746):*

> I want to calculate the driving distance between two locations \[the user's specified locations\], before user starts the driving. I used many formulas and getDistanceFrom in CLLocation also, but I am not able to get the perfect the driving distance between those locations.
> 
> There is much difference in actual and calculated distance.
> 
> Please help me to calculate the driving distance between two locations. How can I use Google Maps API to calculate the driving distance ?
> 
> I have already use the regexkitlite to show the road path on Google Maps between the two place. However I can't calculated the path distance.
> 
> If you have any code/link, please send it to me.
> 
> Thanks in advance....

*I posted the following answer:*

If you have two LatLongs you can calculate the direct distance between them; however, since you want driving directions (not as the crow flies) you'll need access to street-center-lines, so you can calculate the distance for each "leg" of the trip.

Google Maps may provide driving directions along with route distance, you'll need to check the documentation for that specific functionality.

_edit_

On a second look, it appears this may not be available on the API (as of 2006), but a work-around is posted here: [http://groups.google.com/group/Google-Maps-API/msg/4dc2fad4f74e3314](http://groups.google.com/group/Google-Maps-API/msg/4dc2fad4f74e3314)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4146115) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
