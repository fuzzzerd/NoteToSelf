---
title: "Need advice on setup for large Silverlight site"
description: "My answer to \"Need advice on setup for large Silverlight site\" on Server Fault"
date: 2011-09-09
author:
  name: Nate Bross
tags:
  - amazon-ec2
  - cloud
  - dedicated-server
  - saas
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/309802"
---

*Someone [asked on Server Fault](https://serverfault.com/q/309792):*

> > **Possible Duplicate:**  
> > [Can you help me with my capacity planning?](https://serverfault.com/questions/384686/can-you-help-me-with-my-capacity-planning)
> 
> Hopefully someone on here will be nice enough to give some advice on what setup we should go with. I'm not a sys admin, just a developer, so I'm not entirely sure what all will need to be involved in scaling the web app we're building out.
> 
> We're building a SaaS web app using Silverlight, with a MS SQL database on the backend, and WCF service calls. The silverlight app itself, currently, is 6MB (not obfuscated or compressed in anyways yet), and will not get much larger. We're potentially looking at hundreds of thousands, if not millions eventually, of customers using the site, and a large number of them joining as soon as the site goes live. Because it's a SaaS application it'll need 24/7/365 up time.
> 
> We currently have half a rack of dedicated hardware at a local data center, with 3 servers in place. 2 of them are currently maxed out and can't handle anymore load, but our 3rd one has very little on it and it's specs are: Proliant DL360 G7, 12 x 2.666 Ghz, Xeon E5650 @ 2.67Ghz, 49141.38MB of memory. We have a 2MB connection going to all 3 servers, burstable up to 100MB, but we're looking at increasing this size. All 3 servers are running vSphere 4 Advanced so it can run multiple VMs.
> 
> The server itself will have no need for storage from the web app, but will need to be able to handle all the database calls and server up the Silverlight app. The database calls would consist of normal things like checking user login credentials, saving and loading some data (a typical write to the database will never be over 1MB for the largest information being saved), etc.
> 
> We've looked at both Azure and Amazon as an alternative to hosting ourselves, because what we don't want to happen is after this goes live N number of people sign up for the service and we can't handle all the bandwidth for downloading the app and all the database calls. However, Azure is very expensive, and Amazon isn't that far behind it, but both seem like a good solution to the scalability concerns instead of adding X number of servers to our rack and tackling all that ourselves. Currently, we're leaning towards Amazon as that seems like a better cloud solution than Azure, in addition to being a little bit cheaper.
> 
> Would it be better to just add another server to the mix, and increase our bandwidth? Should we look into 2 additional servers, 2 for hosting the site and load balancing them, and then the 3rd server for our MS SQL database? Or should we just go with Amazon and let them host everything? I'm really at a loss for what the best solution is, thanks guys.

*I posted the following answer, which was chosen as the accepted answer:*

You've said that your max WCF transaction will not be larger than 1MB, but what about the average one? Is it .95MB or is it 25KB? Operating on the assumption that your current infrastructure can handle your expected WCF load and you are mostly worried about the deployment of your .xap, I highly recommend that you deploy your 6MB .xap to the Amazon or Azure CDN (if you truely believe you will have millions of visitors in the early days). This will save your bandwidth and also keep you from managing any cloud VMs. You might even be able to get away with S3 storage instead of CDN depending on your performance requirements.

This way, you host your ASP.NET Web components of your application on your web server along with your WCF Services. This server should have LAN access to the database server. This gives you the advantages of in-house application management without the bandwidth requirements of hosting a large .xap file for millions of clients.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Not a problem. Glad I could help. S3 is a great option if you don't need that extra last mile of performance.

</details>

---
*Originally posted on [Server Fault](https://serverfault.com/a/309802) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
