---
title: "Use of GPS Classes Events in other classes"
description: "My answer to \"Use of GPS Classes Events in other classes\" on Stack Overflow"
date: 2011-01-14
author:
  name: Nate Bross
tags:
  - c#
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4693396"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4693123):*

> I have a GPS class for Windows Phone 7 which I got out of the MSDN.
> 
> ```
> public class GetGPS : GeoCoordinateWatcher
>     {
>         GeoCoordinateWatcher watcher;
>         public float longitude { get; set; }
> 
>         public GetGPS()
>         {
>             watcher = new GeoCoordinateWatcher(GeoPositionAccuracy.High);
>             watcher.MovementThreshold = 20.0;
>             watcher.PositionChanged += watcher_PositionChanged;
>             watcher.StatusChanged += this.watcher_StatusChanged;
>             watcher.Start();
>         }
> 
>         public void watcher_StatusChanged(object sender, GeoPositionStatusChangedEventArgs e)
>         {
>             switch (e.Status)
>             {
>                 case GeoPositionStatus.Initializing:
>                     break;
>                 case GeoPositionStatus.Ready:
>                     //plingpling
>                     break;
>                 case GeoPositionStatus.Disabled:
>                     // location is unsupported on this device
>                     break;
>                 case GeoPositionStatus.NoData:
>                    //pling
>                     break;
>             }
>         }
>         public void watcher_PositionChanged(object sender, GeoPositionChangedEventArgs<GeoCoordinate> e)
>         {
>             Debug.WriteLine(String.Format("***POSITION: {0}, {1}", e.Position.Location.Latitude, e.Position.Location.Longitude));
>             Helfer.myLocation = e.Position.Location;
>         }
> 
>     }
> 
> ```
> 
> When I try to use this class in my Program I never get the actual position in which I am - I get that position after the program was running for some time - I guess I can hold the asynchronous execution accountable for that.
> 
> However, when I implement the GetGPS constructor directly in the class where I need the gps (and define the watcher in that class too...) I get what I want - but since I have to get the GPS position in some parts in my program I thought it would be best to outsource that functionality into a class (DRY-Principle).
> 
> How could I create an instance of GetGPS in a class "test" which implements - or observes the StatusChanged and PositionChanged objects?
> 
> If I could create an event listener in that class ... I could get my desired functionality :).

If you expect that the GPS position will change frequently during your applications execution, and you need real-time updates, what I would do, is simply add a public property called `CurrentLocation` to your class, and set its value in the `PositionChanged` event. Then you keep a global reference to an instance of your `GetGPS` class, and when ever you need to access the location, you use the `CurrentLocation` property.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, you can, because the `PositionChanged` event will continue to update the `Helfer.myLocation` until `watcher.Stop();` is called. Thus every time you check the value of `Helfer.myLocation` it will be the most up-to-date GPS position available.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4693396) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
