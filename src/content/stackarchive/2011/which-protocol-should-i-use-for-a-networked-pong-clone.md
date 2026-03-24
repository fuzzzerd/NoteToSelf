---
title: "Which protocol should I use for a networked Pong clone?"
description: "My answer to \"Which protocol should I use for a networked Pong clone?\" on Game Development"
date: 2011-04-12
author:
  name: Nate Bross
tags:
  - networking
  - server
  - mobile
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/11017"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/11016):*

> I have to design a Pong game for Android. There are multiple mobiles and a game server. Application is installed in mobile. Mobile 1 (M1) can see the movement of bat and ball of mobile 2 (M2) an vice-versa.
> 
> Suppose if M1 hits the ball, all the movements of the ball and bat of M1 can be seen on M2's screen and vice-versa. Now I want to know which protocol I should use and why?
> 
> Edited: how can a server take the initiative to send a message? What are the different methods to do this: i.e. "push", other,...

*I posted the following answer, which received 5 upvotes:*

I'd recommend the [User Datagram Protocol](http://en.wikipedia.org/wiki/User_Datagram_Protocol) -- have each client send user inputs to your server, have your server calculate the results of all inputs and respond that result to each client.

```
**Pseudo Code for UDP Client/Server**
// public
int sendSequenceID= 0;
int receiveSequenceID = 0;

// send data
var data = new { id = sendSequenceID, DeltaX = changeInXCoord, DeltaY = changeinYCoord };
udpSocket.Send(data);
sendSequenceID++;

//receive data
var receivedData = null;
udpSocket.Receive(receivedData);
if(receivedData.id > receivedSequenceID) // ignore packets out of order
{
    receivedSequenceID = receivedData.id;
    // process received data
}

```

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/11017) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
