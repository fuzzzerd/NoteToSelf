---
title: "How do I detect a mobile browser, and direct appropriate content to it?"
description: "A question I asked on Stack Overflow"
date: 2010-08-16
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - mobile
  - mobile-website
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3497273"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3497273):*

I've read that its bad (not advised) to use User Agent Sniffing to send down the correct content for a mobile browser, so I'm wondering what IS the best way to do this?

I'm using ASP.NET MVC, and I've built my site and it works well on desktop browsers, so I'm looking to begin building a mobile version. When a mobile browser comes to my site, I'd like to use a different set of Views, which ideally posses the following attributes:

1.  Link to pre-scaled images
2.  Use minimal javascript
3.  Remove all but essential content

My first thought was to sniff the user agent, and then send down a different .CSS file, but as stated above I've read that this is a bad way to do this, so I'm asking you for your thoughts.

---

> [Craig Stuntz answered](https://stackoverflow.com/a/3497330) (7 upvotes):
>
> The user agent is really all you have in a `HTTP GET` request, but you should let someone else maintain the list. We use the [Microsoft Mobile Device Browser File](http://mdbf.codeplex.com/) with a custom view engine in a manner roughly similar to [this Scott Hanselman post](http://www.hanselman.com/blog/MixMobileWebSitesWithASPNETMVCAndTheMobileBrowserDefinitionFile.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3497273) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
