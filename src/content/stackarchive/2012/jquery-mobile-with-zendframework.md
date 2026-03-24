---
title: "jQuery Mobile with ZendFramework"
description: "My answer to \"jQuery Mobile with ZendFramework\" on Stack Overflow"
date: 2012-04-26
author:
  name: Nate Bross
tags:
  - jquery
  - zend-framework
  - jquery-mobile
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10338572"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10338546):*

> If I create two versions of my site, one normal and one in a folder on the server called "mobile" how can I then listen out for mobile devices and direct the user to the mobile folder?

*I posted the following answer:*

Your landing page will need to [detect](http://www.quirksmode.org/js/detect.html) and redirect. With javascript this can be done as easily as:

```
// note this regex is probably **not** the 
// best one to use for mobile user agent detection
if(navigator.userAgent.match(/ios|android|windows phone/)) {
    window.location = 'http://mysite.com/mobile';
}

```

If you are using a server side technology you may do your redirect there as it is the preferred method, since most mobile devices can disable javascript. See the [answer here](https://stackoverflow.com/questions/4483180/how-to-rewrite-to-mobile-myurl-com-if-user-is-mobile-use-apache-or-inside-weba) for example on how to do this with apache.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10338572) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
