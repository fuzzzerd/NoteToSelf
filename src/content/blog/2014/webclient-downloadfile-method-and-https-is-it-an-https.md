---
title: "WebClient.DownloadFile method and HTTPS - is it an HTTPS connection?"
description: "My answer to \"WebClient.DownloadFile method and HTTPS - is it an HTTPS connection?\" on Stack Overflow"
date: 2014-05-08
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23553819"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23553803):*

> Cutting out a lot of irrelevant information, the basics are that I have a web address like so:
> 
> ```
> https://dinglydangs.com/download.dll?request=file&name=dunderdata.csv
> 
> ```
> 
> I am using `WebClient.DownloadFile to`, well, download the file. I need to know if, because it is an https link, this method is using an HTTPS connection to download the file. If not, what steps would I need to take to ensure an HTTPS connection is used?
> 
> Possibly relevant: The link itself is sent to me in an e-mail. No actual authentication is required, I simply navigate to the link and the file downloads.

WebClient will use the protocol specified in the Uri you pass the download method. You don't have to do anything special to make this happen.

You can use a tool like [Fiddler](http://www.telerik.com/download/fiddler) to verify this, by checking the connections going out from your machine.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): So, I said `uri` and the method accepts `address` both are a pointer to the online resource you want to download. As long the online resource link is https, the connection will be over https...

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23553819) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
