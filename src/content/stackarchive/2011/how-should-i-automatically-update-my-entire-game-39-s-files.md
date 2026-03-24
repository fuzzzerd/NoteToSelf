---
title: "How should I automatically update my entire game&#39;s files?"
description: "My answer to \"How should I automatically update my entire game&#39;s files?\" on Game Development"
date: 2011-04-16
author:
  name: Nate Bross
tags:
  - client-server
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/11192"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/11144):*

> How should I automatically update my player's game assets and executables? It is preferable for the update software to be free. Updates must be small in size and not waste cpu-time. Also it has to be easy to run a update server to create new versions or logistically.
> 
> My use case is for updating player game versions such as in massive online clients or running distributed game testing or even normal games.

*I posted the following answer, which received 2 upvotes:*

I noticed that you tagged the question client-server, so I assume you're also asking how to physically distribute the patch. Depending on your budget, the easiest for users is to simply provide an HTTP download on your website, but this requires the most bandwidth from your server (patch size \* games purchased), a slightly less user friendly option is to upload your content as a bittorrent and run some seeds from your servers. This reduces bandwidth requried on your server, but will be more of a pain for your users unless you are like Blizzard and have the resoruces to build a bittorrent client into your game.

The bottom line is that it depends on how large (MB/GB) your patch or update will be and how much money you have to throw at a server and bandwidth to distribute your patch to end users.

From a software perspective, there are many ways to distribute and install game updates, but in general you should stick with the methods used by traditional software. Have the user download an update installer, which knows how to prompt the user for adminsitrative access to their machine and copy/update files as necessary checking versions (user may have skipped v1.1 and installed v1.2 directly).

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/11192) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
