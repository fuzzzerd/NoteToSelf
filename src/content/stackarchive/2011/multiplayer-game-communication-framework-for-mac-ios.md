---
title: "Multiplayer game communication framework for mac/ios"
description: "My answer to \"Multiplayer game communication framework for mac/ios\" on Game Development"
date: 2011-03-08
author:
  name: Nate Bross
tags:
  - architecture
  - multiplayer
  - networking
  - ios
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9503"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9499):*

> (Cross post from stackoverflow)
> 
> I am creating a multiplayer 2D game for Mac and iOS devices. I'll be using cocso2d for graphics/game engine, however I am largely blank on what to use for multiplayer communication. Please note that I cannot use central severs e.g. SmartFox, RedDwarf, etc since I want the players to "host" games for others and be able to play it on their LAN, VPN or my own servers.
> 
> Any pointers? I checked [lidgren](http://code.google.com/p/lidgren-network-gen3/) but it's for .NET only and hence not an option for me.
> 
> EDIT: just in case it wasn't clear, the messaging has to be real time hence it's probably going to be over UDP

*I posted the following answer:*

You don't want to be hosting any games from an iOS device, so you are probably looking for something to run on OSX.

I'm not sure how lidgren works or if it is Mono compatible, but the [Mono](http://www.mono-project.com/Main_Page) project has done an excellent job of bringing .NET to OSX and Linux. I highly recommend you look into it, especially if your library of choice is .NET.

The server architecture and platform don't dictate what the client must use, so having a Mono/.NET lidgren server and an iOS (Objective-C) client should be just fine; however, there is [MonoTouch](http://monotouch.net/) which brings .NET and C# to iOS, so you _could_ use that if you felt like it.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I didn't mean it wouldn't work, I just meant that the 3G connection could cause issues for connected clients. As the phone moves 3G might move to Edge and/or drop for a short period, locking out all connected clients.

**Nate** (0 upvotes): I have not personally used MonoTouch so I can't speak to its ability to interact with Objective-C, but I've heard very good things about it.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9503) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
