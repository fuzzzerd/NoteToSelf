---
title: "Game server for an android/iOS turn-based board-game"
description: "My answer to \"Game server for an android/iOS turn-based board-game\" on Game Development"
date: 2011-02-12
author:
  name: Nate Bross
tags:
  - iphone
  - android
  - server
  - client-server
  - turn-based
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/8473"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/8470):*

> I am currently programming an iPhone game and I would like to create an online multiplayer mode. In the future, this app will be port to Android devices, so I was wondering how to create the game-server?
> 
> First at all, which language should I choose? How to make a server able to communicate both with programs written in objective-c and Java?
> 
> Then, how to effectively do it? Is it good if I open a socket by client (there'll be 2)? What kind of information should I send to the server? to the clients?

*I posted the following answer, which received 4 upvotes:*

Since your game is going to be turn based, real-time updates are not super important. The easiest way to do this is to use an already built server, I would go with a web server. Any platform worth porting your game to should facilitate accessing web services located on a web server.

In order to provide updates in near real-time, I recommend you look into [long polling.](https://stackoverflow.com/questions/333664/simple-long-polling-example-code) The code at that link, provides the most basic implementation of long polling from the server side. But the bottom line is that once a request is made to a resource, the server executes a blocking call until the data requested becomes available. Then you repeat the process again, and again.

In terms of what data should you send back, always treat the client as hostile. The client should send whatever its "turn-state" is, the server validates it, and then if everything checks out, it sends the new "game-state" back to all connected clients.

\--

SOAP web services is probably the best place to start ([link](http://mac-objective-c.blogspot.com/2009/04/soap-webservices-in-objective-ccocoa.html)), they are easy to get started, and most web frameworks provide a method for exposing them. You might also want to look into RESTful services, but they typically leave a bit more of the serialization process up to the consumer.

For consuming SOAP web services on Android, I'd look [here](https://stackoverflow.com/questions/297586/how-to-call-web-service-with-android).

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Check the two links I added. They should get you started with SOAP web services, which is probably the most simple way to get started.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/8473) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
