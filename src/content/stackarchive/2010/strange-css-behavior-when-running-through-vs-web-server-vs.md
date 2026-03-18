---
title: "Strange CSS behavior when running through VS Web Server vs IIS"
description: "A question I asked on Stack Overflow"
date: 2010-02-22
author:
  name: Nate Bross
tags:
  - html
  - css
  - visual-studio
  - behavior
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2314212"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2314212):*

So the question basically says it all -- I've got a site that looks one way when I run it locally through the visual studio web server ([http://localhost:3452/](http://localhost:3452/)) and on IIS7 ([http://server/myproject/](http://server/myproject/)).

At first I thought there was something wrong with my CSS that was not resolving properly, but I believe I've checked all of those things and they appear to be working.

I'm using IE8, (same funkyness happens in FF and IE7) and running locally I see the "compatibility" button in the address bar, but when I access the site thats published to a server, the "compatibility" icon goes away.

I'm using `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`

The behavior/display I see locally is the desired behavior/display.

Any help, pointers, and advice is greatly appreciated!

**update**

After checking the links provided, I believe that I'm running under "intranet" settings -- is there a way to force the IE8 to run in Standards Mode even on an intranet?

**update 2**

The issue turned out to be my less than awesome CSS that only manifested itself during "intranet" testing. I had not started making my CSS multi-browser compliant, and didn't realize IE8 was running in IE7 mode when hitting "intranet" sites. I fixed my CSS and its all good now.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2314212) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
