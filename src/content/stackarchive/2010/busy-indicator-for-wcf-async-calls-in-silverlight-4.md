---
title: "Busy indicator for WCF async calls in Silverlight 4?"
description: "My answer to \"Busy indicator for WCF async calls in Silverlight 4?\" on Stack Overflow"
date: 2010-07-27
author:
  name: Nate Bross
tags:
  - silverlight
  - wcf
  - silverlight-4.0
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3348211"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3348192):*

> I have a SL4 app consuming WCF services. The client make async call to the services, during this time I would like to show some sort information or busy indicator on the screen which tells the users that the app is doing something.
> 
> Now I am pretty sure SL4 has something like this, but I am drawing a blank....
> 
> Can someone please point me to the right direction?

You need an animation storyboard and then use code like this:

```
wcfProxyClass.DoMethodAsync()
loadingStoryboard.Begin();

```

Then in the Completed event handler

```
loadingStoryboard.End(); // not sure on this syntax

```

Here's a great article that should get you started. -- [http://chrisa.wordpress.com/2008/10/09/a-wait-indicator-in-silverlight/](http://chrisa.wordpress.com/2008/10/09/a-wait-indicator-in-silverlight/)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3348211) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
