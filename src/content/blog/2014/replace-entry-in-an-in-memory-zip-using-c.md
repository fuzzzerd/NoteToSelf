---
title: "Replace entry in an in memory zip using c#"
description: "My answer to \"Replace entry in an in memory zip using c#\" on Stack Overflow"
date: 2014-05-28
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - zip
  - archive
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23915468"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23915195):*

> I need to change an image in an openxml word document. To do this I thought I could simply open the .docx file using ZipArchive and replace the current image word/media/image1.jpg with the new image and rezip it up. The one caveat is that I would like to do this all in memory if possible.
> 
> I am using ZipArchive from _System.IO.Compression_ and can open the docx and find the image without a problem. The problem arise when i try to replace the file and regenerate the zip all in memory.
> 
> This will run on a web server and might have max 10-20 files happening at the same time and I will have everything as byte\[\], which is the reason i wanted to keep it all in memory. I would also be interested to know if people think I should just write it out to the disk.
> 
> **Update:** The actual docx will be uploaded from the user and the image i am replacing will be stored as a binary field in a database.

I would recommend you look into using [DotNetZip](http://dotnetzip.codeplex.com/). It is much more robust than the built-in capabilities of the framework. It also has a pretty simple to grasp API.

I see no reason you need to write to disk. You should be able to open the file from disk, make the modifications, and then send that down as part of the response.

While using a `byte[]` is good, as that is what the data is, you might want to look into using one of the stream classes, [`MemoryStream`](http://msdn.microsoft.com/en-us/library/system.io.memorystream%28v=vs.110%29.aspx) comes to mind as a nice API for dealing with binary data in memory.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23915468) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
