---
title: "What are the networking possibilities with XNA and Xbox 360?"
description: "My answer to \"What are the networking possibilities with XNA and Xbox 360?\" on Game Development"
date: 2010-11-02
author:
  name: Nate Bross
tags:
  - xna
  - networking
  - xbox360
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/5124"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/5117):*

> I know that XNA for Xbox 360 has limited access to networking, rumored to only allow communication via a propitiatory Microsoft protocol to other Xbox 360 units.
> 
> What are the networking possibilities XNA offers? How many Xbox 360 units can be connected to the same subnet? 16 maximum? Can any Xbox send data to any other Xbox on the subnet like Peer-to-peer communication? Can an Xbox communicate with XNA on Windows PC's as well? Are there any other devices you can communicate with?
> 
> And what about game servers? Can you setup your own multiplayer game server and have Xbox's connect to it and communicate freely? What platform would you write the game server code in? C++ on Unix? How many Xbox units can connect to a server at a time? If you cannot setup your own game server are there unofficial 'hacks' that enable indie developers to develop and run a game server?
> 
> Since I'm no Xbox developer (ie. I don't own a $10000 devkit) I cannot use C++ libraries like [Zoidcom](http://www.zoidcom.com/).

*I posted the following answer, which received 4 upvotes:*

XNA Games on 360 use and are required to use `Live` -- which as I recall means max users per "game" is 32, and you can not connect to any outside services at all.

* * *

**Update 1:** Form post confirming the 32 player max -- [http://forums.create.msdn.com/forums/t/27446.aspx](http://forums.create.msdn.com/forums/t/27446.aspx)

* * *

**Update 2:** It should be noted that `XNA on Windows != (XNA on Xbox | XNA on Windows Phone)` that is to say that on Windows, XNA can do anything any other .NET application can do; on Xbox and WP7 XNA is restricted to using the Xbox Live Gaming Services.

MSDN Documentation on Xbox Live and XNA -- [http://msdn.microsoft.com/en-us/library/bb975642.aspx](http://msdn.microsoft.com/en-us/library/bb975642.aspx)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I made the assumption that the question was regarding an Internet based game; since in my experience, system-link on LAN is a very rare scenario...

**Nate** (1 upvotes): Your confusion is understandable, but on Windows XNA can use any networking component because on Windows XNA is just .NET code; however, on Xbox you are forced to use Live because the Xbox's implementation of the .NET Framework doesn't contain any network implementation except for the Live gaming network.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/5124) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
