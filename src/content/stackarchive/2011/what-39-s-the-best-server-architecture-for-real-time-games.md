---
title: "What&#39;s the best server architecture for real-time games?"
description: "My answer to \"What&#39;s the best server architecture for real-time games?\" on Game Development"
date: 2011-01-24
author:
  name: Nate Bross
tags:
  - server
  - client-server
  - .net
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/7684"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/7663):*

> I'm developing a Real-Time game which should hold thousands of players in real-time (FPS like. max 1s lag). What would be the best infrastructure for this?
> 
> My idea was using 2 server clusters - one for the Server End (all the computing side) and one for the Database end, where a load balancer is "responsible" for each of the clusters. One main server will receive the requests from the users and send back the IP address of the relevant server that the user can work this.
> 
> The database cluster will use database replication for consistency between the databases.
> 
> There should be a geographical load balancer as well - so it will assign the regional load balancer to each user for best response.
> 
> I'm using .NET + MSSQL for the game.
> 
> Thanks!

*I posted the following answer, which received 4 upvotes:*

Disclaimer: my game programming experience is based around client-side single player games, but I have a background in web applications (specifically on the Microsoft stack), so that is where I'm coming from with this answer, I feel that much would apply, but without actual testing a real game server its difficult to say how it will apply, but here goes. Know this: I haven't deployed a game server, only webapps.

I would suggest a two (server) tier approach. A database tier and an "application" tier; with the third (presentation) tier being your game client.

Relational databases, are great at querying data, and decent at writing data. The key is to serialize your database writes into manageable size chunks that your cluster can handle. The more advanced editions (Data center/Enterprise) of SQL Server support clustering and replication. I would start by building a small cluster and running some queries against it to see how it works.

In the application tier, if you're doing "zoning" or something similar, you can probably get away without setting up any clusters, and simply setup a server per zone. If your zones become to big, you could setup a cluster for each zone.

You will want to build a serialization process for sending data from application tier --> database tier. The key is to have multiple levels of serialization going on. Something _like_ this:

*   Level 1: Save to DB every X seconds, includes critical data:
    *   Player Health
    *   Player Items/Pickups
*   Level 2: Save to DB every 2X seconds, includes medium data:
    *   Player locations
    *   NPC locations
*   Level 3: Everything else, as infrequently as possible

This will keep your writes consistent and predictable, depending on the nature of your game, you could have infrequent database writes. The key is to realize that if your application server crashed, you'd have to come back online from the state in your database, so serializing player inventory every 90 minutes might make players upset.

For reading data, you'll want to load as much as possible into memory in the application tier as possible, then insure that all of your code uses this memory pool, in the background you can synchronize the memory pool with the database. As Joe points out, there will be times when you need "real-time" transactions. By serializing most of your writes, you should still have sufficient IO on your database to do real-time transactions when necessary, presuming sufficient hardware on the database server/cluster.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I agree. It depends upon the specific issues encountered. To be honest, I'd implement it as simply as possible and refactor and redesign if I ran into performance issues (to avoid premature optimizations). Depending on the nature of the game, a key/value store + db when necessary may be all thats needed.

**Nate** (0 upvotes): True, though the question was about big picture architecture, not implementation details.

**Nate** (0 upvotes): While sparse, that is what I was going toward in the last paragraph. I'm recommending a bit of a hybrid, where you use IN-Memory where possible, and the database when necessary.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/7684) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
