---
title: "How to manage all the NPC/AI objects on the server?"
description: "My answer to \"How to manage all the NPC/AI objects on the server?\" on Game Development"
date: 2011-05-18
author:
  name: Nate Bross
tags:
  - architecture
  - ai
  - mmo
  - server
  - entity-system
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/12459"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/12458):*

> I'm writing a simple MMO, and currently have the the server-client architecture in place for multiple users to see each other and be able to move around together...now its time to add enemies.
> 
> Was wondering if anyone had links to articles that discussed how to best handle the hundreds of NPC objects that need to be managed in the world. I've done some searching and couldn't find much info about how this is typically done.
> 
> The two methods of structuring the implementation I can think of:
> 
> 1.  Holding all the instantiated NPC objects in a list, and having an NPC Thread loop through them sequentially and see if each has any logic that needs to be processed and perform necessary actions. I'm not sure if the performance of this design would be sufficient?
> 2.  Event based system. Create a method in the NPC class that processes AI/Logic on it, have this method be called when an associated event is signaled, either on a timer for non interacted AI functionality (such as wandering), or signal the event externally from the packet handler (player moving nearby, or player attacking within range).
> 
> Is either of these approaches the correct way? What other methods of doing this exist?

*I posted the following answer, which received 2 upvotes:*

It will depend on the number of enemies you have and how active they will be.

If you have lots of enemies, but they don't do much most of the time, an event system might be better. If you have enemies that are usually doing something the loop may work best since it factors out the complexity of the event system and because if events were in place they would be constantly firing anyway.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/12459) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
