---
title: "Mobile website with cross platform support for SmartPhones"
description: "My answer to \"Mobile website with cross platform support for SmartPhones\" on Stack Overflow"
date: 2011-06-07
author:
  name: Nate Bross
tags:
  - asp.net
  - windows-phone-7
  - cross-platform
  - jquery-mobile
  - smartphone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6268598"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6268333):*

> We have normal website for our company in ASP.NET MVC 2.0. Now, we have planned to devlope the Mobile website for SmartPhones which needs to be supported all the Mobile platfoms like ( iPhone /Android / BlackBerry / Windows Phone 7.
> 
> I would like to develop my mobile site using ASP.NET MVC3 and Jquery mobile . How can i provide the cross platform support for my mobile site >

You should not develop a new sitejust for mobile. You should add mobile views to your current site, and use a custom view engine.

See [here](http://www.hanselman.com/blog/ABetterASPNETMVCMobileDeviceCapabilitiesViewEngine.aspx) -- scroll down to the "CustomMobileViewEngine" section.

If you insist on building a new site, you should still follow the same directions in the post that I linked.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6268598) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
