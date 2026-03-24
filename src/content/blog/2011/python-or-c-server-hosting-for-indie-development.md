---
title: "Python or C server hosting for indie development"
description: "My answer to \"Python or C server hosting for indie development\" on Game Development"
date: 2011-03-07
author:
  name: Nate Bross
tags:
  - mmo
  - server
  - python
  - hosting
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9459"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9458):*

> I've written a lot of the game, but it's singleplayer. Now we want to join up and play together.
> 
> I want to host it like an MMO, but haven't got any personal ability to host (no static IPs or direct access to a reasonable router that will allow me to port forward) so I wondered if there were any free / very cheap hosting solutions for people developing games that need to develop their MMO side.
> 
> In my case it's a world server for a 2D game where the world map can be changed by the players. So, GAE sounds expensive, as there would be quite a few updates per second (I heard they bill for data updates but not for download, but can't find refernce to billing anywhere on the FAQs)
> 
> I'd prefer to be able to write the server in python as that's what the game is written in (with pygame), but C is fine, and maybe even better as it might prompt me to write some more performant world generator code ;)

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

You might want to look into getting an [EC2](http://aws.amazon.com/ec2/#pricing) instance (Micro) -- you can run basically whatever you want on them, so writing python shouldn't be a problem.

The smallest Linux instance is $0.02/hr as I recall, so it shouldn't run you all that much.

However, I would build and test your server code on a LAN, and only once that is working well would I start looking for external hosting options. No need to pay for an Internet server, until you have something to actually test.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): I'm not saying you shouldn't test in a WAN environment, but at east get it working on a LAN first.

**coderanger** (3 upvotes): Also of note, EC2 micro instances are free for a year to new customers.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9459) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
