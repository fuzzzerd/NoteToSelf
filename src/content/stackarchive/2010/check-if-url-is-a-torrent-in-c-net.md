---
title: "Check if URL is a torrent in C# .NET"
description: "My answer to \"Check if URL is a torrent in C# .NET\" on Stack Overflow"
date: 2010-04-28
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - bittorrent
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2732123"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2732107):*

> What's the best way for me to take url like: [http://foobar.com/foo.torrent](http://foobar.com/foo.torrent) and check if that really is a torrent, not a html page or something else funny. Suggestions? Thank you :)

Read the torrent file specification, then write a C# app to download the contents of the URL and see if it meets the rules in the specification.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2732123) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
