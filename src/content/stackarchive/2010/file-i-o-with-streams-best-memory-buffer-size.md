---
title: "File I/O with streams - best memory buffer size"
description: "My answer to \"File I/O with streams - best memory buffer size\" on Stack Overflow"
date: 2010-06-13
author:
  name: Nate Bross
tags:
  - c#
  - optimization
  - file
  - size
  - buffer
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3033795"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3033771):*

> I am writing a small I/O library to assist with a larger (hobby) project. A part of this library performs various functions on a file, which is read / written via the `FileStream` object. On each `StreamReader.Read(...)` pass,
> 
> I fire off an event which will be used in the main app to display progress information. The processing that goes on in the loop is vaired, but is not too time consuming (it could just be a simple file copy, for example, or may involve encryption...).
> 
> My main question is: What is the best memory buffer size to use? Thinking about physical disk layouts, I could pick 2k, which would cover a CD sector size and is a nice multiple of a 512 bytes hard disk sector. Higher up the abstraction tree, you could go for a larger buffer which could read an entire FAT cluster at a time. I realise with today's PC's, I could go for a more memory hungry option (a couple of MiB, for example), but then I increase the time between UI updates and the user perceives a less responsive application.
> 
> As an aside, I'm eventually hoping to provide a similar interface to files hosted on FTP / HTTP servers (over a local network / fastish DSL). What would be the best memory buffer size for those (again, a "best-case" tradeoff between perceived responsiveness vs. performance)?

*I posted the following answer, which received 4 upvotes:*

When I deal with files directly through a stream object, I typically use 4096 bytes. It seems to be reasonably effective across multiple I/O areas (local file system, LAN/[SMB](https://en.wikipedia.org/wiki/Server_Message_Block), network stream, etc.), but I haven't profiled it or anything. Way back when, I saw several examples use that size, and it stuck in my memory. That doesn't mean it's the best though.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3033795) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
