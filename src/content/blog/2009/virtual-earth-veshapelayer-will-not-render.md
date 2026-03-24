---
title: "Virtual Earth VEShapeLayer Will Not Render"
description: "My answer to \"Virtual Earth VEShapeLayer Will Not Render\" on Stack Overflow"
date: 2009-06-03
author:
  name: Nate Bross
tags:
  - javascript
  - web-applications
  - virtual-earth
  - bing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/945611"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/942143):*

> The goal: Allow user to turn on and off different layers of data; and to dynamically pull the data for the current extent from a database on map move event.
> 
> This works fine and good if you hard code your VEShapeLayers as done [here](http://krkinnan.members.winisp.net/samples/v5/veshapes/veshapelayersample1.html).
> 
> My list of layers is coming from a database, I have everything working the way I want except that when I add shapes to my VEShapeLayer none are rendered on my map. Calling VEShapeLayer.GetShapeCount() returns the expected number... so the layer has the data..
> 
> Here are the important bits of the code:
> 
> ```
> var assets = [];
> if (WebServiceResult.length > 0) {
>     for (var i = 0; i < WebServiceResult.length; i++) {
>         var ix = FindLayerIndex(WebServiceResult[0].AssetMapLayer);
>         var velatlong = new VELatLong();
>         velatlong.Latitude = WebServiceResult[i].Latitude;
>         velatlong.Longitude = WebServiceResult[i].Longitude;
>         newShape = new VEShape(VEShapeType.Pushpin, velatlong);
>         assets.push(newShape);
>     }
>     // ix is defined above and is vaild and correct
>     map.GetShapeLayerByIndex(ix).AddShape(assets);
> }
> // a call here to map.GetShapeLayerByIndex(ix).GetShapeCount()     
> // returns the expected number of shapes 
> 
> ```

*I posted the following answer, which was chosen as the accepted answer:*

I feel dumb; I had not added the stylesheet to my page's header, and my custom icon was rendering transparent as a result of the stylesheet not being available.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/945611) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
