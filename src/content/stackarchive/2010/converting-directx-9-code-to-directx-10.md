---
title: "Converting DirectX 9 code to DirectX 10"
description: "My answer to \"Converting DirectX 9 code to DirectX 10\" on Game Development"
date: 2010-11-16
author:
  name: Nate Bross
tags:
  - software-engineering
  - directx10
  - directx9
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/5641"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/5640):*

> Preface:
> 
> I purchased Programming an RTS in DirectX recently, and I know the code uses DirectX 9, but it has fantastic reviews and is apparently one of the best books you can get on beginning DirectX.
> 
> Question:
> 
> To my understanding, DirectX is just a means of displaying graphics to the scene. I will still have to code any games in C++ using game logic code, input, etc. Was I naive in thinking I could read the book with the MSDN tutorial site open for DirectX 10, and convert all of the samples to DirectX 10, or is that gonna be extremely difficult for me to do? Also, is DirectX 9 still relevant, or would it really behoove me to go about converting to DX 10?
> 
> Thanks!

*I posted the following answer, which received 3 upvotes:*

It is important to note that the DirectX API is independent of the DirectX Hardware. That is to say that a DirectX 11 video card can still be accessed through the DirectX 9 API.

Much legacy code still uses the DirectX 9 API, and as I recall, Direct X is a backwards compatible API, so your code targeting DirectX 9 should run on a machine with DirectX 11 installed.

To asnwer your specific questions, DirectX is an API to facilitate running high performance graphics and sound on the computer. You will still write your game logic in C/C++, as I recall DirectX has some classes for dealing with user input as well. With respect to API changes between 9, 10, and 11 I do not really know, but I cannot imagine that a good programmer would have difficulty figuring it out, given a well written book and MSDN. I should also mention here, that I don't do much native DirectX programming, so take my words about API changes with a grain of salt.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/5641) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
