---
title: "How to obtain the current url"
description: "My answer to \"How to obtain the current url\" on Stack Overflow"
date: 2011-11-18
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/8185377"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/8185313):*

> > **Possible Duplicate:**  
> > [How to get the URL of the current page in C#](https://stackoverflow.com/questions/593709/how-to-get-the-url-of-the-current-page-in-c-sharp)
> 
> If I am in a page say `http://myweb/folder/obtain.aspx?thevalue=3` , how can i determine if the url contains `obtain.aspx?thevalue` in c#?. I just need to check whether the user landed on this particular page.
> 
> PS: I guess I dont really need to check for the `?thevalue` but just the `obtain.aspx`

I recommend using [Request.Url](http://msdn.microsoft.com/en-us/library/system.web.httprequest.url.aspx). To get the exact file name, you may try also using [System.IO.Path](http://msdn.microsoft.com/en-us/library/system.io.path.aspx)

```
var aspxFile = System.IO.Path.GetFileName(Request.Url.LocalPath);
var landed = aspxFile.Equals("obtain.aspx", StringComparison.InvariantCultureIgnoreCase);
if(landed) { // your code }

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/8185377) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
