---
title: "When to expand a web server&#39;s unshared connection?"
description: "My answer to \"When to expand a web server&#39;s unshared connection?\" on Server Fault"
date: 2011-11-09
author:
  name: Nate Bross
tags:
  - web-server
  - bandwidth
  - isp
  - internet
  - google-webmaster-tools
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/329415"
---

*Someone [asked on Server Fault](https://serverfault.com/q/329404):*

> We have a 3 mbps by 3 mbps dedicated, unshared pipe that hosts a web server, mail server, and VoIP/web browsing traffic for 8 employees. The web server hosts a few different sites that average about 250,000 page views total per month, with something less than a 40kb average page load size I'd estimate. I'm not sure how much of that is cached. (Side question: Is there some place in Google Analytics/Webmaster Tools that calculates actual page load size w/ taking into account cached values?)
> 
> **Our #1 priority is to ensure fast load times from our web server**. How should we know when we need to expand our connection beyond 3x3? Should I worry about employee web browsing traffic clogging up our download bandwidth? Will that affect page load time?
> 
> Our outbound data circuit traffic logs appear to hover around 500 kbit/second most of the time, sometimes bumps up to 1 mbps, and on occasion appears to hit our 3 mbps cap.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

Looks like your question is a two parter.

First, the best way to ensure that your website load times are fast is to make sure you are not maxing out your bandwidth (looks like you occasionally hit your cap, so that shouldn't be a problem). Employee web surfing (download) should not impact your website serving (upload) until you are maxing out the connection on a consistant basis. So, as long as you are not usually maxing out your connection, you should be fine.

Second, you might want to try to get more info on Google Analytics from webmasters.stackexchange.com as they probably have more users with more expertise on that tool over there. In addition to better knowledge of Google Analytics, they may be able to guide you to better caching plans to make the bandwidth you do have go further (assuming your site has a fair amount of static content that would make good cache candidates).

All of that said, more bandwidth will almost never hurt performance of your site, but it seems like for the time being it would be a waste of money for your situation. Keep an eye on your traffic logs and when you start hitting your cap more frequently, it might be time to increase your bandwidth.

---
*Originally posted on [Server Fault](https://serverfault.com/a/329415) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
