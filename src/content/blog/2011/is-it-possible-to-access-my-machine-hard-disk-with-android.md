---
title: "Is it possible to access my machine hard disk with android SDK?"
description: "My answer to \"Is it possible to access my machine hard disk with android SDK?\" on Stack Overflow"
date: 2011-02-10
author:
  name: Nate Bross
tags:
  - database
  - android-emulator
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4959880"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4959796):*

> I'm trying to develop a server-client application for Android mobile devices. Here I need to test my client application with a server application which is dealing with the database. As I'm developing this application using the Eclips-ganymede SR2 with Android SDK plugins, I'm confusing how I can test my application with a server.
> 
> Is it possible to use my hard disk as the server? I mean will the Android emulator can access my hard disk?? Please give any idea related this
> 
> Thanks on Regards..

*I posted the following answer, which was chosen as the accepted answer:*

There is no way for the Android emulator to access your hard drive in the sense that you're talking about. You may be able to mount a folder on your hard drive as an SD Card, but you would NOT want your app to use this, since it will go away once you deploy your app to the market. I recommend you build a web-service to run on your desktop (which will later be deployed to the Internet) and write your Android application to call this web-service.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Depends on how you mean "access" -- you should be able to access services on the host, IIRC the Android emulator is on the same LAN as your PC, so you should be able to access it by LAN IP. I may be wrong about that, can't find where I read it.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4959880) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
