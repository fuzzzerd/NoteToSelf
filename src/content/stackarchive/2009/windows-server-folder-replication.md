---
title: "Windows Server Folder Replication"
description: "A question I asked on Server Fault"
date: 2009-07-02
author:
  name: Nate Bross
tags:
  - windows
  - iis
  - directory
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/35282"
---

*I [asked this on Server Fault](https://serverfault.com/q/35282):*

I have two servers using MS NLB for IIS and this is working great.

I have a D:\\Websites\\ directory on both servers that contain the html, css, aspx, and images etc. I would like to have the D:\\Websites\\ directory on ServerA be replicated to D:\\Websites\\ on ServerB. I don't need any snyc, just a brute copy/replace from ServerA -> ServerB.

What is the best way to achieve this?

---

> [Zoredache answered](https://serverfault.com/a/35286) (3 upvotes):
>
> [Robocopy](http://technet.microsoft.com/en-us/library/cc733145%28WS.10%29.aspx) is probably the best choice for a simple copy.
> 
> ```
> robocopy src dst /mir
> 
> ```

---
*Originally posted on [Server Fault](https://serverfault.com/q/35282) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
