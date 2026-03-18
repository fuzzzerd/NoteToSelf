---
title: "FIleMaker + Windows 7: Web Viewer Memory Issues"
description: "My answer to \"FIleMaker + Windows 7: Web Viewer Memory Issues\" on Stack Overflow"
date: 2011-09-14
author:
  name: Nate Bross
tags:
  - memory-management
  - windows-7
  - memory-leaks
  - filemaker
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7422124"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7417934):*

> My company has developed a pretty massive FileMaker app. Instead of using FileMaker's Container object to handle pictures, I more or less wrote my own version of 360Works SuperContainer in Rails and I have it running on a server in our office; pictures show up through the Web Viewer.
> 
> The app seemed to work fine at first, but then the complaints came rolling in - "My computer's really slow!" "I can't see the pictures!" - and so on and so forth. A quick peek into Task Manager showed that FileMaker was consuming an enormous amount of memory. Apparently, the Web Viewer caches all data in system memory, and only removes stuff from memory if FileMaker switches to a layout that doesn't have a Web Viewer. To remedy this, I wrote a script to switch to a non-Web Viewer layout and back and wired it up to a button. It's a bit ugly, but it was getting the job done.
> 
> This was working great for everyone, until a few weeks ago. We finally upgraded all the computers in the office from beat-up Dells running Windows XP to custom-built machines running Windows 7. For some reason, when I run the layout switch script, it only flushes _some_ of the memory. Here's a quick breakdown of memory consumption in KB after certain actions:
> 
> > Start: 58482
> > 
> > Loaded DB: 71024
> > 
> > Browsed 50 records: 247820
> > 
> > Flushed: 81512
> > 
> > Browsed 50 records: 272848
> > 
> > Flushed: 86264
> 
> And hundreds - thousands - of records are browsed, daily. Compounded with the fact that my users never ever want to reboot their systems, I am constantly getting called from my office to do just that.
> 
> I know that in Windows, FileMaker's Web Viewer runs on the IE rendering engine... I was wondering if there were any way to set it to clear the memory after each page load or something. Our company pretty much depends on this app to function, and when this app isn't working smoothly, nothing works smoothly - so I'd really appreciate any suggestions.

Have you used the

```
Set Web Viewer [Object Name: "wbvName"; Action:Reset]

```

script step?

You may want to drop a script that does that in your `OnRecordChange` script trigger.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7422124) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
