---
title: "Box2D networking"
description: "My answer to \"Box2D networking\" on Game Development"
date: 2011-06-03
author:
  name: Nate Bross
tags:
  - networking
  - box2d
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/13129"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/13114):*

> I am trying to make a simple sync between two box2d rooms, where you can drag boxes using the mouse.
> 
> So every time player clicks (and holds the mousedown) a box, I try send joint parameters to server, and server sends them to other clients. When mouseup occurs, I send command to delete joint.
> 
> The problem is that sync breaks too often. Is my way radically wrong, or it just needs some tweaks?
> 
> [http://www.youtube.com/watch?v=eTN2Gwj6\_Lc](http://www.youtube.com/watch?v=eTN2Gwj6_Lc)
> 
> Source code [https://github.com/agentcooper/Box2d-networking](https://github.com/agentcooper/Box2d-networking)

*I posted the following answer, which received 1 upvote:*

I think @Gajet is on the right track; the other thing I think you may be missing, is that the server should define the state. Events should be sent to the server, who does world calculations and then updates each client.

In other words, when a client clicks, it should send the data about that click to the server; the server then calculates where the box ends up, and sends that data to all clients. The client who actually performed the event can start "predicting" where the server is going to tell it to put the box.

Put a different way, each client should tell the server "the user just did X" at the moment it knows that X happened. Then, the server goes about figuring out what that means, and updates all of the clients. As soon as the client finishes telling the server about X, it starts moving the box and when it gets the update from the server, it adjusts the box from its own calculation to the calculation received from the server.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): As @Gajet said, sometimes you'll need to send the entire state in order to re-sync, though if you are only sending the actual position of each object when it changes, you shouldn't get that out of sync. Someone with more experience on network code could probably elaborate more on this.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/13129) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
