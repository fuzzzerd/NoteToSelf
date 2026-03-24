---
title: "GUI for DirectX"
description: "My answer to \"GUI for DirectX\" on Game Development"
date: 2011-02-18
author:
  name: Nate Bross
tags:
  - c++
  - directx
  - gui
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/8769"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/8749):*

> I'm looking for a GUI library built on top of DirectX- preferably 9, but I can also do 11. I've looked at stuff like DXUT, but it's way too much for me- I'm only needing some UI controls which I would rather not write (and debug) myself, and their need to keep a C-compatible API is definitely a big downside. I'd rather look at UI libs that are designed to be integrated into an existing DirectX-based system, rather than forming the basis of a system. Any recommendations?
> 
> Edit:
> 
> I guess that nobody has heard of a DirectX GUI written by someone who has heard of the basics of object-orientation? The purpose of not using DXUT was because using their API was worse than writing my own, and the documentation that starts with `namespace::type::GetInstance()` is _not_ qualifying as "better than DXUT".

*I posted the following answer:*

I don't know if this will get you what you're looking for, but here's a MSDN document on [WPF and Win32 Interoperation](http://msdn.microsoft.com/en-us/library/ms742522.aspx). The section "Hosting WPF Content in a Microsoft Win32 Window" may be of the most interest to you. Also, from the first link: [Walkthrough: Hosting WPF in Win32](http://msdn.microsoft.com/en-us/library/ms744829.aspx).

While I've never done this, it may be able to get you the benifits you're looking for without having to do too much wheel re-inventing.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/8769) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
