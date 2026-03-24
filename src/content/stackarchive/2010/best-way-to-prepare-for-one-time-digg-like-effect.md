---
title: "Best way to prepare for one time digg-like effect"
description: "My answer to \"Best way to prepare for one time digg-like effect\" on Server Fault"
date: 2010-08-26
author:
  name: Nate Bross
tags:
  - scalability
  - traffic-management
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/174887"
---

*Someone [asked on Server Fault](https://serverfault.com/q/174884):*

> I have a web site which will be featured in a place which will send a large peak of one-time traffic in a couple of weeks.
> 
> The server hosting the website also hosts the control panel my customers use.
> 
> The website part is simple and mostly static. But it includes a wordpress blog.
> 
> My question How and where can I put or cache the website and blog so that it will make it through traffic peak? For example, is it possible to host the pages on Amazon s3 so that they will be accessible via the regular urls on my domains without going through the server ?
> 
> EDIT:
> 
> I can change the urls of the control panel so that it will have its own subdomain and will remain on the main server. And force www.mysite.com for access to the company website and blog. Now, how can I make www.mysite.com/page1 read from amazon s3 bucket containing page1 html?

*I posted the following answer, which received 1 upvote:*

I'd wonder how much traffic you anticipate, what does your current server look like? How much bandwidth is available to it? What type of disks does it have? How much memory is available to it?

For your S3 solution, you'd need craft redirects to the S3 location, for example:

[http://www.yourblog.com/InterestingPage1.html](http://www.yourblog.com/InterestingPage1.html) --> [http://whatever-s3-url.com/you-get-for-page-1](http://whatever-s3-url.com/you-get-for-page-1) [http://www.yourblog.com/InterestingPage2.html](http://www.yourblog.com/InterestingPage2.html) --> [http://whatever-s3-url.com/you-get-for-page-2](http://whatever-s3-url.com/you-get-for-page-2)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I guess I was thinking you'd modify the InterestingPage1.html to simply contain a meta refresh to the CDN URL -- this way your server only sends down a 3kb file. It does not remove all load from your server, just most of it. Also, the javascript and image suggestion by @Martijn Heemels may give you the best bang for your buck.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/174887) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
