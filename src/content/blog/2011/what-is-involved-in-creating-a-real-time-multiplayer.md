---
title: "What is involved in creating a real-time multiplayer platformer game?"
description: "My answer to \"What is involved in creating a real-time multiplayer platformer game?\" on Game Development"
date: 2011-07-13
author:
  name: Nate Bross
tags:
  - networking
  - multiplayer
  - platformer
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/14810"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/14806):*

> I'm creating a platformer game that has a "co-operative" feature which I'd like to work over networks / the internet.
> 
> Now I've read up on network game programming including articles like [What every programmer needs to know about game networking](http://gafferongames.com/networking-for-game-programmers/what-every-programmer-needs-to-know-about-game-networking/) and so I understand the difference between techniques like Peer-to-Peer lockstep and Server-Client prediction architectures:
> 
> *   I've concluded that for any real-time game that is going to be played over the internet, Peer-to-Peer lockstep simply isn't an option.
> *   I'm also concerned that even for a platformer a simple client-server architecture (without some sort of client prediction) would result in degraded gameplay due to the delay between action and reaction caused by a round-trip to a server. (Having said that I want to eliminate the need for a central server, and so only one of the players, the client, will actually experience this lag).
> 
> This leaves client prediction, but even for a simple game like a platformer this still sounds pretty complex.
> 
> How would I go about creating a working client predictive system for a multiplayer platformer game?

*I posted the following answer, which was chosen as the accepted answer and received 6 upvotes:*

I don't think that half of your code base will turn into network code if you decide to implement a feature such as this.

In my opinion, the most simple way to do this, is to setup a "central" server (even if that means that one player "hosts" the game and then connects to his own server) that accepts all user input as fast as possible, and sends it back out to each client.

On the client, you implement this no differently than if you were doing a co-op game for two players locally, except you read P1 from keyboard, and P2 from network.

You'll need to have the server send out a full game state every once in a while, and both clients can either snap to the new authoratitave state from the server, or they can slide into the new state (over a few seconds). Unless you have horrible packet loss or tons of clients per server, this approach should suffice for the situation you outline.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): No, I'm suggesting that you send full game states occasionally, so the client can make sure that it is not too far off.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/14810) — 6 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
