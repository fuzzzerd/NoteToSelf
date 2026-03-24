---
title: "Store images in database or on file system"
description: "My answer to \"Store images in database or on file system\" on Stack Overflow"
date: 2010-12-28
author:
  name: Nate Bross
tags:
  - database
  - image
  - database-design
  - file
  - filesystems
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4550219"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4550197):*

> > **Possible Duplicate:**  
> > [Storing Images in DB - Yea or Nay?](https://stackoverflow.com/questions/3748/storing-images-in-db-yea-or-nay)
> 
> Is it faster and more reliable to store images in the file system or should I store them in a database?
> 
> Let's say the images will be no larger than 200 MB. The objective is fast, reliable access.
> 
> In general, how do people decide between storing files (e.g., images, PDFs) in the file system or in the database?

*I posted the following answer, which was chosen as the accepted answer and received 15 upvotes:*

Personal opinion: I ALWAYS store images on the file system, and only store a filepath in the database. In many situations, databases are stored on fast (read: expensive storage, 15k RPM or SSD drives) storage. Images or other files, typically can be stored on slower (read: cheaper, larger drives, 7.2k RPM drives) storage.

I find this to be the best, since it allows for the database to remain small in size. In general, databases store "data" well. They can search and retrieve small bits of data fast. File Systems store "files" well, they are optimized to find and retrieve larger bits of data fast.

Obviously there are tradeoffs to both approaches, and there isn't going to be a one-size fits all; however, there may be some use cases where storing images in the database is a good thing, if they are all quite small, and you don't anticipate very many of them, and your database is on the same storage medium as your file share, then it probably makes sense to drop the images directly into the database.

As a side note, SQL Server 2008R2 has a FileStream field type, which can provide the best of both worlds, I have not used it yet, so I can't speak to how well it works.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4550219) — 15 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
