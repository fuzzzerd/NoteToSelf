---
title: "How can I get the IP address from the user client in C#?"
description: "My answer to \"How can I get the IP address from the user client in C#?\" on Stack Overflow"
date: 2012-06-01
author:
  name: Nate Bross
tags:
  - c#
  - logging
  - client
  - ip
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10852369"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10852305):*

> I'm using this code that I found in [Get public IP using DynDNS and WebRequest C#](https://stackoverflow.com/questions/10597655/get-public-ip-using-dyndns-and-webrequest-c-sharp)
> 
> to get the IP address. But I just get the IP Address from the server and what I need is the IP address from the user that is connected to my web application.
> 
> ```
> String direction = "";
> WebRequest request = WebRequest.Create("http://checkip.dyndns.org/");
> using (WebResponse response = request.GetResponse())
> using (StreamReader stream = new StreamReader(response.GetResponseStream()))
> {
>     direction = stream.ReadToEnd();
> }
> 
> //Search for the ip in the html
> int first = direction.IndexOf("Address: ") + 9;
> int last = direction.LastIndexOf("</body>");
> direction = direction.Substring(first, last - first);
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

If you are running a web app, and you want your "client's" IP, [you need to use the UserHostAddress](http://msdn.microsoft.com/en-us/library/system.web.httprequest.userhostaddress.aspx).

```
var userAddress = HttpContext.Current.Request.UserHostAddress;

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10852369) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
