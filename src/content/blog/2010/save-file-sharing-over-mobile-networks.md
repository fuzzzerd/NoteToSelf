---
title: "Save File sharing over Mobile Networks"
description: "My answer to \"Save File sharing over Mobile Networks\" on Game Development"
date: 2010-11-01
author:
  name: Nate Bross
tags:
  - iphone
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/5093"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/5071):*

> I'm looking to have people share game content, save files, or characters on a mobile game platform. That means they need to be able to upload and download from their phone, other iOS device, or computer.
> 
> What's the best way to do this?
> 
> Does Apple have a history of allowing games to download 'content' (incl. graphics) that hasn't been approved?
> 
> Are there any apps that do this, that I can try out?
> 
> Thanks,
> 
> * * *
> 
> \[EDIT\]
> 
> The files I want to share will be simple \*.plist files, probably in binary format.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

You'll want to use something like [Amazon S3](http://aws.amazon.com/s3/) or [Azure Blob storage](http://www.microsoft.com/windowsazure/storage/default.aspx). Both of these services will charge you for data transfer both IN and OUT; as well as the average storage amount you are using on their servers.

They both offer a simple API to read and write data to and from, you can write iOS, Android, BlackBerry, Windows, Mac, Linux, etc versions of your application, which would all consume the same web service API. This gives you the ability to have users interact with data on any platform, and have those changes immediatly available on any other platform.

Optionally, you could write a simple web-service which handles your data conversion between platforms, you could use something like [Amazon EC2](http://aws.amazon.com/ec2/) to host a service like this. Depending on the complexity of the data you are storing this might be over-kill.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I believe they expose a Dictionary type interface (key,value pairs) and as such searching may be difficult if you don't have the key. That said, I know that Azure offers `SQL Azure` which functions exactly like a SQL database (minus a few enterprise features) which would allow you to search. If your data is small, using one of these SQL Azure instances should not greatly increase the cost ($9.99/month for 1GB database iirc).

**Nate** (0 upvotes): It really depends on the complexity of the files, and where the OP intends to implement the code -- it would not be unreasonable to have a small parser inside each `version` of the application, so it can both serialize and deserialize the data to the web service persistence tier (S3 or whatever it ends up being). Updated the post to include my thoughts on it.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/5093) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
