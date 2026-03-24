---
title: "How should I configure firewall for online game server?"
description: "My answer to \"How should I configure firewall for online game server?\" on Game Development"
date: 2011-03-09
author:
  name: Nate Bross
tags:
  - server
  - security
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9554"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9514):*

> I'm complete newbie on game server work. As I know, online (massively multiplay) game server should keep some TCP or UDP connection from the user. As I (=newbie) guess, maybe huge count of socket port should be opened. So how should I configure firewall for game server? Or should I use some other special method to security? Any advise will be appreciated.

*I posted the following answer, which received 3 upvotes:*

In terms of configuring your firewall for maximum security: block EVERYTHING except that which you absolutely cannot live without.

In his [post](https://gamedev.stackexchange.com/questions/9514/how-should-i-configure-firewall-for-online-game-server/9545#9545) @Ricket makes several great points , I'd like to add a bit more background for you. You mention TCP and UDP "Connections" -- [TCP](http://en.wikipedia.org/wiki/Transmission_Control_Protocol) has connections and has handshakes built into the protocol, [UDP](http://en.wikipedia.org/wiki/User_Datagram_Protocol) does not. For both protocols, a port must be "allowed" and an application must be listening on that port. Think of an IP address like a physical address, and think of the port as the apartment number -- take a web server for example, it has an IP address and listens on TCP port 80, even though the website can be viewed by hundreds or thousands of clients they all send their requests to "port 80" and the operating system sends those to the web server which is listening on that port.

The reason some games use both UDP and TCP is because in-game, there are a variety of services being communicated with from client --> server and also server --> client.

**GameState** is a great candidate for a UDP type of transmission, because speed is more important than getting every packet in order, loss of packets is made up for by client-side prediction.

**In-Game-Chat** is a great candidate for TCP, since performance is not critical, and order of data is important.

So a game might use UDP 5678 for GameState transfer, and might use TCP 5679 for chat -- in this case, you'd add these two (and only these two) exceptions in the firewall.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9554) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
