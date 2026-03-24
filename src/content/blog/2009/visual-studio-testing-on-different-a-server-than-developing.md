---
title: "Visual Studio: testing on different a server than developing on"
description: "My answer to \"Visual Studio: testing on different a server than developing on\" on Stack Overflow"
date: 2009-10-05
author:
  name: Nate Bross
tags:
  - visual-studio
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1520481"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1520405):*

> In dreamweaver, it's really simple to set up a site so when you test a page that you are developing that it deploys it to a different test server that you are developing on and then browses to that page at that location also.
> 
> Question: Can you set up Visual Studio so that when you "run" or "View in Browser" that it automatically pushes the pages out to the test server and then browses to that location as well?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

You've got two options as far as I can see:

1) Create a local project and set it up to run from your own local IIS, (this is not exactly what you're asking, but it should be more of an apples to apples test, as opposed to the built-in visual studio web server).

2) Use Remote Debugging to attach your Visual Studio instance to a remote server, links [here](http://msdn.microsoft.com/en-us/library/bt727f1t.aspx) and [here](http://msdn.microsoft.com/en-us/library/ms227556.aspx)

With option two, you'll still likely need to publish/deploy your solution to the server each time, but you will be able to step through and debug your code running on the remote server.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1520481) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
