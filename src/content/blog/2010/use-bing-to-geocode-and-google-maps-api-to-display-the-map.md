---
title: "Use Bing to geocode and Google maps api to display the map"
description: "My answer to \"Use Bing to geocode and Google maps api to display the map\" on Stack Overflow"
date: 2010-11-12
author:
  name: Nate Bross
tags:
  - google-maps-api-3
  - geocoding
  - google-maps-api-2
  - bing-maps
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4168916"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4168896):*

> I have an application which is currently using the google map API. I like the maps much better, and I feel like you have more options with google maps. The problem is, Google maps has been very inaccurate when I give it an address to map, while Bing has been 100% on so far. I also like Bings Birds Eye view, but that's not as important. My question is, can I use the Bing API to take the address that I give it, return a longitude and latitude and then give that to my existing Google map to plot the point. If so, how? I looked on Bing Maps, and I couldn't find a good way to geocode an address. Below is my current google maps code
> 
> ```
> var map;
> var directionsPanel;
> var directions;
> 
> function initialize() {
>   map = new GMap(document.getElementById("map_canvas"));
>   map.setCenter(new GLatLng(41.1255275,-73.6964801), 15);
>   directionsPanel = document.getElementById("route");
>   directions = new GDirections(map, directionsPanel);
>   directions.load("from: ADDRESS 1 to: ADDRESS 2 ");
> 
>           map.addControl(new GSmallMapControl());
>     map.addControl(new GMapTypeControl());
> 
> }
> 
> ```
> 
> I want to replace ADDRESS 2 with the longitude and latitude which Bing gets

*I posted the following answer, which was chosen as the accepted answer:*

AFAIK, the Bing Maps Ajax Control does not support Geocoding. You will need to use their web services: [SOAP](http://msdn.microsoft.com/en-us/library/dd250965.aspx) or [JSON](http://msdn.microsoft.com/en-us/library/dd250846.aspx) or [XML](http://msdn.microsoft.com/en-us/library/dd250893.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4168916) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
