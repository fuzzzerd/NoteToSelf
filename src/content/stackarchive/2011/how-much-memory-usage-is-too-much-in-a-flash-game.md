---
title: "How much memory usage is too much in a Flash game?"
description: "My answer to \"How much memory usage is too much in a Flash game?\" on Game Development"
date: 2011-03-08
author:
  name: Nate Bross
tags:
  - software-engineering
  - flash
  - browser-based-games
  - memory-efficiency
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9496"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9495):*

> I'm developing a Flash game, and I can appreciate that the memory usage is a little high for a Flash game (I think). Let's say 100+ MB.
> 
> So how much is too much when talking about memory usage in Flash games?

*I posted the following answer, which received 4 upvotes:*

The answer depends on your target audience. Do you want people to play your flash game on their Netbook and/or their flash supporting Playbook or Android tablet? If so, then memory usage over and beyond 50 MB is likely going to be an issue. If you only expect your game to be played on tricked out gaming rigs, then taking up 100-400 MB memory is likely not going to be a problem.

The issue, may be Flash's ability to address this much memory quickly. I'm not a flash developer so I don't really know, but if your game needs this much memory it probably has a lot of supporting code, which is where, even on "gods-own-machine," you may run into issues.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I assumed Memory requirements, not content on disk/bandwidth.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9496) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
