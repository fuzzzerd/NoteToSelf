---
title: "How to implement Long Polling with PHP and flash?"
description: "My answer to \"How to implement Long Polling with PHP and flash?\" on Game Development"
date: 2011-04-28
author:
  name: Nate Bross
tags:
  - flash
  - multiplayer
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/11733"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/11732):*

> I'm trying to make a multiplayer game but am a newbie to server side programming except that I know a little PHP. I learnt about this technique called long polling where the server can wait for fresh data to be available and then send it. How does one do long polling using PHP? Are there any libraries available. I'm already using ZendAMF, so how do I make zendamf and long-polling to co-exist?

*I posted the following answer:*

On the client side (I do not have any experience using ZendAMF), you simply make a call with a very long timeout value, and as soon as you get a response, you make another call with another long timeout. The "long-polling" happens on the server.

On the server long-polling simply means that when your client application makes a "get" (or "post") to a PHP page, that page simply does not `exit();` until there is data to be sent. So a short loop that continually checks the status of the data until it has changed. The loop that checks data will "block" until there is data.

There maybe libraries available that help with this, but it shouldn't be necessary unless your situation is quite complex.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/11733) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
