---
title: "Efficient data packaging for a client-server network"
description: "My answer to \"Efficient data packaging for a client-server network\" on Game Development"
date: 2011-07-21
author:
  name: Nate Bross
tags:
  - c++
  - networking
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/15075"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/15061):*

> Language: C++
> 
> My question is as follows: I would like to know what would be the best or at least a good way to pack and send data from client to server and the reverse. There will be a few data composing a single packet. A packet will have a "id", that defines what is it for, then the data in a pre- determined order for that "action" which the packet corresponds.
> 
> For less performance-dependant systems, i would just send strings, that would be separated by a space, being them the data of the "action"and the first "word" the packet identifier and just chain if statements checking when there is a match.
> 
> Now for a more critical system, what i tought so far was something like this:
> 
> Make a string with packet id and data, and send it. Then, to unpack, i could extract the first integer in the string, and by having an array of packet handlers, with indices corresponding to the packet id they handle, and just do something like packetHandlers\[packetID\].Process(packetData) .
> 
> What do you think of it, any suggestions? greatly apreciated!

*I posted the following answer:*

What might be an example of the data you're sending? I don't see any reason to do anything overly fancy. Once the data is fully loaded into the receiver's buffer, inspect the first `int` based on its value, you then know how to process the rest of the data.

So a packet that has four data parts `id`, `val1`, `val2`, and `val2` might look like this:

```
// I'm using words (one byte) so my sample data is short
00000001 00101000 00010110 00010100 

```

As you read the first byte (which you know will always be there) you decide how to process the next set of data. If the first word (id) is `00000001` you know there are three more dwords following, and that is the end of the packet. To continue the example, you might have id = `00000010` and your specification tells you that for id value 2, you process `float`, `float`, `float` in that order, which might specify a player position in world space.

Think of it as writing your own binary file system, you have a header value, which describes the rest of the data, where it is located (what position) and what type of data to treat it as.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): As said by others, start with the string and see what happens. Chances are, you'll have a bottle neck elsewhere in your code.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/15075) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
