---
title: "Silverlight - Bing Maps - Customize Pushpin Style"
description: "My answer to \"Silverlight - Bing Maps - Customize Pushpin Style\" on Stack Overflow"
date: 2010-06-10
author:
  name: Nate Bross
tags:
  - silverlight
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3016460"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2414643):*

> How do I customize the style of a pushpin on the Bing Maps Silverlight control? I have reviewed the documentation shown here ([http://www.microsoft.com/maps/isdk/silverlightbeta/#MapControlInteractiveSdk.Tutorials.TutorialCustomPushpin](http://www.microsoft.com/maps/isdk/silverlightbeta/#MapControlInteractiveSdk.Tutorials.TutorialCustomPushpin)). However, I am programmatically adding a variable number of Pushpins. Ideally, I would like to be able to set the style of each pushin, but I do not know how.

*I posted the following answer, which received 1 upvote:*

I would do this by creating a layer and then adding my push pins to that layer.

```
// during initial load
MapLayer lay = new MapLayer();
MapControl.Children.Add(lay);


// for each pushpin you want to add
Image image = new Image();
// this assumes you have an "Images" folder on the root of your host web application
image.Source = new BitmapImage(new Uri(App.Current.Host.Source, "../Images/PushPin.png"));
var lat = 40.4d;
var long = -81.8d;
Location location = new Location(lat, long, 0d);

//Define the image display properties
image.Opacity = 1.0;
image.Stretch = Stretch.None;

// Center the image around the location specified
PositionOrigin position = PositionOrigin.Center;

//Add the image to the defined map layer
lay.AddChild(image, location, position);

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3016460) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
