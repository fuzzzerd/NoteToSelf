---
title: "Hello World to Twitter from C#"
description: "My answer to \"Hello World to Twitter from C#\" on Stack Overflow"
date: 2010-05-21
author:
  name: Nate Bross
tags:
  - c#
  - twitter
  - oauth
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2882710"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2882619):*

> A few days ago, I posted [this question](https://stackoverflow.com/questions/2849455/post-hello-world-to-twitter-from-net-application) and [this question](https://stackoverflow.com/questions/2862708/twitter-in-c-2010) asking about how to post "Hello World" to twitter. I've gotten helpful responses, which have propelled me further along, but I'm still lost.
> 
> I need to use OAuth because (as I read it) using username and password is going to be deprecated soon.
> 
> I need an example as simple as updating the status with the string constant 'Hello World!'.
> 
> My client is specifying that I must use C#.

I highly recommend that you use [TweetSharp](http://tweetsharp.codeplex.com/). It is very robust, supports the scenario you specify above (uses OAuth to authenticate).

I've used it on a few pet projects and I've been extremely happy with it. The download comes with a WPF sample application that shows you how to use twitter's OAuth implementation.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2882710) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
