---
title: "How does one correctly identify IE10 Metro and IE10 Desktop from the server in order to send back a &quot;finger friendly&quot; or &quot;mouse friendly&quot; interface?"
description: "A question I asked on Stack Overflow"
date: 2012-06-22
author:
  name: Nate Bross
tags:
  - windows
  - windows-8
  - windows-runtime
  - browser-detection
  - internet-explorer-10
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/11162799"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/11162799):*

I've read that since user agent is the same between both, the recommend method is to use feature detection. That is fine and good for some situations, where you may want to display a Flash video/movie/app vs. a javascript slideshow, but my issue is to display a correct interface based on the user's input device.

The assumption I'm making is that if a user is in the "Metro" IE10 they are probably expecting to use their fingers instead of a mouse. That being the case, I'd like to give them an interface with large hit boxes.

My question: Is there a way to tell the difference and display an appropriate interface? Or am I stuck with making the user manually switch modes via links on my site that set a cookie?

---

> [AlfonsoML answered](https://stackoverflow.com/a/11591411) (4 upvotes):
>
> Still there's no way to detect normal IE from the crippled Metro IE, but know you can know at the server if the user has a touch screen [http://blogs.msdn.com/b/ie/archive/2012/07/12/ie10-user-agent-string-update.aspx](http://blogs.msdn.com/b/ie/archive/2012/07/12/ie10-user-agent-string-update.aspx)
> 
> That post includes other comments about how to perform detection in javascript.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/11162799) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
