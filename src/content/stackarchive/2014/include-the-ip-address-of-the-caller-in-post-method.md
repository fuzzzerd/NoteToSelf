---
title: "Include the IP Address of the Caller in $.Post() method"
description: "My answer to \"Include the IP Address of the Caller in $.Post() method\" on Stack Overflow"
date: 2014-06-18
author:
  name: Nate Bross
tags:
  - c#
  - jquery
  - asp.net
  - asp.net-web-api
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/24295586"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/24295535):*

> I am calling a Server with Post method and some data. The Server needs to have the Caller's IP Address or any sort of Identity. I am using $.Post() method of JQuery to Send in my POST request from my Machine.
> 
> At he Server End, If I get the HttpRequestMessage.Referrer.Host name its showing as "localhost". I just want to know how to iclude my IP information in the referrer or Origing headers of my Http request or opening my CLient Web Application which sends the Post request using some IP is the Only go? PFB my Java Script for this..
> 
> ```
>     function submitValues() {
>     var accno = $("#accno").val();
>     var amt = $("#amount").val();
>     var modifiedacctno = Math.floor((Math.random() * 100000) + 1);
>     var modifiedAmt = Math.floor((Math.random() * 10000) + 1);
> 
>     var posting=$.post("http://192.168.2.3:50063/api/Transaction", { ToAccountNumber: modifiedacctno, amount: modifiedAmt }, null, "html")
>   posting.done(function (data) {
>       console.log("Data Loaded: " + data);
>       $("#result").empty().append(data);
>   });
> }
> 
> ```

*I posted the following answer:*

Even if you were able to somehow get the callers IP address via javascript, often times a client, will not know its own IP address. This is because most people are behind [NAT](http://en.wikipedia.org/wiki/Network_address_translation) so their computer thinks they are on IP Address 192.168.25.53 but their public address is most likely different than that.

The way to get the client's IP address, is on the server. The correct way to do this is to use the [`Request`](http://msdn.microsoft.com/en-us/library/System.Web.HttpRequest%28v=vs.110%29.aspx) object, and more specifically the [`UserHostAddress`](http://msdn.microsoft.com/en-us/library/system.web.httprequest.userhostaddress%28v=vs.110%29.aspx) property.

```
var remoteUserIp = Request.UserHostAddress;
// do your processing with remoteUserIp here

```

Upon further review, this appears to not be a good way to do this for a WebAPI, please see the answer linked by @Kiran -- [https://stackoverflow.com/a/9571292/1184056](https://stackoverflow.com/a/9571292/1184056)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/24295586) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
