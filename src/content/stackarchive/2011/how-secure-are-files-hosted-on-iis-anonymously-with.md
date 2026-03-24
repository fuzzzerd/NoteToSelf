---
title: "How secure are files hosted on IIS Anonymously with Directory Browsing Disabled?"
description: "A question I asked on Server Fault"
date: 2011-06-15
author:
  name: Nate Bross
tags:
  - windows
  - security
  - iis
  - hacking
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/280762"
---

*I [asked this on Server Fault](https://serverfault.com/q/280762):*

To elaborate a bit on this point, I'd like to know how secure are documents hosted on an IIS website with the following configuration:

1.  IIS Directory Listing **Disabled**
2.  Anonymous Access is **Enabled**
3.  Site is accessed via **HTTPs only**
4.  Files have very long, randomly generated names (similar to a guid plus other characters)

I believe that this is a _relatively_ secure setup (I understand its not as secure as truly authenticated access.) I would like to know if I'm seeing this big wall yet it would be easily circumvented by someone with more knowledge than myself.

I guess what I'm looking for are ways one could get around the setup I have outlined above.

---

> [voretaq7 answered](https://serverfault.com/a/280764) (5 upvotes):
>
> Insecure. You are relying on [Security through Obscurity](http://en.wikipedia.org/wiki/Security_through_obscurity), which is never a good idea. If someone guesses your file names (or your "random" names aren't random enough and someone can derive what the names are after seeing one name) they can grab the files.
> 
> That being said, the level of security _may_ be appropriate for what you're trying to do. Without knowing how sensitive your data is it's impossible to day for sure.

---
*Originally posted on [Server Fault](https://serverfault.com/q/280762) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
