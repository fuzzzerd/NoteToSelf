---
title: "WPF Search button function"
description: "My answer to \"WPF Search button function\" on Stack Overflow"
date: 2012-06-18
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - windows-phone-7
  - search
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11089403"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11089224):*

> > **Possible Duplicate:**  
> > [Windows Phone 7 Search Button](https://stackoverflow.com/questions/2796304/windows-phone-7-search-button)
> 
> I think that all Windows Phone mobiles have a search button (phisical or not).
> 
> Actually, they have three buttons: `Back button`, `Windows Logo button`, `Search button`.
> 
> Is possible to modify the function of this button (as Back button). Something like `OnSearchKeyPress` (as event handler).
> 
> Its possible?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

This is not possible, because that could seriously alter the behavior of the phone. There is a search task you can use, [for more info, see this MSDN article on it.](http://msdn.microsoft.com/en-us/library/hh202889%28v=VS.92%29.aspx#sectionToggle3)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11089403) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
