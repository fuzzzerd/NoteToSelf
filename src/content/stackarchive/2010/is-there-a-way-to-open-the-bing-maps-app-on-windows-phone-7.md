---
title: "Is there a way to open the Bing Maps App on Windows Phone 7 to a specific location?"
description: "A question I asked on Stack Overflow"
date: 2010-07-28
author:
  name: Nate Bross
tags:
  - c#
  - silverlight
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3358232"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3358232):*

The built-in emulator from the WP7 Tools doesn't have the Bing App installed, and I don't have any phone hardware to test with. So I'm simply wondering, how can I open the Bing Maps Application to a specific Lat/Long?

Related Questions:

iPhone -- [How can I launch the Google Maps iPhone application from within my own native application?](https://stackoverflow.com/questions/30058/how-can-i-launch-the-google-maps-iphone-application-from-within-my-own-native-app)

Android -- [https://developer.android.com/guide/appendix/g-app-intents.html](https://developer.android.com/guide/appendix/g-app-intents.html)

---

> [Matt Lacey answered](https://stackoverflow.com/a/3395010) (2 upvotes):
>
> Unfortunately there is no way to launch the Bing Maps App from within your own application.  
> In an early CTP there was a way but this has been removed. Hopefully it will return in the future but it is not on any current, public, roadmaps.
> 
> This leaves two alternatives.
> 
> Option 1  
> You could [perform a search](http://msdn.microsoft.com/en-us/library/microsoft.phone.tasks.searchtask\(v=VS.92\).aspx) for the lat/long you want to show. The search app does directly integrate with the bing maps app so, assuming that bing can take the lat/long you provide and return something useful, the user would still be able to do whatever they wished within the bing maps app.
> 
> This has 2 downsides though. Firstly, you have no control over the search results. And, secondly, you cannot test this on the emulator.
> 
> Option 2  
> You could use the [BingMaps control](http://msdn.microsoft.com/en-us/library/ff941096\(VS.92\).aspx) within your own silverlight application.  
> (Prior to the RTM, it was posible to [use the full Silverlight version of the control within your app](http://msdn.microsoft.com/en-us/library/ff637517\(VS.92\).aspx). But, this had a few quirks and was only ever intended as a stop gap solution.)  
> While not as fully featured as the app, the control does offer a lot of functionality.
> 
> Without a real device, but you could simulate location data, for testing, with the [Reactive Extensions](http://msdn.microsoft.com/en-us/library/ff637517\(VS.92\).aspx).  
> Even with a real device you will probably want to look at doing this as it's a lot easier than trying to debug while walking or driving around.
> 
> **Edit:**  
> As per [this post by Kevin Marshall](http://blogs.claritycon.com/blogs/kevin_marshall/archive/2010/12/06/wp7-tip-pseudo-map-launcher.aspx), if you're going to use the `WebBrowserTask()` (option 1 above) prefix your query with "maps:" and URL encode your query string. eg:
> 
> ```
> var task = new WebBrowserTask(); 
> task.URL = "maps:1%20N%20Franklin%2060606";
> 
> ```
> 
> or
> 
> ```
> task.URL = "maps:37.788153%2C-122.440162";
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3358232) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
